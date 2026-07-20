import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function Navbar2() {
        const nav = useNavigate()

  return (
    <div>
      <button onClick={()=>{nav('/')}} className='bg-red-900 px-5 py-3 rounded active:scale-95 m-5 gap-5'>Back to Home</button>
      <button onClick={()=>{nav(-1)}} className='bg-red-900 px-5 py-3 rounded active:scale-95 m-5 gap-5'>Back </button>
      <button onClick={()=>{nav(+1)}} className='bg-red-900 px-5 py-3 rounded active:scale-95 m-5 g ap-5'>Nexst </button>
    </div>
  )
}
