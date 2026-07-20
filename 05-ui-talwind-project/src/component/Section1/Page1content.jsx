import React from 'react'
import Leftcontent from './Leftcontent'
import Rightcontent from './Rightcontent'

export default function Page1content() {
  return (
    <div className=' h-[90vh] gap-2 flex  justify-between  py-10 px-18'>
    <Leftcontent/>
    <Rightcontent/>
    </div>
  )
}
