import { Vehicle } from "../types/vehicle";

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