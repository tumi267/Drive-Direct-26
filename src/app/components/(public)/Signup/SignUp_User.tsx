import { SignUpprop } from '@/app/libs/signup/types'
import { SignUp } from '@clerk/nextjs'
import React from 'react'

function SignUp_User({setOpt}:SignUpprop) {
  return (
    <div>
     <button onClick={()=>{setOpt(null)}}>back</button>
      <SignUp/>
    </div>
  )
}

export default SignUp_User