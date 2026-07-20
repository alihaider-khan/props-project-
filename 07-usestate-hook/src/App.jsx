import React from 'react'
import { useState } from 'react';
// import { useSyncExternalStore } from 'react';

export default function App() {
  // const[num,setnum] = useState(0)

  // function incrementbtn(){
  //  let newnum=num+1
  //  setnum(newnum)
  // }
  // function decrementbtn(){
  //   if(num>0){
  //  let newnum = num-1
  //  setnum(newnum)
  //   }
// const[obj,setobj]=useState({name:'abc',age:190})
// const[arr,setarr]=useState([10,20,30])
const[num,setnum]=useState(0)

// const  changenum=()=>{
      // let newobj = {...obj}         //methode 01
      // newobj.name = 'xyz'
      // setobj(newobj)
      // console.log(newobj)
      // setobj({...obj,age:30 })                    //method 02

      // setobj(prev=>({...prev,age:300}))      //method 03

      // setobj(function(prev){                     //methode 04
      //   return {...prev,age:400}
      // })

    // let newarr = [...arr]          //method 1
    // newarr.push(50)
    // newarr.shift()
    // setarr(newarr)


    // setarr([...arr,50])                 //method 2
    // setarr(prev=>([...prev,60]))      //method 03

    //  setarr(function(prev){                     //methode 04
    //     return [...prev,400]
    //   })
// }

//batch updates
     const batchupdate=()=>{
      setnum(prev=>(prev+1))
      setnum(prev=>(prev+1))
      setnum(prev=>(prev+1))

     }

  
    
    return (
    <div>
      {/* <h1>num is {num}</h1>
      <button onClick={incrementbtn}>Increment</button>
      <button onClick={decrementbtn}>Decrement</button> */}

      {/* <h1>{obj.name},{obj.age}</h1>
      <h1>{arr}</h1>
      <button onClick={changenum}>click me</button> */}

      <h1>{num}</h1>
      <button onClick={batchupdate}>clicl me</button>

    </div>
  )
}
