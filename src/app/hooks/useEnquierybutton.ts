'use client'

import { useState } from 'react'
import { EnquiryForm } from '../libs/signup/types'
import { Vehicle } from '../types/vehicle'
import { createticket } from '../services/ticket/ticket.service'
import { CreateTicketRequest } from '../types/ticket'

function useEnquierybutton(){
    const [user,setUser]=useState<EnquiryForm>({firstName:'',lastName:'',email:'',phone:'',message:''})
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState<string | null>(null)
    const updateField = (
        field: keyof EnquiryForm,
        value: string
      ) => {
        setUser((prev) => ({
          ...prev,
          [field]: value,
        }))
      }
      const createEnquiryTicket = async (vehicle: Vehicle) => {
        try {
          setLoading(true)
          setError(null)
          const payload: CreateTicketRequest = {
            type: 'VEHICLE_ENQUIRY',
            vehicleId: vehicle.id,
            dealerId: vehicle.dealerId,
            customer: {
              firstName: user.firstName,
              lastName: user.lastName,
              email: user.email,
              phone: user.phone,
            },
            message: user.message,
          }
      
          await createticket(payload)
      
          alert(
            `Thank you ${user.firstName} ${user.lastName}. One of our sales team will get in touch with you as soon as possible.`
          )
      
          setUser({firstName: '',lastName: '',email: '',phone: '',message: '',})
        } catch (error) {
          console.error(error)
          setError(
            error instanceof Error
              ? error.message
              : 'Failed to submit enquiry.'
          )
        } finally {
          setLoading(false)
        }
      }
   
    return{user,setUser,updateField,createEnquiryTicket,loading,error}
}
export default useEnquierybutton