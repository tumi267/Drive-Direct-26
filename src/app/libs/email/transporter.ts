import nodemailer from "nodemailer";
import type { TransportConfig } from "./types";

export function createTransporter(config: TransportConfig) {
  return nodemailer.createTransport({
    host: config.host,
    port: config.port,
    secure: config.secure,

    auth: {
      user: config.username,
      pass: config.password,
    },
  });
}