import { DealerRole } from '@prisma/client'
import prisma from '../../prisma'

interface CreateDealerUserProps {
  clerkId: string
  dealerId: string
  firstName: string
  lastName: string
  role: DealerRole
}

export async function createDealerUser({clerkId,dealerId,firstName,lastName,role,}: CreateDealerUserProps) {
  return prisma.dealerUser.create({
    data: {clerkId,dealerId,firstName,lastName,role,status: 'ACTIVE',
    },
    include: {
      dealer: true,
    },
  })
}