import React from 'react'

export default function App() {
  // localStorage.setItem('user','alice')
  // localStorage.setItem('age',100)
  // let user = localStorage.getItem('user')
  // let age = localStorage.getItem('age')
  // localStorage.removeItem('user')
  // localStorage.clear()
  // console.log(age,user)

  let obj ={
    user:'ALICE',
    Age:20
  }
  localStorage.setItem('obj',JSON.stringify(obj))
  let object = JSON.parse(localStorage.getItem('obj'))
  console.log(typeof(object))


  return (
    <div>
      
    </div>
  )
}
