'use client'

import { SignUpprop } from '@/app/libs/signup/types'
import React from 'react'

function SignUpSelector({setOpt}:SignUpprop) {
  return (
    <div><button onClick={()=>{setOpt(0)}}>User</button>
    <button onClick={()=>{setOpt(1)}}>Dealer</button></div>
  )
}

export default SignUpSelector