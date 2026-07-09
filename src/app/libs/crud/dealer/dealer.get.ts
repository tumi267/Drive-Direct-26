import { Prisma } from '@prisma/client'
import prisma from '../../prisma'

interface GetDealersProps {
  page?: number
  limit?: number
  search?: string
}
interface GetDealerUserInfoProps{
  page?: number
  limit?: number
  dealerId:string
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

export async function getPaginatedDealersUser({page = 1,limit = 10,dealerId,}: GetDealerUserInfoProps) {
  const skip = (page - 1) * limit
  const where = {
    dealerId,
  }
  const [users, total] = await Promise.all([
    prisma.dealerUser.findMany({
      where,
      orderBy: {
        createdAt: 'desc',
      },
      skip,
      take: limit,
    }),

    prisma.dealerUser.count({
      where,
    }),
  ])

  return {
    users,
    currentPage: page,
    totalPages: Math.ceil(total / limit),
    total,
  }
}