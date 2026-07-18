'use client'

import { getticketHistorybyid } from '@/app/services/ticket/tickets.get'
import { DealerRole, InteractionOutcome, InteractionType } from '@prisma/client'
import React, { useEffect, useState } from 'react'

interface Props {
  ticketID: string
}
export interface TicketHistoryItem {
    id: string
    type: InteractionType
    subject: string | null
    notes: string
    outcome: InteractionOutcome | null
    followUpAt: string | null
    createdAt: string
    createdBy: {
      firstName: string
      lastName: string
      role: DealerRole
    } | null
  }
function TicketHistory({ ticketID }: Props) {
  const [isOpen, setIsOpen] = useState(false)
  const [history,setHistory]=useState<TicketHistoryItem[]>([])

  useEffect(()=>{
    const indatadata=async ()=>{
        const res =await getticketHistorybyid(ticketID)
        setHistory(res)
    }
    indatadata()
},[])


  return (
    <div>
      <button
        onClick={() => setIsOpen(true)}
        className="rounded-lg border px-5 py-2 hover:bg-gray-100"
      >
        Ticket History
      </button>

      {isOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm"
          onClick={() => setIsOpen(false)}
        >
          <div
            className="flex max-h-[85vh] w-full max-w-4xl flex-col overflow-hidden rounded-xl bg-white shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="border-b px-6 py-4">
              <h2 className="text-2xl font-semibold">
                Ticket History
              </h2>

              <p className="mt-1 text-sm text-gray-500">
                Ticket ID: {ticketID}
              </p>
            </div>

            {/* Timeline */}
            <div className="flex-1 overflow-y-auto p-6">
              <div className="space-y-6">

                {history.map((item) => (
                  <div
                    key={item.id}
                    className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm"
                  >
                    <div className="flex items-center justify-between">
                      <h3 className="font-semibold text-lg">
                        {item.type}
                      </h3>

                      <span className="text-sm text-gray-500">
                        {item.createdAt}
                      </span>
                    </div>

                    <div className="mt-3">
                      <p className="text-sm font-medium text-gray-500">
                        Subject
                      </p>

                      <p>{item.subject}</p>
                    </div>

                    <div className="mt-4">
                      <p className="text-sm font-medium text-gray-500">
                        Notes
                      </p>

                      <p className="mt-1 whitespace-pre-wrap text-gray-700">
                        {item.notes}
                      </p>
                    </div>

                    <div className="mt-5 grid grid-cols-2 gap-4 border-t pt-4 text-sm">
                      <div>
                        <span className="font-medium text-gray-500">
                          Created By
                        </span>

                        <p>{item.createdBy?.firstName} {item.createdBy?.lastName}</p>
                      </div>

                      <div>
                        <span className="font-medium text-gray-500">
                          Follow Up
                        </span>

                        <p>{item.followUpAt}</p>
                      </div>
                    </div>
                  </div>
                ))}

              </div>
            </div>

            {/* Footer */}
            <div className="flex justify-end border-t bg-gray-50 px-6 py-4">
              <button
                onClick={() => setIsOpen(false)}
                className="rounded-lg border px-5 py-2 hover:bg-gray-100"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default TicketHistory