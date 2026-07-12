import TicketDetails from '@/app/components/dealer/Tickets/TicketDetails'
import { getTicketById } from '@/app/libs/crud/tickets/ticket.get'
import React from 'react'

async function page({
    params,
  }: {
    params: { id: string }
  }) {
    try {
        const ticket = await getTicketById(params.id)
    
      if (!ticket) {
        return <div>ticket not found.</div>
      }
    
      return (
        <div className="container mx-auto py-8">
            <TicketDetails
            ticket={ticket}
            />
        </div>
      )
      } catch (error) {
        return <div>opps looks like something went wrong</div>
      }
}

export default page