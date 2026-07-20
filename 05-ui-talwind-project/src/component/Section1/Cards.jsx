import React from 'react'
import 'remixicon/fonts/remixicon.css'

export default function cards(props) {
  return (
    <div className='h-full w-[18vw] shrink-0  relative overflow-hidden rounded-4xl  '>
     <img className='object-cover h-full w-full' src={props.img} alt="" />
     <div className=' absolute inset-0 top-0 left-0 h-full w-full p-6 flex flex-col justify-between' >
        <h1 className='bg-yellow-50 p-6 rounded-full font-extrabold text-xl h-9 w-9  flex items-center justify-center text-center'>
            {props.num}
        </h1> 
        <div> 
        <p className='py-3 text-white '>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cupiditate, suscipit quibusdam. Accusantium earum unde nulla.</p>
        <div className='flex text-white font-bold  '>
        <button style={{backgroundColor:props.color}} className=' px-9 py-2 rounded-full'>Satisfied</button>
        <button className='bg-yellow-900 px-3 py-2 rounded-full'><i class="ri-arrow-right-line"></i></button>
        </div>
        </div>
     </div>
    </div>
  )
}
