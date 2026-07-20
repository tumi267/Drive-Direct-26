'use client'

import usePayFast from '@/app/hooks/usePayFast'

interface Props {
  dealerId: string
  vehicleId: string
  days: number
}

function PayFastButton({dealerId,vehicleId,days,}: Props) {
  const {loading,startPriorityPurchase,} = usePayFast()

  return (
    <button
      disabled={loading}
      onClick={() =>
        startPriorityPurchase({dealerId,vehicleId,days,})
      }
      className="rounded-lg bg-green-600 px-5 py-2 font-medium text-white transition hover:bg-green-700 disabled:cursor-not-allowed disabled:opacity-50">
      {loading?'Redirecting...':`Purchase ${days} Day Priority`}
    </button>
  )
}

export default PayFastButton