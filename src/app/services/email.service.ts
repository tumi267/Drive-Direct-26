import { SendEmailOptions } from "../libs/email/types";


export async function testEmailConnection(
  provider: string,

) {
  const response = await fetch("/api/email/test", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      provider,
 
    }),
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message ?? "Failed to connect to email server.");
  }

  return data;
}

export async function sendEmail(
  provider: string,
  options: SendEmailOptions
) {
  const response = await fetch("/api/email/send", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      provider,
      ...options,
    }),
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message ?? "Failed to send email.");
  }

  return ;
}

export async function disconnectEmail() {
  const response = await fetch("/api/email/disconnect", {
    method: "POST",
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message ?? "Failed to disconnect email.");
  }

  return data;
}