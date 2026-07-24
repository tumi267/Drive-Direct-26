import { createBannerService } from "@/app/libs/crud/banner/banner.create";
import { purchaseCampaign } from "@/app/services/banner/banner.payment";
import { NextResponse } from "next/server";

export async function POST(req:Request){
    const body=await req.json()
    try {
   
        const payload = {
            title: body.title,
            description: body.discription,
            imageUrl: body.imageUrl,
            placement: body.placement,
            linkType: body.linkType,
            startsAt: new Date(body.startDate),
            endsAt: new Date(body.endDate),
          };
       const res=await createBannerService(payload)
       
    //    purchaseCampaign({campaignid:res.id,days:7})
        return NextResponse.json(res)

    } catch (error) {
        console.log(error)
        return NextResponse.json(error)
    }
}