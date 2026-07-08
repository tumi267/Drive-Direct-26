import { create } from 'zustand'
import { DealerUser } from '../types/dealer'

interface DealerStore {
    dealer: DealerUser | null
  
    setDealer: (
      dealer: DealerUser
    ) => void
  
    clearDealer: () => void
  }

export const useDealerStore =
  create<DealerStore>((set) => ({
    dealer: null,

    setDealer: (dealer) =>
      set({ dealer }),

    clearDealer: () =>
      set({ dealer: null }),
  }))