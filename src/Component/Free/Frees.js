import React from 'react'
import '../Free/Frees.css'

const Frees = ({icon,heading,text}) => {
  return (
    
       
            <div className="grid">
                <div className="icon">{icon}</div>
                <h3 className='hrads'>{heading}</h3>
                <p className="text">{text}</p>
                {/* <button>{button}</button> */}
            </div>
            // <div>
            //   <div>{icon}</div>
            //   <h3>{heading}</h3>
            //   <h1>{text}</h1>
            //   <div>{img}</div>
            // </div>
          
           
       
  
  )
}

export default Frees