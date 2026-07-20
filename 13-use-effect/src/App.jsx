import React, { useEffect, useState } from 'react'

export default function App() {
  const[num,setnum]=useState(0)
  const[num2,setnum2]=useState(30)

  useEffect(function(){
    console.log('effect is running .........')
  },[num,num2])
  return (
 
    <div>
      <h1>{num}</h1>
      <h1>{num2}</h1>
        <button onMouseEnter={()=>{
          setnum(num+1)
        }} 
        onMouseLeave={()=>{
          setnum2(num2+30)
        }}>click me</button>  
    </div>
  )
}
