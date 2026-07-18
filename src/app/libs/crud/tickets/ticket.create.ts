// src/app/libs/crud/ticket/ticket.create.ts

import prisma from '@/app/libs/prisma'
import { Department, InteractionOutcome, InteractionType, TicketStatus } from '@prisma/client'

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
  createdById:string;
}

const statusMap: Record<Department, TicketStatus> = {
  SALES: "ASSIGNED_TO_SALES",
  FINANCE: "FINANCE_REVIEW",
  MANAGEMENT: "AWAITING_MANAGEMENT_APPROVAL",
  OPERATIONS: "READY_FOR_DELIVERY",
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
        createdById:data.createdById
      },
    })
}

export async function transferTicket({
  ticketId,
  dealerUserId,
  department,
}: {
  ticketId: string
  dealerUserId: string
  department: Department
}) {
  const ticket = await prisma.ticket.findUnique({
    where: {
      id: ticketId,
    },
    include: {
      claimedBy: true,
    },
  })

  if (!ticket) {
    throw new Error("Ticket not found.")
  }

  const dealerUser = await prisma.dealerUser.findUnique({
    where: {
      id: dealerUserId,
    },
  })

  if (!dealerUser) {
    throw new Error("Dealer user not found.")
  }

  const isOwner = dealerUser.role === "OWNER"

  const ownsTicket = ticket.claimedById === dealerUser.id

  if (!isOwner && !ownsTicket) {
    throw new Error("You are not allowed to transfer this ticket.")
  }

  return prisma.ticket.update({
    where: {
      id: ticketId,
    },
    data: {
      department,
      status:statusMap[department]
    },
  })
}