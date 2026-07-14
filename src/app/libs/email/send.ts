import { SMTPProviders } from "./providers";
import { createTransporter } from "./transporter";
import type { EmailConnection, SendEmailOptions, TransportConfig } from "./types";

export async function sendEmail(
  connection: EmailConnection,
  email: SendEmailOptions
) {
  const smtp = SMTPProviders[connection.provider];

  // 1. Conditionally build the auth block (same logic as testConnection)
  const authBlock = connection.oauthToken
    ? {
        type: "OAuth2" as const,
        user: connection.email,
        accessToken: connection.oauthToken,
      }
    : {
        user: connection.email,
        pass: connection.password,
      };

  // 2. Initialize your dynamic transporter instance
  const config: TransportConfig = {
    host: smtp.host,
    port: smtp.port,
    secure: smtp.secure,
    auth: authBlock,
  };

  const transporter = createTransporter(config);

  // 3. Dispatch the message and return Nodemailer's delivery receipt status
  return transporter.sendMail({
    from: connection.email,
    to: email.to,
    subject: email.subject,
    text: email.message,
    html: email.message, // You can also pass structured template markup strings here
    cc: email.cc,
    bcc: email.bcc,
  });
}
