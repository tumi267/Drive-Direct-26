import type { EmailProvider } from "./providers";

export interface EmailConnection {
  provider: EmailProvider;
  email: string;
  password: string;
}

export interface TransportConfig {
  host: string;
  port: number;
  secure: boolean;
  username: string;
  password: string;
}

export interface SendEmailOptions {
  to: string;
  subject: string;
  message: string;
  cc?: string;
  bcc?: string;
}