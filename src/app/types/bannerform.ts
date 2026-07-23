import { BannerLinkType } from "@prisma/client"

export interface CampaignFormData {
    title:string,
    discription:string,
    imageurl:string,
    startDate:string|null,
    endDate:string|null,
    placement: string,
    linkType: BannerLinkType
    image: File | null
  }