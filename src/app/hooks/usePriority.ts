'use client'
import { useEffect, useState } from 'react'
import { getPriority } from '../services/priority/priority.get'

function usePriority() {
    const [loading,setloading]=useState(true)
    const[list,setList]=useState()
    useEffect(()=>{
   
            const getIsPriority=async ()=>{
                try{
                   const data=await getPriority()
                   setList(data)
                }catch(error){
                    console.log(error)
                }
            }
            getIsPriority()
        
        
    },[])
  return {list}
}

export default usePriority