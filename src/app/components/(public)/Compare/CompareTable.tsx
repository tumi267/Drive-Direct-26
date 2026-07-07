'use client'

import useCompareGlobal from '@/app/hooks/useCompareGlobal'
import CompareCard from './CompareCard'

function CompareTable() {
  const { vehicles } =useCompareGlobal()

  if (vehicles.length === 0) {
    return (
      <div className="py-20 text-center">
        <h2 className="text-2xl font-semibold">
          No vehicles selected.
        </h2>
        <p className="mt-2 text-gray-500">
          Add vehicles to compare.
        </p>
      </div>
    )
  }

  return (
    <div className="space-y-8">
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {vehicles.map((vehicle) => (
          <CompareCard
            key={vehicle.id}
            vehicle={vehicle}
          />
        ))}
      </div>

      <div className="overflow-x-auto rounded-lg border">
        <table className="min-w-full">
          <tbody>

            <tr>
              <th className="border p-4 text-left">
                Price
              </th>

              {vehicles.map((vehicle) => (
                <td
                  key={vehicle.id}
                  className="border p-4"
                >
                  R{' '}
                  {Number(
                    vehicle.price
                  ).toLocaleString()}
                </td>
              ))}
            </tr>

            <tr>
              <th className="border p-4 text-left">
                Year
              </th>

              {vehicles.map((vehicle) => (
                <td
                  key={vehicle.id}
                  className="border p-4"
                >
                  {vehicle.year}
                </td>
              ))}
            </tr>

            <tr>
              <th className="border p-4 text-left">
                Mileage
              </th>

              {vehicles.map((vehicle) => (
                <td
                  key={vehicle.id}
                  className="border p-4"
                >
                  {vehicle.mileage.toLocaleString()} km
                </td>
              ))}
            </tr>

            <tr>
              <th className="border p-4 text-left">
                Fuel
              </th>

              {vehicles.map((vehicle) => (
                <td
                  key={vehicle.id}
                  className="border p-4"
                >
                  {vehicle.fuelType}
                </td>
              ))}
            </tr>

            <tr>
              <th className="border p-4 text-left">
                Transmission
              </th>

              {vehicles.map((vehicle) => (
                <td
                  key={vehicle.id}
                  className="border p-4"
                >
                  {vehicle.transmission}
                </td>
              ))}
            </tr>

            <tr>
              <th className="border p-4 text-left">
                Body Type
              </th>

              {vehicles.map((vehicle) => (
                <td
                  key={vehicle.id}
                  className="border p-4"
                >
                  {vehicle.bodyType}
                </td>
              ))}
            </tr>

            <tr>
              <th className="border p-4 text-left">
                Colour
              </th>

              {vehicles.map((vehicle) => (
                <td
                  key={vehicle.id}
                  className="border p-4"
                >
                  {vehicle.colour}
                </td>
              ))}
            </tr>

          </tbody>
        </table>
      </div>

    </div>
  )
}
export default CompareTable