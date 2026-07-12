import { SMTPProviders } from "./providers";
import { createTransporter } from "./transporter";
import type { EmailConnection } from "./types";

export async function testConnection(connection: EmailConnection) {
  const smtp = SMTPProviders[connection.provider];

  const transporter = createTransporter({
    host: smtp.host,
    port: smtp.port,
    secure: smtp.secure,
    username: connection.email,
    password: connection.password,
  });

  return transporter.verify();
}