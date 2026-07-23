import { getPriority } from "@/app/libs/crud/priority/priority.get";
import { NextResponse } from "next/server";
export async function GET(){
    
    try {
        const ispriority=await getPriority()
        console.log(ispriority)
        return NextResponse.json({ispriority})
    } catch (error) {
        return NextResponse.json({msg:'failed to get listing'})
    }
}