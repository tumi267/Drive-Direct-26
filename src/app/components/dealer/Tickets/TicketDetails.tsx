import React from 'react'
import ClamTicketBtn from './ClamTicketBtn'
import Email from '../../email/Email'
interface Props{
    ticket:any
}
function TicketDetails({ticket}:Props) {
  return (
<div className="space-y-6">

{/* Ticket Header */}

<section className="rounded-lg border bg-white p-6 shadow-sm">

  <div className="flex items-start justify-between">

    <div>

      <h1 className="text-2xl font-bold">
        {ticket.reference}
      </h1>

      <p className="mt-1 text-gray-500">
        {ticket.vehicle.make}{' '}
        {ticket.vehicle.model}{' '}
        {ticket.vehicle.variant}
      </p>

    </div>

    <span className="rounded-lg bg-blue-100 px-4 py-2 text-sm font-medium text-blue-700">
      {ticket.status.replaceAll('_', ' ')}
    </span>

  </div>

  <div className="mt-6 grid grid-cols-2 gap-6">

    <div>

      <p className="text-xs uppercase text-gray-500">
        Dealer
      </p>

      <p className="font-medium">
        {ticket.dealer.companyName}
      </p>

    </div>

    <div>

      <p className="text-xs uppercase text-gray-500">
        Assigned To
      </p>

      {ticket.claimedBy ? (
        <p className="font-medium">
          {ticket.claimedBy.firstName}{' '}
          {ticket.claimedBy.lastName}
        </p>
      ) : (
        <p className="text-orange-500">
          Unclaimed
        </p>
      )}

    </div>

  </div>

</section>

{/* Customer */}

<section className="rounded-lg border bg-white p-6 shadow-sm">

  <h2 className="mb-5 text-lg font-semibold">
    Customer
  </h2>

  <div className="grid grid-cols-2 gap-5">

    <div>

      <p className="text-xs uppercase text-gray-500">
        Name
      </p>

      <p>
        {ticket.firstName}{' '}
        {ticket.lastName}
      </p>

    </div>

    <div>

      <p className="text-xs uppercase text-gray-500">
        Phone
      </p>

      <p>{ticket.phone}</p>

    </div>

    <div>

      <p className="text-xs uppercase text-gray-500">
        Email
      </p>

      <p>{ticket.email}</p>

    </div>

  </div>

</section>

{/* Enquiry */}

<section className="rounded-lg border bg-white p-6 shadow-sm">

  <h2 className="mb-5 text-lg font-semibold">
    Customer Message
  </h2>

  <p className="whitespace-pre-wrap text-gray-700">
    {ticket.message}
  </p>

</section>

{/* Vehicle */}

<section className="rounded-lg border bg-white p-6 shadow-sm">

  <h2 className="mb-5 text-lg font-semibold">
    Vehicle
  </h2>

  <div className="grid grid-cols-2 gap-5">

    <div>

      <p className="text-xs uppercase text-gray-500">
        Make
      </p>

      <p>{ticket.vehicle.make}</p>

    </div>

    <div>

      <p className="text-xs uppercase text-gray-500">
        Model
      </p>

      <p>{ticket.vehicle.model}</p>

    </div>

    <div>

      <p className="text-xs uppercase text-gray-500">
        Year
      </p>

      <p>{ticket.vehicle.year}</p>

    </div>

    <div>

      <p className="text-xs uppercase text-gray-500">
        Price
      </p>

      <p>
        R{' '}
        {Number(ticket.vehicle.price).toLocaleString()}
      </p>

    </div>

  </div>

</section>

{/* CRM Actions */}

<section className="rounded-lg border bg-white p-6 shadow-sm">

  <h2 className="mb-5 text-lg font-semibold">
    Actions
  </h2>

  <div className="flex flex-wrap gap-3">

    {!ticket.claimedBy ?
      <ClamTicketBtn
      ticketId={ticket.id}
      />:<Email/>}

  </div>

</section>

</div>
  )
}

export default TicketDetails