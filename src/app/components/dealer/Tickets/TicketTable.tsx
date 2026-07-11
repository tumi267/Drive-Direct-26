import React from 'react'
interface Props{
    ticket:any
}
function TicketTable({ticket}:Props) {
  return (
    <div className="">

      <div className="flex items-center justify-between">

        <div>

          <h2 className="font-bold">
            {ticket.reference}
          </h2>

          <p className="text-sm text-gray-500">
            {ticket.vehicle.make}{' '}
            {ticket.vehicle.model}
          </p>

        </div>

        <span className="rounded bg-blue-100 px-3 py-1 text-sm">
          {ticket.status}
        </span>
        {ticket.claimedBy && (<div className="text-sm">Assigned to:{' '}
        <span className="font-semibold">
        {ticket.claimedBy.firstName} {ticket.claimedBy.lastName}
        </span>
        </div>
        )}
      </div>

      <div className="mt-4">

        <p>
          {ticket.firstName}{' '}
          {ticket.lastName}
        </p>

        <p className="text-sm text-gray-500">
          {ticket.email}
        </p>

        <p className="mt-3 line-clamp-2">
          {ticket.message}
        </p>

      </div>

    </div>
  )
}

export default TicketTable