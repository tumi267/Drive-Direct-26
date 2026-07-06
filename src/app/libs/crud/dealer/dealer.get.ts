import { Prisma } from '@prisma/client'
import prisma from '../../prisma'

interface GetDealersProps {
  page?: number
  limit?: number
  search?: string
}

export async function getPaginatedDealers({
  page = 1,
  limit = 12,
  search,
}: GetDealersProps) {
  const skip = (page - 1) * limit

  const where: Prisma.DealerWhereInput = {}

  if (search) {
    where.OR = [
      {
        companyName: {
          contains: search,
          mode: 'insensitive',
        },
      },
      {
        tradingName: {
          contains: search,
          mode: 'insensitive',
        },
      },
    ]
  }

  const [dealers, total] = await Promise.all([
    prisma.dealer.findMany({
      where,
      include: {
        listings: {
          take: 1,
          include: {
            images: {
              take: 1,
            },
          },
          orderBy: {
            createdAt: 'desc',
          },
        },
        _count: {
          select: {
            listings: true,
          },
        },
      },
      orderBy: {
        companyName: 'asc',
      },
      skip,
      take: limit,
    }),

    prisma.dealer.count({
      where,
    }),
  ])

  return {
    dealers,
    currentPage: page,
    totalPages: Math.ceil(total / limit),
    total,
  }
}

export async function getDealerById(id: string) {
    return prisma.dealer.findUnique({
      where: {
        id,
      },
      include: {
        _count: {
          select: {
            listings: true,
          },
        },
      },
    })
  }