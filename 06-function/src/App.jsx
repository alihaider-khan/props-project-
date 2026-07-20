import React from 'react'

export default function App() {
  // const heyclick=()=>{
  //   console.log('btn is clicked')
  // }
  // const change=(val)=>{
  //    console.log(val)
  // }
  function deltas(ele){
    if(ele>0){
      console.log('positive ')
    }
    else {
      console.log('negative')
    }
  }
  return (
    <div>
      <div className='parent' onWheel={function(ele){deltas(ele.deltaY)}}>
        <div className="page1" ></div>
        <div className="page2"></div>
        <div className="page3"></div>
      </div>
     {/* <input type="text" placeholder='enter text' onChange={function(ele){change(ele.target.value)}}/>
      <button onMouseEnter={heyclick} onClick={heyclick}>click here</button> */}
    </div>
  )
}
