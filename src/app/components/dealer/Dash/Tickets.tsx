'use client'

import TicketCard from "../Tickets/TicketCard"
import TicketEmpty from "../Tickets/TicketEmpty"

export default function Tickets() {
  const {tickets,loading,error,} = useTickets()

  if (loading) {
    return <div>Loading...</div>
  }

  if (error) {
    return <div>{error}</div>
  }

  if (tickets.length === 0) {
    return <TicketEmpty />
  }

  return (
    <div className="space-y-4">
      {tickets.map((ticket) => (
        <TicketCard
          key={ticket.id}
          ticket={ticket}
        />
      ))}

    </div>
  )
}