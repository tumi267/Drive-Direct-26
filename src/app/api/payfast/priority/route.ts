import { NextRequest, NextResponse } from "next/server";
import { auth } from "@clerk/nextjs/server";

import { createPriorityPayment } from "@/app/libs/payfast/payfast.form";
import prisma from "@/app/libs/prisma";

export async function POST(req: NextRequest) {
  try {
    const { userId } = await auth();

    if (!userId) {
      return NextResponse.json(
        { message: "Unauthorized" },
        { status: 401 }
      );
    }
    const body = await req.json();
    const {dealerId,vehicleId,days,} = body;
    const vehicle = await prisma.vehicle.findUnique({
      where: {
        id: vehicleId,
      },
      include: {
        dealer: true,
      },
    });

    if (!vehicle) {
      return NextResponse.json(
        { message: "Vehicle not found." },
        { status: 404 }
      );
    }

    if (vehicle.dealerId !== dealerId) {
      return NextResponse.json(
        { message: "Vehicle does not belong to dealer." },
        { status: 400 }
      );
    }

    const paymentReference = crypto.randomUUID();

    const PRICE_PER_DAY = 20;

    const amount = PRICE_PER_DAY * Number(days);

    const payment = createPriorityPayment({dealerId,vehicleId,days,amount, paymentReference,buyerEmail: vehicle.dealer.email ?? "",itemName: `Priority Listing (${days} Days)`,
      returnUrl:`${process.env.NEXT_PUBLIC_APP_URL}/dealer/payment/success`,
      cancelUrl:`${process.env.NEXT_PUBLIC_APP_URL}/dealer/payment/cancel`,
      notifyUrl:`${process.env.NEXT_PUBLIC_APP_URL}/api/payfast/notify`,
    });

    return NextResponse.json(payment);

  } catch (err) {
    console.error(err);

    return NextResponse.json(
      {
        message: "Failed to create payment.",
      },
      {
        status: 500,
      }
    );
  }
}