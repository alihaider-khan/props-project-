import React from 'react'
import Cards from './Cards'

export default function Rightcontent() {
         let arr = [{num:'1',color:'red',img:"https://plus.unsplash.com/premium_photo-1658506656752-4f1b1c1d5916?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},{num:'2',color:'pink',img:"https://images.unsplash.com/photo-1650784854946-3c1f5b50eb19?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fHByb2Zlc3Npb25hbCUyMGltZ3xlbnwwfHwwfHx8MA%3D%3D"},{num:'3',color:'orange',img:"https://images.unsplash.com/photo-1659355894218-47ead670f7f5?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D "},{num:4,color:'yellow',img:"https://images.unsplash.com/photo-1646032540224-4ab44f77e6f2?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHByb2Zlc3Npb25hbCUyMGltZ3xlbnwwfHwwfHx8MA%3D%3D"},{num:5,color:'orange',img:"https://images.unsplash.com/photo-1691491918178-8a2e68b44919?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjR8fHByb2Zlc3Npb25hbCUyMGltZyUyMGRhcmslMjBiZ3xlbnwwfHwwfHx8MA%3D%3D"}]

  return (
    <div  id='right' className='w-2/3 h-full px-3  py-2 flex items-center justify-start gap-3 overflow-x-auto '>
        {arr.map((ele,idx)=>{
        return <Cards key={idx} color={ele.color} img={ele.img} num={ele.num}/>
        })}
    </div>
  )
}
