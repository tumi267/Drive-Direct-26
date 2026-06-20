import { SignUpprop } from '@/app/libs/signup/types'
import { SignUp } from '@clerk/nextjs'
import React from 'react'

function SignUp_Dealer({setOpt}:SignUpprop) {
  return (
    <div>
    <button onClick={()=>{setOpt(null)}}>back</button>
    <SignUp
    fallbackRedirectUrl="/onboarding/dealer"
    />
    </div>
  )
}

export default SignUp_Dealer