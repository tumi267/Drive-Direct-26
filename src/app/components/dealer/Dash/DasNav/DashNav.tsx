'use client'
import React from 'react'
interface Props{
  action:React.Dispatch<React.SetStateAction<number>>
}
function DashNav({action}:Props) {
    const list=[{tag:0,title:'Tickets'},{tag:1,title:'Reports'}]
  return (
    <div>{list.map((e,i)=>{return<button key={i} onClick={()=>{action(e.tag)}}>
        {e.title}
        </button>})}
        </div>
  )
}

export default DashNav