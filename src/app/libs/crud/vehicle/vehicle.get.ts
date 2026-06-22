import prisma from '../../prisma'

export async function getVehiclesByDealer(
    dealerId: string
  ) {
    return prisma.vehicle.findMany({
      where: {
        dealerId,
      },
      orderBy: {
        createdAt: 'desc',
      },
    })
  }