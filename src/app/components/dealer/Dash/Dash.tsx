'use client'
import React, { useState } from 'react'
import DashNav from './DasNav/DashNav'
import Tickets from './Tickets'
import Reports from './Reports'

function Dash() {
  const [renderer,setrender]=useState(0)
    return (
    <>
    <DashNav
    action={setrender}
    />
    {renderer==0&&<Tickets/>}
    {renderer==1&&<Reports/>}
    </>
  )
}

export default Dash