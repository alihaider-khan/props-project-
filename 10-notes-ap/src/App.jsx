import React, { useState } from 'react'

export default function App() {
    const[text,settext] = useState('')
    const[detail,setdetail] = useState('')
    const[task,settask] = useState([])

 const handelsubmited=(e)=>{
    e.preventDefault()
    console.log(text,detail)
    const copytask = [...task]
    copytask.push({text,detail})
      settask(copytask)


          settext('')
          setdetail('')

  }
  const changehandel=(event)=>{
      settext(event.target.value)
      // console.log(event.target.value)

    }
     const changedetail=(event)=>{
      setdetail(event.target.value)
      // console.log(event.target.value)

    }
    const deletebtn=(idx)=>{
       const copytask = [...task]
       copytask.splice(idx,1)
       settask(copytask)
    }
  return (
    <div className='h-screen lg:flex  bg-black text-white'>
      <form onSubmit={(e)=>{handelsubmited(e)}}className='flex flex-col  lg:w-1/2 p-10 item-start text-white '>
        <h1 className=' m-2 font-bold text-4xl'>Add Notes</h1>
        <input  onChange={(event)=>{changehandel(event)}} value={text} className=' h-[10vh] w-full text-medium rounded border-2 outline-0 p-2 m-2' type="text" placeholder='Enter notes heading' />
        <textarea onChange={(event)=>{changedetail(event)}}  value={detail} className=' h-[20vh] w-full text-medium rounded border-2 outline-0 p-2 m-2' type="text" placeholder='Enter notes detail' />
        <button className=' h-[10vh]  active:scale-95 w-full text-medium rounded border-2 outline-0 p-2 m-2 bg-white text-2xl text-black' >submit</button>
      </form>
      <div className=' lg:w-1/2  gap-5  p-5 ml-3 '>
      <h1 className='text-4xl font-bold mb-5'>your notes</h1>
      <div className='flex flex-wrap gap-5 h-full overflow-auto'>
        {task.map(function(ele,idx){
         return <div key={idx} className='flex flex-col justify-between text-black h-50  bg-cover leading-tight bg-[url(https://www.onlygfx.com/wp-content/uploads/2022/03/realistic-notebook-notepage-paper-background-2-cover.jpg)] w-40 rounded-2xl'>
          <div>
          <h1 className='text-xl font-bold p-5'>{ele.text}</h1>
          <p className='text-gray-500 pl-5 '>{ele.detail}</p>
          </div>
           <button onClick={(idx)=>{deletebtn(idx)}}className='flex items-center justify-center active:scale-95 bg-red-500 rounded-full mb-3 ml-3 mr-3 text-center'>Delete</button>
         </div>

        })}
        
          
         
        </div>
      </div>
    
    </div>
  
  )
}
