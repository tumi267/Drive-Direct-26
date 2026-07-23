import prisma from "../../prisma";

export async function createBannerService(data:any){

    return prisma.bannerCampaign.create({
        data
    });

}