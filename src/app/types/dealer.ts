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