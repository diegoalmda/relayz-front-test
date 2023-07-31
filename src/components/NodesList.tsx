import { IRelayzNode } from '@/types/DataTypes'
import axios from 'axios'

export default async function NodesList() {
  const { data } = await axios.get<{ data: IRelayzNode[] }>(
    'http://localhost:3000/api/nodes'
  )

  return (
    <div className="mx-4 my-8 flex gap-4 flex-wrap justify-center">
      {data.data.map((item) => (
        <div
          key={item.id}
          className="p-0 border-[0.01rem] border-gray-200 rounded-md min-w-[230px] text-sm max-sm:text-xs"
        >
          <div className="bg-gray-500 rounded-t-md py-4 flex justify-center">
            <span className="font-bold">Owner: &nbsp;</span>
            <span className="font-semibold">{item.owner}</span>
          </div>
          <div className="p-4">
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
        </div>
      ))}
    </div>
  )
}
