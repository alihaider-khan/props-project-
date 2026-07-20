import React from 'react'
import Navbar from './component/Navbar'
import Home from './page/Home'
import Contact from './page/Contact'
import About from './page/About'
import { Route,Routes } from 'react-router-dom'

export default function App() {
  return (
    <div>
      <Navbar/>
     <Routes>
      <Route exact path='/' element={<Home/>}/>
      <Route exact path='/About' element={<About/>}/>
      <Route exact path='/Contact' element={<Contact/>}/>

     </Routes>
    </div>
  )
}
