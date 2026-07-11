'use client'
import useEnquierybutton from '@/app/hooks/useEnquierybutton'
import { Vehicle } from '@/app/types/vehicle'
import React from 'react'

interface Props{
vehcile:Vehicle
}
function Enquire({vehcile}:Props) {
    const {user,updateField,createEnquiryTicket,loading}=useEnquierybutton()
  return (
    <div>
    <input
        type="text"
        placeholder="First Name"
        value={user.firstName}
        onChange={(e) =>
          updateField('firstName', e.target.value)
        }
        className="border p-2 rounded w-[100%]"
      />
      <br/>
      <input
        type="text"
        placeholder="Last Name"
        value={user.lastName}
        onChange={(e) =>
          updateField('lastName', e.target.value)
        }
        className="border p-2 rounded w-[100%]"
      />
      <br/>
      <input
        type="email"
        placeholder="email"
        value={user.email}
        onChange={(e) =>
          updateField('email', e.target.value)
        }
        className="border p-2 rounded w-[100%]"
      />
      <br/>
      <input
        type="phone"
        placeholder="phone"
        value={user.phone}
        onChange={(e) =>
          updateField('phone', e.target.value)
        }
        className="border p-2 rounded w-[100%]"
      />
      <br/>
      <textarea
        placeholder="message"
        value={user.message}
        onChange={(e) =>
          updateField('message', e.target.value)
        }
        className="border p-2 rounded w-[100%]"
      />

    <button onClick={()=>{createEnquiryTicket(vehcile)}} className="w-full bg-blue-600 text-white py-3 rounded-lg">
    {loading?'Submitting Request...':'Enquire'}</button>
    </div>
  )
}

export default Enquire