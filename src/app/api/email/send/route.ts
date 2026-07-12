import { NextRequest, NextResponse } from "next/server";

import { sendEmail } from "@/app/libs/email";

import type {
  EmailConnection,
  SendEmailOptions,
} from "@/app/libs/email";

interface RequestBody {
  provider: EmailConnection["provider"];
  email: string;
  password: string;

  to: string;
  subject: string;
  message: string;

  cc?: string;
  bcc?: string;
}

export async function POST(req: NextRequest) {
  try {
    const body: RequestBody = await req.json();

    const connection: EmailConnection = {
      provider: body.provider,
      email: body.email,
      password: body.password,
    };

    const email: SendEmailOptions = {
      to: body.to,
      subject: body.subject,
      message: body.message,
      cc: body.cc,
      bcc: body.bcc,
    };

    await sendEmail(connection, email);

    return NextResponse.json({
      success: true,
    });
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      {
        success: false,
        message: "Failed to send email.",
      },
      {
        status: 500,
      }
    );
  }
}