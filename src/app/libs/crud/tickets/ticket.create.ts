// src/app/libs/crud/ticket/ticket.create.ts

import prisma from '@/app/libs/prisma'
import { InteractionOutcome, InteractionType } from '@prisma/client'

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

interface CreateTicketInteractionRequest {
  ticketId: string;
  type: InteractionType;
  notes: string;
  subject?: string;
  outcome?: InteractionOutcome;
  followUpAt?: Date;
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
export async function createTicketInteraction( data: CreateTicketInteractionRequest){
    return await prisma.ticketInteraction.create({
      data: {
        ticketId: data.ticketId,
        type: data.type,
        subject: data.subject,
        notes: data.notes,
        outcome: data.outcome,
        followUpAt: data.followUpAt,
      },
    })
}