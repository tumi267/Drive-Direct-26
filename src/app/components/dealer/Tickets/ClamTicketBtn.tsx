'use client'

import useClaimTicket from "@/app/hooks/useClaim"

interface Props {
  ticketId: string
}

export default function ClaimTicketBtn({
  ticketId,
}: Props) {

  const {loading,claim} = useClaimTicket()

  return (
    <button
      onClick={() => claim(ticketId)}
      disabled={loading}
      className="rounded-lg bg-black px-6 py-3 text-white"
    >
      {loading
        ? 'Claiming...'
        : 'Claim Ticket'}
    </button>
  )
}