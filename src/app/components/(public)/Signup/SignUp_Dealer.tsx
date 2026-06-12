import { SignUpprop } from '@/app/libs/signup/types'
import React from 'react'

function SignUp_Dealer({setOpt}:SignUpprop) {
  return (
    <div>
    <button onClick={()=>{setOpt(null)}}>back</button>
        SignUp_Dealer
    </div>
  )
}

export default SignUp_Dealer