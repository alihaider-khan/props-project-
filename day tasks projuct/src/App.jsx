import React, { useEffect, useState } from 'react'
import Tasklist from './component/Tasklist'

export default function App() {
  const[task,settask]=useState([])
  const[loading,setloading]=useState(true)
 
  const[inputvalue,setinputvalue]=useState('')
  const handelAddTask=(e)=>{
   e.preventDefault()
  let inputcheck = inputvalue.trim()

  if(inputcheck===''){
    return 
  }
  
   let newtask={
     id:Date.now(),
     text:inputcheck,
     completed:false

   } 
   const update = [...task,newtask]
   console.log(task)
   settask(update)

  localStorage.setItem('my-day-task',JSON.stringify(update))
   setinputvalue('')
  }
  const ondeletetask=(id)=>{
   const update = task.filter((item)=>{
   return item.id!=id
   })
   localStorage.setItem('my-day-task',JSON.stringify(update))

   settask(update)

  }
  const ontoggletask=(id)=>{
    const updataes = task.map((item)=>{
    if(item.id===id){
      return {...item,completed:!item.completed}
    }
        return item

    })
        localStorage.setItem('my-day-task',JSON.stringify(updataes))

    settask(updataes)

  }
 
  useEffect(()=>{
    const savetask = localStorage.getItem('my-day-task')
    const update=  JSON.parse(savetask)
    if(update.length>0){
      setloading('Loading..')
      setTimeout(()=>{
        setloading(false)
        settask(update)
    },2000)
    }
    else{
      settask([])
      setloading(false)
    }
  },[])

  return (
    <div className='h-screen w-full px-5 bg-gray-200 flex flex-col overflow-y-auto'>
      {/* <div className=' rounded-xl absolute  left-1/3 mt-10 -transition-y-1/2 -transition-x-1/2 w-100 pb-13 bg-gray-50 shadow-2xl'> */}
      <div >
      <h1 className=' font-bold text-2xl gap-5  pt-5'>My Day Task Planner</h1>
      <h3 className='text-gray-400 mt-5   '>Stay organized and get things done</h3>

      </div>
      <form onSubmit={handelAddTask} className=' w-full md:w-[97%] flex-col  md:flex-row  ' >
        <input  className='md:w-[87%] w-full mt-5 border-2 border-blue-500 hover:border-blue-700 outline-0  rounded-lg h-11.5  p-2   'onChange={(e)=>setinputvalue(e.target.value)} value={inputvalue}  type="text" placeholder='Add new task... '  />
        <button type='submit' className=' md:w-20 w-full mt-5 active:scale-95 cursor-pointer hover:bg-blue-800 bg-blue-500 text-white rounded-4xl  md:ml-4 ml-0 mr-0 md:px-5 px-15 py-1.5  h-11.5'>Add</button>
      </form>
      <div className='mt-7  overflow-y-auto '>
      {loading? <span className='w-full h-full flex items-center justify-center text-center text-gray-400 '>{loading}</span>:task.length>0?task.map((taskitem)=>{return <Tasklist key={taskitem.id} task={taskitem} ontoggle={ontoggletask} ondelete={ondeletetask}/>}):<span className='w-full h-full flex items-center justify-center text-center   text-gray-400 '>No task for today. Add one above!!!</span>}
      </div>
        
      {/* </div> */}
    </div>
  )
}



  