import prisma from "../../prisma";

interface CreateDealerProps {
  clerkid: string
  companyName: string
  tradingName?: string
  email?: string
  phone?: string
  firstName: string
  lastName: string
}
  
  export async function checkifDealerUser(
  clerkid: string
  ) {
    return await prisma.dealerUser.findUnique({
      where: {
      clerkId:clerkid,
      },
      include: {
      dealer: true,
    },
  })
  }
  
  
  export async function createDealer(
    data: CreateDealerProps
  ) {
    return await prisma.dealer.create({
      data: {
        companyName: data.companyName,
        tradingName: data.tradingName,
        email: data.email,
        phone: data.phone,
  
        users: {
          create: {
            clerkId: data.clerkid,
            firstName: data.firstName,
            lastName: data.lastName,
  
            role: 'OWNER',
          },
        },
      },
  
      include: {
        users: true,
      },
    })
  }

  export async function getDealerUserByClerkId(
    clerkId: string
  ) {
    return await prisma.dealerUser.findUnique({
      where: {
        clerkId,
      },
      include: {
        dealer: true,
      },
    })
  }