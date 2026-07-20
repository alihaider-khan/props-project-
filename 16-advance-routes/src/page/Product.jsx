import React from 'react'
import { Link, Outlet } from 'react-router-dom'

export default function Product() {
  return (
    <div>
        <div className=' gap-20 flex items-center justify-center'>
            <Link to="/Product/Men">Men</Link>
            <Link to="/Product/Women">Women</Link>
        </div>
        <Outlet/>
      {/* <h1 className='absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2'>Product</h1> */}
    </div>
  )
}
