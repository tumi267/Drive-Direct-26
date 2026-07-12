import { SendEmailOptions } from "../libs/email/types";


export async function testEmailConnection(
  provider: string,
  email: string,
  password: string
) {
  const response = await fetch("/api/email/test", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      provider,
      email,
      password,
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
  email: string,
  password: string,
  options: SendEmailOptions
) {
  const response = await fetch("/api/email/send", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      provider,
      email,
      password,
      ...options,
    }),
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message ?? "Failed to send email.");
  }

  return data;
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