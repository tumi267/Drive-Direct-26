'use client'

import useTickets from "@/app/hooks/useTickets"
import TicketCard from "../Tickets/TicketCard"
import TicketEmpty from "../Tickets/TicketEmpty"
import Pagination from "../../gobal/Pagination/Pagination"
import DashboardPagination from "../DashboardPagination/DashboardPagination"

export default function Tickets() {
  const {tickets,loading,error,total,page,setpage} = useTickets()

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
      <DashboardPagination
      currentPage={page}
      totalPages={total}
      onPageChange={setpage}
    />
     
    </div>
  )
}