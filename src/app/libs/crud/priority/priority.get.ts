import prisma from "@/app/libs/prisma";


export async function getPriority() {
    const priority = await prisma.priority.findMany({
        where:{
            expiresAt:{
                gt:new Date()
            }
        },
        select:{
            vehicleId:true,
            expiresAt:true
        }
    })
    return priority
}