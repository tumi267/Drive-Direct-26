import { NextRequest, NextResponse } from "next/server";

import { createPriority } from "@/app/libs/crud/priority/priority.create";

export async function POST(req: NextRequest) {
  try {
    const form = await req.formData();

    const paymentStatus =form.get("payment_status")?.toString();

    if (paymentStatus !== "COMPLETE") {
      return new NextResponse("Ignored", {
        status: 200,
      });
    }

    const dealerId =form.get("custom_str1")?.toString() ?? "";

    const vehicleId =form.get("custom_str2")?.toString() ?? "";

    const paymentReference =form.get("m_payment_id")?.toString() ?? "";

    const days = Number(form.get("custom_int1"));

    await createPriority({dealerId,vehicleId,paymentReference,days,});

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