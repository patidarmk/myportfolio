import { useState } from 'react'
import './Tabs.css'
const Tabs =(props)=> {
   
    
    return (
        <div className="tabs-container">
                {
                    props.tabList.map((tab,index)=>{
                        return (
                       <button className = {props.isActive===index ? "btn-active": "btn"  } key={index+1} onClick={()=>{props.clickHandler(index)}}> {tab}  </button>
                    )
                }
            )
        }
          </div>
    )
            
}

export default Tabs;