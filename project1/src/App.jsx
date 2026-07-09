import React from 'react'
import Card from './Component/Card.jsx'

export default function App() {
  let arr = [{name:'Amazone',design:'Senior UI/UX Designer',time:'part-time',level:'Senior level',pay:"$120/hr",city:"Lahore ,Pakistan ",img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGARB4PRYKkemGJgn2lUROMMlKLDLTxSgd0SDZ_b_hF-zr5EwsH-I0GcPi&s=10" }
    ,{name:'goggle',design:"Graphic Designer",time:'part-time',level:'Flexible Schedule' ,pay:"$150-200", city:"kirachi ,Pakistan ",img:"https://media.wired.com/photos/5926ffe47034dc5f91bed4e8/3:2/w_2560%2Cc_limit/google-logo.jpg " }
,{name:'Dribble' ,design:'Senior motion Designer',time:'contract', level:'Remote', pay:"$85/hr", city:" Chennel Pakistan ",img:"https://static.vecteezy.com/system/resources/previews/012/660/867/non_2x/dribbble-logo-on-transparent-isolated-background-free-vector.jpg" }
,{name:'Airbnb', design:'Junior UI/UX Designer',time:'contract' ,level:'Remote' ,pay:"$100/hr" ,city:"Dehli ,Pakistan ",img:"https://static.vecteezy.com/system/resources/previews/074/690/620/non_2x/airbnb-logo-inside-transparent-symbol-mark-illustration-free-png.png" }
,{name:'Apple' ,design:'GraphicDesigner',time:'ful-time', level:'Flex level' ,pay:"$85-120" ,city:"Lahore ,Pakistan ",img:"https://cdn-icons-png.flaticon.com/512/0/747.png" }
,{name:'Figma' ,design:'UX Designer',time:'part-time', level:"office level" ,pay:"$200-250" ,city:"Bangulore ,Pakistan ",img:"https://cdn.sanity.io/images/599r6htc/regionalized/a00d07b6f147b1bbff2456f9d018557cc14a65c4-720x720.png?w=720&h=720&q=75&fit=max&auto=format" }]
  return (
    <>
    <div className="parent">
    {arr.map((ele,idx)=>{
      return <Card key={idx} name={ele.name} design={ele.design} time={ele.time} level={ele.level} pay={ele.pay} city={ele.city} img={ele.img} />

    
    })}
    </div>
       {/* <div className="parent">
        
        <Card name='Amazone' design='Senior UI/UX Designer'time='part-time' level='Senior level' pay="$120/hr" city="Lahore ,Pakistan "img={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGARB4PRYKkemGJgn2lUROMMlKLDLTxSgd0SDZ_b_hF-zr5EwsH-I0GcPi&s=10" } />
        <Card name='goggle' design="Graphic Designer" time='part-time' level='Flexible Schedule' pay="$150-200" city="kirachi ,Pakistan "img={"https://media.wired.com/photos/5926ffe47034dc5f91bed4e8/3:2/w_2560%2Cc_limit/google-logo.jpg "} />
        <Card name='Dribble' design='Senior motion Designer'time='contract' level='Remote' pay="$85/hr" city=" Chennel Pakistan "img={"https://static.vecteezy.com/system/resources/previews/012/660/867/non_2x/dribbble-logo-on-transparent-isolated-background-free-vector.jpg" } />
        <Card name='Airbnb' design='Junior UI/UX Designer'time='contract' level='Remote' pay="$100/hr" city="Dehli ,Pakistan "img={"https://static.vecteezy.com/system/resources/previews/074/690/620/non_2x/airbnb-logo-inside-transparent-symbol-mark-illustration-free-png.png" } />
        <Card name='Apple' design='GraphicDesigner'time='ful-time' level='Flex level' pay="$85-120" city="Lahore ,Pakistan "img={"https://cdn-icons-png.flaticon.com/512/0/747.png" } />
        <Card name='Figma' design='UX Designer'time='part-time' level="office level" pay="$200-250" city="Bangulore ,Pakistan "img={"https://cdn.sanity.io/images/599r6htc/regionalized/a00d07b6f147b1bbff2456f9d018557cc14a65c4-720x720.png?w=720&h=720&q=75&fit=max&auto=format" } />
       

       </div> */}
    </>
  )
}
