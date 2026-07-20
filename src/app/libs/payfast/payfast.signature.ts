import crypto from "crypto";

function payfastEncode(value: string) {
  return encodeURIComponent(value.trim())
    .replace(/%20/g, "+")
    .replace(/[!'()*]/g, (c) =>
      "%" + c.charCodeAt(0).toString(16).toUpperCase()
    );
}

export function generatePayfastSignature(
  data: Record<string, string>,
  passphrase?: string
) {
  let pfOutput = "";

  for (const [key, value] of Object.entries(data)) {
    if ( value !== undefined &&value !== null &&value !== ""
    ) {
      pfOutput += `${key}=${payfastEncode(value)}&`;
    }
  }

  pfOutput = pfOutput.slice(0, -1);

  if (passphrase) {
    pfOutput += `&passphrase=${payfastEncode(passphrase)}`;
  }

  const md5 = crypto
    .createHash("md5")
    .update(pfOutput)
    .digest("hex");

  return md5;
}