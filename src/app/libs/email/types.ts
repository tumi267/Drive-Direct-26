import type { EmailProvider } from "./providers";

export interface EmailConnection {
  provider: EmailProvider;
  email: string;
  password?: string;    // Made optional because Gmail users use the OAuth token instead
  oauthToken?: string;  // Added to store Clerk's Google Access Token
}

export interface TransportConfig {
  host: string;
  port: number;
  secure: boolean;
  // Dynamic auth object that supports both traditional user/pass and OAuth2
  auth: {
    user: string;
    pass?: string;
    type?: "OAuth2";
    accessToken?: string;
  };
}

export interface SendEmailOptions {
  to: string;
  subject: string;
  message: string;
  cc?: string;
  bcc?: string;
}
