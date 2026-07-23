'use client'

import useCampaignbanner from '@/app/hooks/useCampaignbanner'
import {
  BannerLinkType,
  BannerPlacement,
} from '@prisma/client'

function BannerCampaignForm() {
  const {formdata,updateField,handleImageChange,handleSubmit,} = useCampaignbanner()

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-6 rounded-lg border bg-white p-6 shadow"
    >
      <h2 className="text-2xl font-bold">
        Banner Campaign
      </h2>

      {/* Title */}

      <div>
        <label className="block mb-2">
          Title
        </label>

        <input
          type="text"
          value={formdata.title}
          onChange={(e) =>
            updateField('title', e.target.value)
          }
          className="w-full rounded border p-2"
        />
      </div>

      {/* Description */}

      <div>
        <label className="block mb-2">
          Description
        </label>

        <textarea
          value={formdata.discription}
          onChange={(e) =>
            updateField(
              'discription',
              e.target.value
            )
          }
          className="w-full rounded border p-2"
        />
      </div>

      {/* Placement */}

      <div>
        <label className="block mb-2">
          Placement
        </label>

        <select
          value={formdata.placement}
          onChange={(e) =>
            updateField(
              'placement',
              e.target
                .value as BannerPlacement
            )
          }
          className="w-full rounded border p-2"
        >
          {Object.values(BannerPlacement).map(
            (placement) => (
              <option
                key={placement}
                value={placement}
              >
                {placement}
              </option>
            )
          )}
        </select>
      </div>



      {/* Start Date */}

      <div>
        <label className="block mb-2">
          Start Date
        </label>

        <input
          type="date"
          value={
            formdata.startDate
              ? new Date(formdata.startDate)
                  .toISOString()
                  .split('T')[0]
              : ''
          }
          onChange={(e) =>
            updateField(
              'startDate',
              e.target.value
                ? new Date(e.target.value).toISOString()
                : null
            )
          }
          className="w-full rounded border p-2"
        />
      </div>

      {/* End Date */}

      <div>
        <label className="block mb-2">
          End Date
        </label>

        <input
          type="date"
          value={
            formdata.endDate
              ? new Date(formdata.endDate)
                  .toISOString()
                  .split('T')[0]
              : ''
          }
          onChange={(e) =>
            updateField(
              'endDate',
              e.target.value
                ? new Date(e.target.value).toISOString()
                : null
            )
          }
          className="w-full rounded border p-2"
        />
      </div>

      {/* Image */}

      <div>
        <label className="block mb-2">
          Banner Image
        </label>

        <input
          type="file"
          accept="image/*"
          onChange={handleImageChange}
        />
      </div>

      {/* Submit */}

      <button
        type="submit"
        className="rounded bg-blue-600 px-4 py-2 text-white"
      >
        Create Campaign
      </button>
    </form>
  )
}

export default BannerCampaignForm