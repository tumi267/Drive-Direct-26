import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const form = await req.formData();

    const paymentStatus =form.get("payment_status")?.toString();
// remove campaign if no payment
    if (paymentStatus !== "COMPLETE") {
      return new NextResponse("Ignored", {
        status: 200,
      });
    }


//update campain
  

    return new NextResponse("OK", {
      status: 200,
    });

  } catch (err) {
    console.error(err);

    return new NextResponse("Error", {
      status: 500,
    });
  }
}