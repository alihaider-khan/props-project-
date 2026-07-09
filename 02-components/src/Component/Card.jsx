import React from 'react'

export default function cards(props) {
  return (
    <>
    
      
     <div className="card">
      <img src={props.img} alt="" />
        <h1>{props.user}</h1>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. </p>
        <button>view profile</button>
      </div>
      
      
      
      
     
      
      
    
      
    </>
  )
}
