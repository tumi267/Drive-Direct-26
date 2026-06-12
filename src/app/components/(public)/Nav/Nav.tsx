import Link from 'next/link'
import React from 'react'

function Nav() {
    // replace with dynamic list
    const linklist=[{tag:'Home',add:'/'},{tag:'SignIn',add:'/signin'},{tag:'SignUp',add:'/signup'}]
  return (
    <div className='flex '>{linklist.map((e)=>{return <Link href={e.add}>{e.tag}</Link>})}</div>
  )
}

export default Nav