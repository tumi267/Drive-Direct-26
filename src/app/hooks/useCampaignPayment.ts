'use client'

import { useState } from 'react'
import { purchaseCampaign } from '../services/banner/banner.payment'

interface PriorityPurchaseProps {
  campaignid: string
  days: number
}

export default function useCampaignPayment() {
  const [loading, setLoading] = useState(false)

  async function startPriorityPurchase({campaignid,days,}: PriorityPurchaseProps) {
    try {
      setLoading(true)
      const payment = await purchaseCampaign({campaignid,days,})
      const form = document.createElement('form')
      form.method = 'POST'
      form.action = payment.url
      Object.entries(payment.form).forEach(([key, value]) => {
        const input = document.createElement('input')
        input.type = 'hidden'
        input.name = key
        input.value = String(value)
        form.appendChild(input)
      })
      document.body.appendChild(form)
      form.submit()
    } catch (error) {
      console.error(error)
      alert('Unable to start PayFast payment.')
    } finally {
      setLoading(false)
    }
  }

  return {
    loading,
    startPriorityPurchase,
  }
}