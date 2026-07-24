import { NextRequest, NextResponse } from "next/server";
import { createCampaignPayment } from "@/app/libs/payfast/payfastCampain.form";

export async function POST(req: NextRequest) {
  try {

    const body = await req.json();
    const {campaignId,days,} = body;

    const paymentReference = crypto.randomUUID();
// set by from admin
    const PRICE_PER_DAY = 20;

    const amount = PRICE_PER_DAY * Number(days);

    const payment = createCampaignPayment({campaignId,days,amount, paymentReference,itemName: `Campaign Listing (${days} Days)`,
      returnUrl:`${process.env.NEXT_PUBLIC_APP_URL}/dealer/payment/success`,
      cancelUrl:`${process.env.NEXT_PUBLIC_APP_URL}/dealer/payment/cancel`,
      notifyUrl:`${process.env.NEXT_PUBLIC_APP_URL}/api/payfast/campaign/notify`,
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