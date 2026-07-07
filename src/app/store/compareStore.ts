import { create } from 'zustand'
import { Vehicle } from '../types/vehicle'

interface CompareStore {
  vehicles: Vehicle[]

  addVehicle: (
    vehicle: Vehicle
  ) => void

  removeVehicle: (
    id: string
  ) => void

  clear: () => void
}

export const useCompareStore =
  create<CompareStore>((set) => ({
    vehicles: [],

    addVehicle: (vehicle) =>
      set((state) => {
        // Prevent duplicates
        console.log(vehicle)
        if (
          state.vehicles.some(
            (v) => v.id === vehicle.id
          )
        ) {
          return state
        }

        // Max 5 vehicles
        if (state.vehicles.length >= 5) {
          return state
        }

        return {
          vehicles: [
            ...state.vehicles,
            vehicle,
          ],
        }
      }),

    removeVehicle: (id) =>
      set((state) => ({
        vehicles: state.vehicles.filter(
          (v) => v.id !== id
        ),
      })),

    clear: () =>
      set({
        vehicles: [],
      }),
  }))