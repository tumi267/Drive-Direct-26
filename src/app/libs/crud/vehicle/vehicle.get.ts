import { Vehicle } from '@/app/types/vehicle'
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
  export function mapVehicle(vehicle: any): Vehicle {
    return {
      ...vehicle,
      price: Number(vehicle.price),
      createdAt: vehicle.createdAt.toISOString(),
      updatedAt: vehicle.updatedAt.toISOString(),
      images: vehicle.images?.map((image: any) => ({
        ...image,
        createdAt: image.createdAt.toISOString(),
      })),
    }
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