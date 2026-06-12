'use client'
import React, { useState } from 'react'
import SignUpSelector from './SignUpSelector';
import SignUp_Dealer from './SignUp_Dealer';
import SignUp_User from './SignUp_User';
function SiginUpDash() {
    const [opt, setOpt] = useState<number | null>(null)

    const render = () => {
      switch (opt) {
        case 0:
          return <SignUp_User setOpt={setOpt} />
        case 1:
          return <SignUp_Dealer setOpt={setOpt} />
        default:
          return <SignUpSelector setOpt={setOpt} />
      }
    }
  
    return <div>{render()}</div>
}

export default SiginUpDash