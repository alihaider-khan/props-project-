import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <div >
    
        <div className=' h-15 w-full bg-amber-200 flex justify-between items-center'>
            <h1 className='p-5 m-5'>navbar</h1>
         <div className='p-5 m-5 ' >
            <Link className='gap-5 p-5'to="/">Home</Link>
            <Link className='p-5 ' to="/About">About</Link>
            <Link className='p-5' to="/Contact">Contact</Link>
            <Link className='p-5' to="/Courses">Courses</Link>
            <Link className='p-5' to="/Product">Product</Link>

        </div>  
        </div>  
        
    </div>
  )
}
