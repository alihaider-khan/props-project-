import React from 'react'
import Nav2 from './Nav2'
import Bbutton from './Bbutton'

export default function Navbar() {
    
    return (
        <>
    <div className=' bg-amber-200 flex justify-between items-center'>
     <h1 className='m-8 font-bold text-xl'>Navbar</h1>
     
      <Nav2 />
      
    </div>
    <Bbutton/>
    </>
  )
}
