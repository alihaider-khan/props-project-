import React from 'react'


export default function App() {
  const submited=(e)=>{
    e.preventDefault()
         console.log(e)
  }
  return (
    <div className='bg-gray-900 h-[100vh] w-full  '>
     <form className=' p-9  ' onSubmit={(e)=>{ 
      submited(e)}}>
      <input className='bg-white p-5 rounded-2xl m-5' type="text" placeholder='enter name' />
     <button   className='bg-black text-white text-2xl p-3 m-10 rounded-2xl'>submit</button>
     </form>
    </div>
  )
}
