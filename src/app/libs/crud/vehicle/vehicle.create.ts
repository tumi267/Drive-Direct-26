// src/app/libs/crud/vehicle/vehicle.create.ts

import prisma from '../../prisma'

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