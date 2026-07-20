



import React, { useState } from 'react'
import Navbar from './assets/component/Navbar'

export default function App() {
  const[theme,settheme]=useState('light')
  return (
    <div>
      <h1>theme is {theme}</h1>
      <Navbar theme={theme} settheme={settheme}/>
    </div>
  )
}
