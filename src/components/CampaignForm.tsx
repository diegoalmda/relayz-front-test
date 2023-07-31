'use client'

import { useForm as useHookForm } from 'react-hook-form'

import { zodResolver } from '@hookform/resolvers/zod'
import swal from 'sweetalert'
import { z } from 'zod'

import { urlValidator, dateValidator } from '@/utils/validators'

const createCampaignFormSchema = z.object({
  campaignName: z
    .string()
    .nonempty('Campaign Name is required.')
    .transform((name) => {
      return name.trim()
    })
    .refine((name) => {
      return name !== ''
    }, 'Campaign Name cannot be empty.'),
  url: z.optional(z.string()).refine(
    (value) => {
      return !value || urlValidator.test(value)
    },
    {
      message: 'Invalid URL.',
    }
  ),
  startDate: z
    .string()
    .nonempty('Start date is required')
    .refine((value) => dateValidator.test(value), {
      message: 'Invalid date.',
    }),
  optionalDate: z.optional(z.string()).refine(
    (value) => {
      return !value || dateValidator.test(value)
    },
    {
      message: 'Invalid date.',
    }
  ),
  wallet: z.string(),
})

type CreateCampaignFormData = z.infer<typeof createCampaignFormSchema>

export function CampaignForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitSuccessful },
  } = useHookForm<CreateCampaignFormData>({
    resolver: zodResolver(createCampaignFormSchema),
  })

  const submitCampaign = (data: CreateCampaignFormData) => {
    console.log('Campaign submitted', data)
    if (data.campaignName && data.startDate) {
      swal('Success', 'Campaign created.', 'success')
      reset()
    } else {
      swal('Error', 'Campaign could not be created.', 'error')
    }
  }

  return (
    <form
      onSubmit={handleSubmit(submitCampaign)}
      className="w-[60%] max-md:w-[70%] max-sm:w-[90%] max-sm:text-sm"
    >
      <div className="flex flex-col">
        <label htmlFor="campaignName">
          <span>Campaign name</span>
        </label>
        <input
          className={`h-10 px-2 bg-gray-700 border-[0.01rem] rounded-md outline-0 ${
            errors.campaignName ? 'border-red-600' : 'border-gray-300'
          }`}
          type="text"
          id="campaignName"
          placeholder="Insert campaign name."
          {...register('campaignName')}
        />
        <div className="h-7 flex justify-start">
          {errors.campaignName && (
            <small className="text-red-600">
              {errors.campaignName.message}
            </small>
          )}
        </div>

        <label htmlFor="url">
          <span>URL</span>
        </label>
        <input
          className={`h-10 px-2 bg-gray-700 border-[0.01rem] rounded-md outline-0 ${
            errors.url ? 'border-red-600' : 'border-gray-300'
          }`}
          type="text"
          id="url"
          placeholder="https://"
          {...register('url')}
        />
        <div className="h-7 flex justify-start">
          {errors.url && (
            <small className="text-red-600">{errors.url.message}</small>
          )}
        </div>

        <label htmlFor="startDate">
          <span>Start Date</span>
        </label>
        <input
          className={`h-10 px-2 bg-gray-700 border-[0.01rem] rounded-md outline-0 ${
            errors.startDate ? 'border-red-600' : 'border-gray-300'
          }`}
          type="date"
          id="startDate"
          {...register('startDate')}
        />
        <div className="h-7 flex justify-start">
          {errors.startDate && (
            <small className="text-red-600">{errors.startDate.message}</small>
          )}
        </div>

        <label htmlFor="optionalDate">
          <span>Optional Date</span>
        </label>
        <input
          className={`h-10 px-2 bg-gray-700 border-[0.01rem] rounded-md outline-0 ${
            errors.optionalDate ? 'border-red-600' : 'border-gray-300'
          }`}
          type="date"
          id="optionalDate"
          {...register('optionalDate')}
        />
        <div className="h-7 flex justify-start">
          {errors.optionalDate && (
            <small className="text-red-600">
              {errors.optionalDate.message}
            </small>
          )}
        </div>

        <label htmlFor="wallet">
          <span>Wallet</span>
        </label>
        <input
          className={`h-10 px-2 bg-gray-700 border-[0.01rem] rounded-md outline-0 ${
            errors.wallet ? 'border-red-600' : 'border-gray-300'
          }`}
          type="text"
          id="wallet"
          placeholder="Insert wallet code."
          {...register('wallet')}
        />
        <div className="h-7 flex justify-start">
          {errors.wallet && (
            <small className="text-red-600">{errors.wallet.message}</small>
          )}
        </div>

        <button
          type="submit"
          className="my-6 py-2 bg-purple-600 text-white hover:bg-purple-500 rounded-md"
        >
          Create
        </button>
      </div>
    </form>
  )
}
