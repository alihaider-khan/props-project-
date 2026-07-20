import React, { useContext } from 'react'
import {Apidatacontext} from '../context/Apicontextes'


export default function Nav2(props) {
    const [theme,settheme]= useContext(Apidatacontext)
  return (
    <div className='flex '>
      <h3 className='p-5'>Home</h3>
      <h3 className='p-5'>Course</h3>
      <h3 className='p-5'>{theme}</h3>
      <h3 className='p-5'></h3>
    </div>
  )
}
