import React from 'react'

export default function Navbar(props) {
  return (
    <div>
      <button onClick={()=>{props.settheme('dark')}}>click</button>
    </div>
  )
}
