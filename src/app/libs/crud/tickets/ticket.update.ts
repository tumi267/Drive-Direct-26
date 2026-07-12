// src/app/libs/crud/tickets/ticket.update.ts

import prisma from '@/app/libs/prisma'

export async function claimTicket(
  ticketId: string,
  dealerUserId: string
) {
  const ticket = await prisma.ticket.findUnique({
    where: {
      id: ticketId,
    },
  })

  if (!ticket) {
    throw new Error('Ticket not found.')
  }

  if (ticket.claimedById) {
    throw new Error('Ticket has already been claimed.')
  }

  return await prisma.ticket.update({
    where: {
      id: ticketId,
    },
    data: {
      claimedById: dealerUserId,
      status: 'ASSIGNED_TO_SALES',
    },
  })
}