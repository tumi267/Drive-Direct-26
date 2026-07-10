'use client'

import { CsvVehicle } from '@/app/types/csv'

interface Props {
  rows: CsvVehicle[]
}

function CsvPreview({ rows }: Props) {
  if (rows.length === 0) return null

  return (
    <div className="rounded-xl border bg-white shadow">

      <div className="border-b p-5">
        <h2 className="text-2xl font-bold">
          Import Preview
        </h2>

        <p className="text-gray-500">
          {rows.length} vehicles ready to import
        </p>
      </div>

      <div className="overflow-x-auto">

        <table className="min-w-full text-sm">

          <thead className="bg-gray-100">

            <tr>

              <th className="px-4 py-3 text-left">
                Make
              </th>

              <th className="px-4 py-3 text-left">
                Model
              </th>

              <th className="px-4 py-3 text-left">
                Variant
              </th>

              <th className="px-4 py-3 text-left">
                Year
              </th>

              <th className="px-4 py-3 text-left">
                Mileage
              </th>

              <th className="px-4 py-3 text-left">
                Price
              </th>

              <th className="px-4 py-3 text-left">
                Fuel
              </th>

              <th className="px-4 py-3 text-left">
                Transmission
              </th>

              <th className="px-4 py-3 text-left">
                Body
              </th>

            </tr>

          </thead>

          <tbody>

            {rows.map((vehicle, index) => (

              <tr
                key={index}
                className="border-t hover:bg-gray-50"
              >

                <td className="px-4 py-3">
                  {vehicle.make}
                </td>

                <td className="px-4 py-3">
                  {vehicle.model}
                </td>

                <td className="px-4 py-3">
                  {vehicle.variant}
                </td>

                <td className="px-4 py-3">
                  {vehicle.year}
                </td>

                <td className="px-4 py-3">
                  {vehicle.mileage}
                </td>

                <td className="px-4 py-3">
                  R{Number(vehicle.price).toLocaleString()}
                </td>

                <td className="px-4 py-3">
                  {vehicle.fuelType}
                </td>

                <td className="px-4 py-3">
                  {vehicle.transmission}
                </td>

                <td className="px-4 py-3">
                  {vehicle.bodyType}
                </td>

              </tr>

            ))}

          </tbody>

        </table>

      </div>

    </div>
  )
}

export default CsvPreview