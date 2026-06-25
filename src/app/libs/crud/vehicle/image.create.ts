import prisma from "../../prisma";

export interface CreateVehicleImage {
    vehicleId: string
    url: string
    publicId: string
    position: number
  }
  
  export async function createVehicleImages(
    images: CreateVehicleImage[]
  ) {
    return prisma.vehicleImage.createMany({
      data: images,
    })
  }
  export async function getVehicleImages(
    vehicleId: string
  ) {
    return prisma.vehicleImage.findMany({
      where: {
        vehicleId,
      },
      orderBy: {
        position: 'asc',
      },
    })
  }