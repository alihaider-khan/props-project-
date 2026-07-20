import React from 'react'

export default function texklist({task,ontoggle,ondelete}) {
  return (
    <div >
      <div className='flex justify-between items-center md:w-[92%] w-full flex-col md:flex-row rounded-xl border-2 border-solid border-white  bg-white p-3 mb-3  '>
        <div className='items-start text-left w-full flex  p-2'>
        <input className='w-7 shrink-0 wrap-break-word mt-1 h-5 cursor-pointer ' onChange={()=>{ontoggle(task.id)}} type="checkbox"  checked={task.completed} placeholder='hey i am text list' />
        <h1 className={`ml-3 flex-1 break-all ${task.completed? ' text-gray-300':'text-black'}`}>{`${task.completed===true?`${task.text}(completed)`:`${task.text}`}`}</h1>
      </div>
       <button onClick={()=>{ondelete(task.id)}} className=' w-[80%] md:w-auto mt-4 md:mt-0 mx-3 active:scale-95 cursor-pointer hover:bg-red-700 hover:text-white bg-red-100 text-red-700 px-5 py-1 rounded-2xl'>delete</button>    
    </div>
      </div>
     
  )


}
