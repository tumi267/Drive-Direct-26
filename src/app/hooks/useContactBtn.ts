'use client'

import { useState } from 'react'
import { TicketNotes } from '../types/ticket'

export default function useContact() {
    const[isopen,setisopen]=useState(false)
    const [loading,SetLoading]=useState(false)
    const [interaction, setInteraction] = useState<TicketNotes>({
        ticketId: "",
        createdById: "",
        type: "PHONE_CALL",
        subject: "",
        notes: "",
        followUpAt: null,
      })
    return{isopen,setisopen,interaction, setInteraction,loading,SetLoading}
}