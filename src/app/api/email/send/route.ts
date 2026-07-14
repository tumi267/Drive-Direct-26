import { NextRequest, NextResponse } from "next/server";
import { sendEmail } from "@/app/libs/email"; // Adjust this import to your actual file location
import { auth, clerkClient } from "@clerk/nextjs/server";

// Dynamic map to translate user-selected options into Clerk OAuth keys
const PROVIDER_MAP = {
  gmail: { provider: "oauth_google", name: "Gmail" },
  office365: { provider: "oauth_microsoft", name: "Microsoft 365" },
  outlook: { provider: "oauth_microsoft", name: "Outlook" },
  zoho: { provider: "oauth_zoho", name: "Zoho" },
} as const;

export async function POST(req: NextRequest) {
  try {
    // 1. Destructure provider and options matching your frontend service layout precisely
    const body = await req.json();
    const { provider, to, subject, message, cc, bcc } = body;

    // 2. Validate the active Clerk session context on the server side
    const { userId } = await auth();
    if (!userId) {
      return NextResponse.json({ success: false, message: "Unauthorized access." }, { status: 401 });
    }

    // 3. Initialize functional clerkClient structure to satisfy deprecation guidelines
    const client = await clerkClient();
    const user = await client.users.getUser(userId);

    const targetConfig = PROVIDER_MAP[provider as keyof typeof PROVIDER_MAP];
    
    let oauthToken: string | undefined = undefined;

    // 4. Fetch the secure background token if they chose an integrated provider
    if (targetConfig) {
      try {
        const oauthData = await client.users.getUserOauthAccessToken(
          userId,
          targetConfig.provider as any
        );
        oauthToken = oauthData.data?.[0]?.token;
      } catch (err) {
        console.error("Clerk token lookup crash:", err);
      }

      if (!oauthToken) {
        return NextResponse.json(
          { 
            success: false, 
            message: `Authentication missing. Please sign out and log back in using your ${targetConfig.name} account to clear security.` 
          }, 
          { status: 400 }
        );
      }
    }

    // 5. Safely grab the sender email address straight from their verified Clerk profile
    const senderEmail = user.emailAddresses.find(
      (e) => e.id === user.primaryEmailAddressId
    )?.emailAddress;

    if (!senderEmail) {
      return NextResponse.json({ success: false, message: "Primary sender email not found on profile." }, { status: 400 });
    }

    // 6. Execute your existing Nodemailer helper utility with the token properties
    const mailInfo = await sendEmail(
      {
        provider: provider,
        email: senderEmail, // Securely assigned using verified profile state
        oauthToken,
      },
      {
        to,
        subject,
        message,
        cc,
        bcc,
      }
    );

    return NextResponse.json({
      success: true,
      message: "Email successfully passed to SMTP server and dispatched!",
      messageId: mailInfo?.messageId,
    });

  } catch (error: any) {
    console.error("API Transmission Exception Encountered:", error);
    return NextResponse.json(
      { success: false, message: error.message || "Internal Mail Service failure." },
      { status: 500 }
    );
  }
}