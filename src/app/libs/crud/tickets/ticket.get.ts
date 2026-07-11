import prisma from '@/app/libs/prisma'

interface GetTicketPaginatedProps {
  page?: number
  limit?: number
  dealerId: string
}

export async function getTicketPaginated({
  page = 1,
  limit = 10,
  dealerId,
}: GetTicketPaginatedProps) {
  const skip = (page - 1) * limit

  const [tickets, total] = await Promise.all([
    prisma.ticket.findMany({
      where: {
        dealerId,
      },
      include: {
        vehicle: true,
        claimedBy: true,
      },
      orderBy: {
        createdAt: 'desc',
      },
      skip,
      take: limit,
    }),

    prisma.ticket.count({
      where: {
        dealerId,
      },
    }),
  ])

  return {
    tickets,
    pagination: {
      page,
      limit,
      total,
      pages: Math.ceil(total / limit),
    },
  }
}