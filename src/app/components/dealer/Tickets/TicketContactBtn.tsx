'use client'
import useContact from '@/app/hooks/useContactBtn'
import { contactTicket } from '@/app/services/ticket/ticket.contact'
import { ticketProps } from '@/app/types/tickets'
import { InteractionType } from '@prisma/client'
import React from 'react'

function TicketContactBtn({createdById,ticketId}:ticketProps) {
    const {isopen,setisopen,interaction, setInteraction,loading,SetLoading}=useContact()
    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        // set loading is loading
        try {
            SetLoading(true)
          await contactTicket({
            ...interaction,
            ticketId,
            createdById,
          })
          SetLoading(false)
          setisopen(false)
        } catch (err) {
            SetLoading(false)
          console.error(err)
        }
      }
    return (
    <div className='mt-1'><button onClick={()=>{setisopen(!isopen)}}>contact</button>
    {isopen&&<div 
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm"
      onClick={() => setisopen(false)}
    >
    <form
    onSubmit={handleSubmit}
    onClick={(e) => e.stopPropagation()}
    className="w-full max-w-2xl rounded-xl bg-white shadow-2xl"
    >


  <div className="border-b px-6 py-4">
    <h2 className="text-xl font-semibold">
      Record Customer Interaction
    </h2>
    <p className="mt-1 text-sm text-gray-500">
      Save this interaction to the customer's timeline.
    </p>
  </div>


  <div className="space-y-5 p-6">

    <div>
      <label className="mb-2 block text-sm font-medium text-gray-700">
        Interaction Type
      </label>

      <select
        value={interaction.type}
        onChange={(e)=>
          setInteraction(prev=>({
            ...prev,
            type:e.target.value as InteractionType
          }))
        }
        className="w-full rounded-lg border border-gray-300 px-3 py-2 focus:border-blue-500 focus:outline-none"
      >
        <option value="PHONE_CALL">📞 Phone Call</option>
        <option value="EMAIL">✉️ Email</option>
        <option value="SMS">💬 SMS</option>
        <option value="MEETING">🤝 Meeting</option>
        <option value="INTERNAL_NOTE">📝 Internal Note</option>
      </select>
    </div>

    <div className="grid grid-cols-2 gap-4">

      <div>
        <label className="mb-2 block text-sm font-medium text-gray-700">
          Follow Up
        </label>

        <input
          type="date"
          value={interaction.followUpAt?.toISOString().split('T')[0]}
          onChange={(e)=>
            setInteraction(prev=>({
              ...prev,
              followUpAt:new Date(e.target.value)
            }))
          }
          className="w-full rounded-lg border border-gray-300 px-3 py-2"
        />
      </div>

      <div>
        <label className="mb-2 block text-sm font-medium text-gray-700">
          Subject
        </label>

        <input
          value={interaction.subject}
          onChange={(e)=>
            setInteraction(prev=>({
              ...prev,
              subject:e.target.value
            }))
          }
          placeholder="Vehicle enquiry"
          className="w-full rounded-lg border border-gray-300 px-3 py-2"
        />
      </div>

    </div>

    <div>
      <label className="mb-2 block text-sm font-medium text-gray-700">
        Notes
      </label>

      <textarea
        rows={6}
        value={interaction.notes}
        onChange={(e)=>
          setInteraction(prev=>({
            ...prev,
            notes:e.target.value
          }))
        }
        placeholder="Customer requested metallic blue paint, heated seats and will return on Friday after discussing finance with spouse..."
        className="w-full rounded-lg border border-gray-300 px-3 py-2 resize-none"
      />
    </div>

  </div>

  {/* Footer */}
  <div className="flex justify-end gap-3 border-t bg-gray-50 px-6 py-4">

    <button
      type="button"
      onClick={()=>setisopen(false)}
      className="rounded-lg border px-5 py-2 hover:bg-gray-100"
    >
      Cancel
    </button>

    <button
      type="submit"
      className="rounded-lg bg-blue-600 px-5 py-2 font-medium text-white hover:bg-blue-700"
      disabled={loading}
    >
    {loading ? 'Saving interaction...' : 'Save Interaction'}
    </button>

  </div>

</form>
    </div>}
    </div>
  )
}

export default TicketContactBtn