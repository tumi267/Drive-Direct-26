'use client'
import React from 'react'
import UserOnboardingForm from './UserForm'
function OnBoardUser() {
   
  return (
    <div>
        <p> {<UserOnboardingForm
       
        /> || 'Loading...'}</p>
        </div>
  )
}

export default OnBoardUser