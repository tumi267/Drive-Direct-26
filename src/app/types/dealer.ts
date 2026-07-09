import { DealerRole } from "@prisma/client"

export interface DealerListingImage {
    id: string
    url: string
  }
  
  export interface DealerListing {
    id: string
    images: DealerListingImage[]
  }
  
  export interface Dealer {
    id: string
    verificationStatus:string
    companyName: string
    tradingName: string | null
    listings: DealerListing[]
    _count: {
      listings: number
    }
  }
  export interface DealerUser {
    id: string
    clerkId: string
    firstName: string
    lastName: string
    role: DealerRole
    status: string
    dealerId: string
    createdAt: Date
    updatedAt: Date
  }
  
  export interface DealerUserWithDealer
    extends DealerUser {
    dealer: Dealer
  }