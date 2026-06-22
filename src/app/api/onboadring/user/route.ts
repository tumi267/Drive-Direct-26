import { checkifuser, createUser } from '@/app/libs/crud/user/user.create'
import { NextResponse } from 'next/server'

export async function POST(req: Request) {
  try {
    const body = await req.json()
    const { firstName, lastName, clerkid } = body 

    // 1. Validation check
    if (!clerkid || !firstName || !lastName) {
      return NextResponse.json(
        { message: 'Missing required fields' },
        { status: 400 }
      )
    }
    // 2. Check if the user already exists in the database
    const userExists = await checkifuser(clerkid)
    if (userExists) {
      return NextResponse.json(
        { message: 'User already exists' },
        { status: 400 }
      )
    }
    // 3. Create the new user record
    const user = await createUser({ firstName, lastName, clerkid })
    // 4. Return the successful response
    return NextResponse.json({
      success: true,
      user,
    })
  } catch (error) {
    console.error('CREATE_USER_ERROR', error)
    return new Response('Internal Server Error', {
      status: 500,
    })
  }
}