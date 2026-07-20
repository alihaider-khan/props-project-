import React, { useContext } from 'react'
import { Apidatacontext } from '../context/Apicontextes'

export default function Bbutton() {
   const [theme,settheme] =  useContext(Apidatacontext)
  const changesses=()=>{
      settheme('dark')
   }
  return (
    <div>
      <button onClick={changesses}>click {theme}</button>
    </div>
  )
}
