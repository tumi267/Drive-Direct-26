// src/app/libs/crud/ticket/ticket.create.ts

import prisma from '@/app/libs/prisma'

interface CreateTicketProps {
  type: 'VEHICLE_ENQUIRY'
  vehicleId: string
  dealerId: string
  firstName: string
  lastName: string
  email: string
  phone?: string
  message: string
}

export async function createTicket(
  data: CreateTicketProps
) {
  return await prisma.ticket.create({
    data: {
      reference: crypto.randomUUID(),

      type: data.type,

      vehicleId: data.vehicleId,
      dealerId: data.dealerId,

      firstName: data.firstName,
      lastName: data.lastName,
      email: data.email,
      phone: data.phone,

      message: data.message,

      status: 'NEW_ENQUIRY',

      department: 'SALES',
    },
  })
}