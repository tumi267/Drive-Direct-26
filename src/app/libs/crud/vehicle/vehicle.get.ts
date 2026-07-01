import { Vehicle } from '@/app/types/vehicle'
import prisma from '../../prisma'
import { mapVehicle } from '../../maps'

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

  export async function getAllVehicles() {
    const vehicles = await prisma.vehicle.findMany({
      // where: {
      //   status: 'PUBLISHED',
      // },
      orderBy: {
        createdAt: 'desc',
      },
      include: {
        images: {
          orderBy: {
            position: 'asc',
          },
          take: 1,
        },
      },
    })
  
    return vehicles.map(mapVehicle)
  }