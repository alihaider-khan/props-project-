import React, { useState } from 'react'
import axios from 'axios'

export default function app() {
  const[data,setdata]=useState([])
   async  function fetchingApi(){
    // let response =  fetch('https://jsonplaceholder.typicode.com/todos/1')
    // // let data = await responce.json()
    // // console.log(data)
    // .then((response)=>{
    //   return response.json()})
    // .then((json)=>{console.log(json)})
 
    let res = await axios.get('https://jsonplaceholder.typicode.com/todos/1')
    console.log(res.data)
    setdata(res.data)
  
};
  
  return (
    <div>
      <button onClick={fetchingApi}>click</button>
      <div>
        
         <h1>{data.id}</h1>
         <h1>{data.id}</h1>
         <h1>{data.id}</h1>

  
        </div>
    </div>
  )
}
