import React from 'react'
import '../Free/Frees.css'

const Frees = ({icon,heading,text}) => {
  return (
    
       
            <div className="grid">
                <div className="icon">{icon}</div>
                <h3 className='hrads'>{heading}</h3>
                <p className="text">{text}</p>
            </div>
           
       
  
  )
}

export default Frees