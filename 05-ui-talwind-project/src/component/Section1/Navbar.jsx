import React from 'react'

export default function Navbar() {
  return (
    <div className='flex items-center justify-between px-18 py-6'>
      <h1 className='bg-black text-white rounded-full px-5 py-2 uppercase text-xs tracking-widest'>Targeted Button</h1>
      <button className='bg-gray-300 rounded-full px-5 py-2  uppercase text-xs tracking-widest'>Digital Banking Button</button>
    </div>
  )
}
