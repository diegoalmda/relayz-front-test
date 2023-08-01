import NodesContent from '@/components/NodesContent'

export default function Home() {
  return (
    <div>
      <h1 className="text-center mt-8 mb-4 text-2xl font-semibold">
        List of Nodes
      </h1>
      <NodesContent />
    </div>
  )
}
