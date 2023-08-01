import { IRelayzNode } from '@/types/DataTypes'

interface SelectedNodeProps {
  item: IRelayzNode
}

export function SelectedNodeSection({ item }: SelectedNodeProps) {
  return (
    <section
      key={item.id}
      className="p-0 m-auto border-[0.01rem] border-purple-200 rounded-md min-w-[230px] text-sm max-sm:text-xs w-[80%]  animate-expand text-white max-md:w-[90%]"
    >
      <div className="bg-purple-700 rounded-t-md py-4 flex justify-center">
        <span className="font-bold">Owner: &nbsp;</span>
        <span className="font-semibold">{item.owner}</span>
      </div>
      <div className="p-4 flex flex-col items-center gap-4 max-md:flex-col max-md:gap-0">
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
    </section>
  )
}
