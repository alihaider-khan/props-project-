import React, { createContext } from 'react'
import { useState } from 'react'
export  const Apidatacontext = createContext()

export default function Apicontextes(props) {
      const[theme,settheme]=useState('light')
    
  return (
    <div>
        <Apidatacontext.Provider value={[theme,settheme]}>

        {props.children}
        </Apidatacontext.Provider>
    </div>
  )
}
