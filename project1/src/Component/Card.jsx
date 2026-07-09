import React from 'react'
import {Bookmark} from 'lucide-react'


export default function Card(props) {
  return (
    <>
    <div className="card">
    
              <div className="top">
                <img src={props.img }alt="" />
                <button>save <Bookmark size={13}/></button>
              </div>
              <div className="center">
                <h4>{props.name} <span>5 days ago</span></h4>
                <h3>{props.design}</h3>
                <div id='cc'>
                  <h4>{props.time}</h4>
                  <h4>{props.level}</h4>
                </div>
              </div>
              <div className="bottom">
                <div id='btmhd'>
                  <h4>{props.pay}</h4>
                  <h6>{props.city}</h6>
                </div>
                <button id='btn'>Appli now</button>
              </div>
    
            </div>
            
    </>
  )
}
