import React, { useState } from 'react'
import axios from 'axios';
export default function App() {
  const[imgdata,setimgdata]=useState([])
const fetching = async () => {
    try {
      const r = await axios.get('https://api.tvmaze.com/shows?page=1&limit=50')
      console.log(r.data) 
      setimgdata(r.data.slice(0, 50))

    } catch (error) {
      console.error("Data fetch karne mein error aaya:", error)
    }
  }


let userdata = 'loading'
  if (imgdata.length > 0) {
 userdata=  imgdata.map(function(ele,idx){
        return(<div className='h-40 w-44 gap-3 'key={idx}>
          <h1>{idx}</h1>
          <img className='h-full w-full p-3 m-3' src={ele.image ? ele.image.original : "https://via.placeholder.com/150x220?text=No+Poster"} alt="" />
          </div>)
      })
  }
 
  return (
    <div>
      <button onClick={fetching}className='bg-green-800 text-white  rounded m-5 px-3 py-1 '>click</button>
      <div className='flex flex-wrap ' >{userdata}</div>
    </div>
  )
}
