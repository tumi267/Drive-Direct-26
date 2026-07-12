import { SMTPProviders } from "./providers";
import { createTransporter } from "./transporter";

import type {
  EmailConnection,
  SendEmailOptions,
} from "./types";

export async function sendEmail(
  connection: EmailConnection,
  email: SendEmailOptions
) {
  const smtp = SMTPProviders[connection.provider];

  const transporter = createTransporter({
    host: smtp.host,
    port: smtp.port,
    secure: smtp.secure,
    username: connection.email,
    password: connection.password,
  });

  return transporter.sendMail({
    from: connection.email,

    to: email.to,

    subject: email.subject,

    text: email.message,

    html: email.message,

    cc: email.cc,

    bcc: email.bcc,
  });
}