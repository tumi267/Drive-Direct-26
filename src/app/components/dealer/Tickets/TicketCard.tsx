'use client'

interface Props {
  ticket: any
}

export default function TicketCard({
  ticket,
}: Props) {
  return (
    <div className="rounded-lg border bg-white p-5 shadow-sm">

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