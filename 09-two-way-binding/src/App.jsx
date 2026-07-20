import React, { useState } from 'react'


export default function App() {
  const[text,settext] = useState('')
  const submited=(e)=>{
    e.preventDefault()
    console.log("form submited ",text)
    settext('')
  }
  const changehandel=(event)=>{
    
     settext(event.target.value)
  }
  return (
    <div className='bg-gray-900 h-[100vh] w-full  '>
     <form className=' p-9  ' onSubmit={(e)=>{ 
      submited(e)}}>
      <input  onChange={(event)=>{changehandel(event)}} value={text} className='bg-white p-5 rounded-2xl m-5' type="text" placeholder='enter name' />
     <button   className='bg-black text-white text-2xl p-3 m-10 rounded-2xl'>submit</button>
     </form>
    </div>
  )
}