import { NextRequest, NextResponse } from "next/server";

import { testConnection } from "@/app/libs/email";

import type { EmailConnection } from "@/app/libs/email";

export async function POST(req: NextRequest) {
  try {
    const connection: EmailConnection = await req.json();

    await testConnection(connection);

    return NextResponse.json({
      success: true,
    });
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      {
        success: false,
        message: "Unable to connect.",
      },
      {
        status: 500,
      }
    );
  }
}