import { CampaignForm } from '@/components/CampaignForm'

export default function Form() {
  return (
    <div className="flex flex-col justify-start items-center m-4 py-10 rounded-md border-[0.01rem] border-gray-500">
      <h1 className="text-2xl font-semibold max-sm:text-lg mb-8">
        Create new Campaign
      </h1>
      <CampaignForm />
    </div>
  )
}
