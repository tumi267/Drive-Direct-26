import { create } from 'zustand'
import { DealerUserWithDealer } from '../types/dealer'

interface DealerStore {
    dealer: DealerUserWithDealer | null
  
    setDealer: (
      dealer: DealerUserWithDealer
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