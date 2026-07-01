// src/app/libs/crud/vehicle/vehicle.create.ts

import { Vehicle } from '@prisma/client'
import prisma from '../../prisma'
import { mapVehicle } from '../../maps'

interface CreateVehicleProps {
  dealerId: string
  make: string
  model: string
  variant?: string
  year: number
  mileage: number
  price: number
  fuelType: string
  transmission: string
  bodyType: string
  colour?: string
  description?: string

}

export async function createVehicle(
  data: CreateVehicleProps
) {
  return await prisma.vehicle.create({
    data: {
      dealerId: data.dealerId,
      make: data.make,
      model: data.model,
      variant: data.variant,
      year: data.year,
      mileage: data.mileage,
      price: data.price,
      fuelType: data.fuelType as any,
      transmission: data.transmission as any,
      bodyType: data.bodyType as any,
      colour: data.colour,
      description: data.description,
    },
  })
}

export async function getVehicleById(id:string) {
  return await prisma.vehicle.findUnique({where:{id:id}})
}
export async function getVehicleByIdwithimages(id:string) {
  const vehicle= await prisma.vehicle.findUnique({where:{id:id},
    include: {
      images: {
        orderBy: {
          position: 'asc',
        },
      },
      dealer: true,
    }
  })

  return mapVehicle(vehicle)
}
export async function updateVehicle(
  data: Vehicle
) {
  return await prisma.vehicle.update({
    where: {
      id: data.id,
    },
    data: {
      make: data.make,
      model: data.model,
      variant: data.variant,
      year: data.year,
      mileage: data.mileage,
      price: data.price,
      fuelType: data.fuelType as any,
      transmission: data.transmission as any,
      bodyType: data.bodyType as any,
      colour: data.colour,
      description: data.description,
    },
  })
}