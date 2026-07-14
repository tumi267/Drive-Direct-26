import { NextRequest, NextResponse } from "next/server";
import { testConnection } from "@/app/libs/email";
import type { EmailConnection } from "@/app/libs/email";
import { auth, clerkClient } from "@clerk/nextjs/server";

export async function POST(req: NextRequest) {
  try {
    const connection: EmailConnection = await req.json();
    const { userId } = await auth();
    
    if (!userId) {
      return NextResponse.json({ success: false, message: "Unauthorized" }, { status: 401 });
    }

    const client = await clerkClient();
    const user = await client.users.getUser(userId);

    let oauthToken: string | undefined = undefined;

    if (connection.provider === "gmail") {
      // 1. Check if the user actually logged in with Google (External Account)
      const hasGoogleAccount = user.externalAccounts.some(
        (account) => account.provider === "oauth_google"
      );

      if (hasGoogleAccount) {
        try {
          // User has Google linked! Securely grab their Clerk OAuth token
          const oauthData = await client.users.getUserOauthAccessToken(userId, "oauth_google");
          oauthToken = oauthData.data?.[0]?.token;
        } catch (error) {
          console.error("Clerk token fetch failed:", error);
        }
      }

      // 2. SAFE FALLBACK: If no OAuth token was found (Email/Password user)
      if (!oauthToken) {
        // If they provided a password in your form, treat it as a Google App Password
        if (connection.password) {
          console.log("No OAuth token found. Falling back to Google App Password.");
        } else {
          // If no password was provided in the form, tell them they must connect Google
          return NextResponse.json(
            { 
              success: false, 
              message: "Please log in with Google, or provide a Google App Password to use Gmail SMTP features." 
            }, 
            { status: 400 }
          );
        }
      }
    }

    // 3. Extract the primary email
    const email = user.emailAddresses.find((e) => e.id === user.primaryEmailAddressId)?.emailAddress;
    if (!email) {
      return NextResponse.json({ success: false, message: "Email not found" }, { status: 400 });
    }

    // 4. Run your tester utility
    await testConnection({
      ...connection,
      email: email,
      oauthToken, // Will be undefined for password users, triggering standard SMTP login
    });

    return NextResponse.json({
      success: true,
      message: `Successfully connected to your ${connection.provider} stream!`,
    });

  } catch (error: any) {
    console.error("Route Error:", error);
    return NextResponse.json({ success: false, message: error.message }, { status: 500 });
  }
}