'use client'

import useTransferTicket from '@/app/hooks/useTicketTransfer'
import { transferTicketService } from '@/app/services/ticket/ticket.transfer'
import React from 'react'


interface Props {
  ticketId: string
  createdById: string
  currentDepartment: 'SALES' | 'FINANCE' | 'MANAGEMENT' | 'OPERATIONS'
}

const departments = ['SALES','FINANCE','MANAGEMENT','OPERATIONS',] as const

function TicketTransferButton({ticketId,createdById,currentDepartment,}: Props) {
  const {isOpen,setIsOpen,department,setDepartment,reason,setReason,loading,setLoading,} = useTransferTicket()

  const availableDepartments = departments.filter(
    (d) => d !== currentDepartment
  )

  async function handleTransfer(
    e: React.FormEvent<HTMLFormElement>
  ) {
    e.preventDefault()

    try {
      setLoading(true)

      await transferTicketService({ticketId,dealerUserId: createdById,department,})

      setIsOpen(false)

    } catch (error) {
      console.error(error)
    } finally {
      setLoading(false)
    }
  }

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="rounded-lg border px-5 py-2 hover:bg-gray-100"
      >
        Transfer Ticket
      </button>

      {isOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm"
          onClick={() => setIsOpen(false)}
        >
          <form
            onSubmit={handleTransfer}
            onClick={(e) => e.stopPropagation()}
            className="w-full max-w-xl rounded-xl bg-white shadow-2xl"
          >
            {/* Header */}

            <div className="border-b px-6 py-4">
              <h2 className="text-xl font-semibold">
                Transfer Ticket
              </h2>

              <p className="mt-1 text-sm text-gray-500">
                Move this ticket to another department.
              </p>
            </div>

            {/* Body */}

            <div className="space-y-5 p-6">

              <div>
                <label className="mb-2 block text-sm font-medium">
                  Current Department
                </label>

                <div className="rounded-lg border bg-gray-100 px-4 py-3">
                  {currentDepartment}
                </div>
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium">
                  Transfer To
                </label>

                <select
                  value={department}
                  onChange={(e) =>
                    setDepartment(
                      e.target.value as typeof departments[number]
                    )
                  }
                  className="w-full rounded-lg border px-3 py-2"
                >
                  {availableDepartments.map((item) => (
                    <option
                      key={item}
                      value={item}
                    >
                      {item}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium">
                  Transfer Notes
                </label>

                <textarea
                  rows={5}
                  value={reason}
                  onChange={(e) =>
                    setReason(e.target.value)
                  }
                  placeholder="Optional notes for the next department..."
                  className="w-full resize-none rounded-lg border px-3 py-2"
                />
              </div>

            </div>

            {/* Footer */}

            <div className="flex justify-end gap-3 border-t bg-gray-50 px-6 py-4">

              <button
                type="button"
                onClick={() => setIsOpen(false)}
                className="rounded-lg border px-5 py-2 hover:bg-gray-100"
              >
                Cancel
              </button>

              <button
                disabled={loading}
                className="rounded-lg bg-blue-600 px-5 py-2 font-medium text-white hover:bg-blue-700 disabled:opacity-50"
              >
                {loading
                  ? 'Transferring...'
                  : 'Transfer'}
              </button>

            </div>
          </form>
        </div>
      )}
    </>
  )
}

export default TicketTransferButton