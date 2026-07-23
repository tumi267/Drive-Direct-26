import {
    PAYFAST,
    getPayfastUrl,
  } from "./payfast.config"
  
  import { generatePayfastSignature } from "./payfast.signature"
  
  interface PriorityPayment {
    dealerId: string
    vehicleId: string
    amount: number
    days: number
    paymentReference: string
    itemName: string
    buyerEmail: string
    returnUrl: string
    cancelUrl: string
    notifyUrl: string
  }
  
  export function createPriorityPayment(
    payment: PriorityPayment
  ) {
    const data: Record<string, string> = {
      merchant_id: PAYFAST.merchantId,
      merchant_key: PAYFAST.merchantKey,
      return_url: payment.returnUrl,
      cancel_url: payment.cancelUrl,
      notify_url: payment.notifyUrl,
      name_first: "Dealer",
      email_address: payment.buyerEmail,
      m_payment_id: payment.paymentReference,
      amount: payment.amount.toFixed(2),
      item_name: payment.itemName,
      custom_int1: payment.days.toString(),
      custom_str1: payment.dealerId,
      custom_str2: payment.vehicleId,
    }
  
    const signature = generatePayfastSignature(data,PAYFAST.passphrase)

    return {
      url: getPayfastUrl(),
      form: {
        ...data,
        signature,
      },
    }
  }