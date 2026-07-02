import { Vehicle, VehicleSort } from '@/app/types/vehicle'
import prisma from '../../prisma'
import { mapVehicle } from '../../maps'
import { Prisma } from '@prisma/client'


interface GetVehiclesProps {
  page?: number
  limit?: number
  dealerId?: string
  // status?: VehicleStatus
  make?: string
  bodyType?: string
  fuelType?: string
  transmission?: string
  minPrice?: number
  maxPrice?: number
  sort?: VehicleSort 
  search?: string
}
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

  export async function getPaginatedVehicles({
    page = 1,
    limit = 1,
    dealerId,
    // status,
    make,
    bodyType,
    fuelType,
    transmission,
    minPrice,
    maxPrice,
    sort,
    search,
  }: GetVehiclesProps) {
    
    const skip = (page - 1) * limit
    const where: Prisma.VehicleWhereInput = {}
    if (dealerId) {
      where.dealerId = dealerId
    }
    // if (status) {
    //   where.status = status
    // }
    if (make) {
      where.make = {
        contains: make,
        mode: 'insensitive',
      }
    }
  
    if (bodyType) {
      where.bodyType = bodyType as any
    }
  
    if (fuelType) {
      where.fuelType = fuelType as any
    }
  
    if (transmission) {
      where.transmission = transmission as any
    }
    if (minPrice || maxPrice) {
      where.price = {}
      if (minPrice !== undefined) {
        where.price.gte = minPrice
      }
      if (maxPrice !== undefined) {
        where.price.lte = maxPrice
      }
    }
    let orderBy: Prisma.VehicleOrderByWithRelationInput = {
      createdAt: 'desc',
    }
  
    switch (sort) {
      case 'oldest':orderBy = {
          createdAt: 'asc',
        }
        break
      case 'priceAsc':orderBy = {
          price: 'asc',
        }
        break
      case 'priceDesc':orderBy = {
          price: 'desc',
        }
        break
      case 'year':orderBy = {
          year: 'desc',
        }
        break
      case 'mileage':orderBy = {
          mileage: 'asc',
        }
        break
      default:
        orderBy = {
          createdAt: 'desc',
        }
      }
      if (search) {
        const value = search.trim()
      
        const number = Number(value)
      
        where.OR = [
          {
            make: {
              contains: value,
              mode: 'insensitive',
            },
          },
          {
            model: {
              contains: value,
              mode: 'insensitive',
            },
          },
          {
            variant: {
              contains: value,
              mode: 'insensitive',
            },
          },
          {
            colour: {
              contains: value,
              mode: 'insensitive',
            },
          },
        ]
      
        if (!Number.isNaN(number)) {
          where.OR.push(
            { year: number },
            { mileage: number }
          )
        }
      }
    const [vehicles, total] = await Promise.all([
      prisma.vehicle.findMany({
        where,
        include: {
          images: {
            orderBy: {
              position: 'asc',
            },
          },
        },
        orderBy,
        skip,
        take: limit,
      }),
      prisma.vehicle.count({
        where,
      }),
    ])
    
    return {
      vehicles: vehicles.map(mapVehicle),
      currentPage: page,
      totalPages: Math.ceil(total / limit),
      total,
    }
  }