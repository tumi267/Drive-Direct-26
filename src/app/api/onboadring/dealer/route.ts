
import { checkifDealerUser, createDealer } from '@/app/libs/crud/dealer/dealer.create'
import { NextResponse } from 'next/server'
  
  export async function POST(req: Request) {
    try {
      const body = await req.json()
      const {companyName,tradingName,email,phone,firstName,lastName,clerkid,} = body
      if (!clerkid || !companyName) {
        return NextResponse.json(
          {
            message: 'Missing required fields',
          },
          {
            status: 400,
          }
        )
      }
  
      const dealerExists =await checkifDealerUser(clerkid)
      if (dealerExists) {
        return NextResponse.json(
          {
            message: 'Dealer already exists',
          },
          {
            status: 400,
          }
        )
      }
  
      const dealer = await createDealer({clerkid,companyName,tradingName,email,phone,firstName,lastName})
  
      return NextResponse.json({
        success: true,
        dealer,
      })
    } catch (error) {
      console.error('CREATE_DEALER_ERROR', error)
  
      return NextResponse.json(
        {
          message: 'Internal Server Error',
        },
        {
          status: 500,
        }
      )
    }
  }