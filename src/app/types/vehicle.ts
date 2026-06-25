

export interface CreateVehicleFormData {
    make: string
    model: string
    variant: string
  
    year: number
    mileage: number
    price: number
  
    fuelType: FuelType
    transmission: Transmission
    bodyType: BodyType
  
    colour: string
    description: string
  }

  export type FuelType =
  | 'PETROL'
  | 'DIESEL'
  | 'HYBRID'
  | 'ELECTRIC'

export type Transmission =
  | 'MANUAL'
  | 'AUTOMATIC'

export type BodyType =
  | 'SEDAN'
  | 'HATCHBACK'
  | 'SUV'
  | 'COUPE'
  | 'CONVERTIBLE'
  | 'BAKKIE'
  | 'VAN'
  export interface VehicleImage {
    id: string
    vehicleId: string
    url: string
    publicId: string
    position: number
    createdAt: string
  }
  
  export interface Vehicle {
    id: string
    dealerId: string
    make: string
    model: string
    variant?: string | null
    year: number
    mileage: number
    price: number
    fuelType: FuelType
    transmission: Transmission
    bodyType: BodyType
    colour?: string | null
    description?: string | null
    images?: VehicleImage[]
    createdAt: string
    updatedAt: string
  }