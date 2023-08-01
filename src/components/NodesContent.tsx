'use client'

import { useCallback, useEffect, useState } from 'react'

import { IRelayzNode } from '@/types/DataTypes'
import axios from 'axios'

import { SelectedNodeSection } from './SelectedNodeSection'

export default function NodesContent() {
  const [nodes, setNodes] = useState<IRelayzNode[]>([])
  const [selectedNode, setSelectedNode] = useState<IRelayzNode | null>(null)

  const getNodes = useCallback(async () => {
    const { data } = await axios.get<{ data: IRelayzNode[] }>(
      'http://localhost:3000/api/nodes'
    )
    setNodes(data.data)
  }, [])

  const handleSelectNode = useCallback((node: IRelayzNode) => {
    setSelectedNode(node)
    window.scroll({
      top: 0,
      behavior: 'smooth',
    })
  }, [])

  useEffect(() => {
    if (nodes.length === 0) {
      getNodes()
    }
  }, [nodes.length, getNodes])

  return (
    <>
      {selectedNode && <SelectedNodeSection item={selectedNode} />}
      <div className="mx-4 my-8 flex gap-4 flex-wrap justify-center">
        {nodes.map((item) => (
          <button
            key={item.id}
            className={`p-0 border-[0.01rem] border-gray-200 rounded-md min-w-[230px] text-sm max-sm:text-xs w-full transition hover:opacity-50 ${
              selectedNode?.id === item.id ? 'opacity-50' : ''
            }`}
            onClick={() => handleSelectNode(item)}
          >
            <div className="bg-gray-500 rounded-t-md py-4 flex justify-center">
              <span className="font-bold">Owner: &nbsp;</span>
              <span className="font-semibold">{item.owner}</span>
            </div>
            <div className="p-4 flex flex-row items-start gap-4 max-md:flex-col max-md:gap-0">
              <p>
                <span className="font-bold">Download speed: </span>
                <span className="text-green-700">{item.downloadSpeed}</span>
              </p>
              <p>
                <span className="font-bold">Upload speed: </span>
                <span className="text-orange-700">{item.uploadSpeed}</span>
              </p>
              <p>
                <span className="font-bold">Rating: </span>
                <span className="text-blue-500">{item.rating}</span>
              </p>
              <p>
                <span className="font-bold">Traffic: </span>
                <span className="text-blue-500">{item.traffic}</span>
              </p>
              <p>
                <span className="font-bold">State: </span>
                <span
                  className={`${
                    item.state === 'Active' ? 'text-green-900' : 'text-red-900'
                  }`}
                >
                  {item.state}
                </span>
              </p>
            </div>
          </button>
        ))}
      </div>
    </>
  )
}
