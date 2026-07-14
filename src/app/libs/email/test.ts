import { SMTPProviders } from "./providers";
import { createTransporter } from "./transporter";
import type { EmailConnection, TransportConfig } from "./types";

export async function testConnection(connection: EmailConnection) {
  const smtp = SMTPProviders[connection.provider];

  // 1. Conditionally build the auth block based on the login type
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

  // 2. Format the configuration object exactly how createTransporter expects it
  const config: TransportConfig = {
    host: smtp.host,
    port: smtp.port,
    secure: smtp.secure,
    auth: authBlock,
  };

  const transporter = createTransporter(config);

  return transporter.verify();
}
