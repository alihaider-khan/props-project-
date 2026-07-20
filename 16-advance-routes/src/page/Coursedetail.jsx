import React from 'react'
import { useParams } from 'react-router-dom'

export default function Coursedetail() {
    const p = useParams()
    console.log(p.id)
  return (

    <div>
      <h1 className='absolute left-1/2 top-1/2 capitalize -translate-x-1/2 -translate-y-1/2'>{p.id} Course detail</h1>
    </div>
  )
}
