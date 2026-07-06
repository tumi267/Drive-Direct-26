import { BadgeCheck } from 'lucide-react'

interface DealerHeroProps {
  dealer: {
    id: string
    companyName: string
    tradingName: string | null
    createdAt: Date | string
    verificationStatus: string
    _count: {
      listings: number
    }
  }
}

function DealerHero({
  dealer,
}: DealerHeroProps) {
  const isVerified =
    dealer.verificationStatus === 'VERIFIED'

  return (
    <section className="rounded-xl border bg-white p-8 shadow-sm">
      <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
        <div>
          <div className="flex flex-wrap items-center gap-3">
            <h1 className="text-4xl font-bold">
              {dealer.companyName}
            </h1>

            {isVerified ? (
              <span className="flex items-center gap-1 rounded-full bg-green-100 px-3 py-1 text-sm font-medium text-green-700">
                <BadgeCheck size={16} />
                Verified Dealer
              </span>
            ) : (
              <span className="rounded-full bg-yellow-100 px-3 py-1 text-sm font-medium text-yellow-700">
                Pending Verification
              </span>
            )}
          </div>

          {dealer.tradingName && (
            <p className="mt-2 text-lg text-gray-500">
              {dealer.tradingName}
            </p>
          )}
        </div>

        <div className="grid grid-cols-2 gap-8 text-center">
          <div>
            <p className="text-3xl font-bold">
              {dealer._count.listings}
            </p>
            <p className="text-sm text-gray-500">
              Vehicles
            </p>
          </div>

          <div>
            <p className="text-3xl font-bold">
              {new Date(
                dealer.createdAt
              ).getFullYear()}
            </p>
            <p className="text-sm text-gray-500">
              Member Since
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default DealerHero