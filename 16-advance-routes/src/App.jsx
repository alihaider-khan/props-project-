import React from 'react'
import Navbar from './component/Navbar'
import Home from './page/Home'
import Contact from './page/Contact'
import About from './page/About'
import Product from './page/Product'
import Women from './page/Women'
import Men from './page/Men'
import Notfound from './page/Notfound'
import Courses from './page/Courses'
import Coursedetail from './page/Coursedetail'
import Navbar2 from './page/Navbar2'
import { Route,Routes } from 'react-router-dom'

export default function App() {
  return (
    <div>
      <Navbar/>
      <Navbar2/>
     <Routes>
      <Route exact path='/' element={<Home/>}/>
      <Route exact path='/About' element={<About/>}/>
      <Route exact path='/Contact' element={<Contact/>}/>
      <Route exact path='/Courses' element={<Courses/>}/>
      <Route exact path='/Courses/:id' element={<Coursedetail/>}/>

      {/* <Route exact path='/Contact' element={<Contact/>}/> */}
      <Route exact path='/product' element={<Product/>}>
      <Route exact path='Men' element={<Men/>}/>
      <Route exact path='Women' element={<Women/>}/>
      </Route>
     
      <Route path='*' element={<Notfound/>}/>

     </Routes>
    </div>
  )
}
