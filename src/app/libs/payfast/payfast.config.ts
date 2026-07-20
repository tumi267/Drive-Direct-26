export const PAYFAST = {
    merchantId: process.env.PAYFAST_MERCHANT_ID!,
    merchantKey: process.env.PAYFAST_MERCHANT_KEY!,
    passphrase: process.env.PAYFAST_PASSPHRASE!,
  
    sandbox:process.env.PAYFAST_SANDBOX === "true",
  
    sandboxUrl:"https://sandbox.payfast.co.za/eng/process",
  
    productionUrl:"https://www.payfast.co.za/eng/process",
  }
  
  export function getPayfastUrl() {
    return PAYFAST.sandbox? PAYFAST.sandboxUrl: PAYFAST.productionUrl
  }