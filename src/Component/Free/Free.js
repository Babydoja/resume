import React from 'react'
import '../Free/Free.css'

import { Freedata } from './Freedata'
import Frees from './Frees'
const Free = () => {
  return (
    <div className='back'>
        <div className='hero'>
            <h1 className='better'>A better way to build your resume</h1>
            <p className='more'>More flexible than templates, easier than using a word processor</p>
          <div><hr className='hr2'/></div>

        </div>
        <div className='flexbox'>
          
                {
                    Freedata.map((free)=>{
                        const{id,icon,heading,text}=free
                        return(
                            <div key={id}>
                             <Frees icon ={icon} heading ={heading} text={text} />
                            </div>
                        )
                     
                       
                        
                       
                    })
                }
          

        </div>
    </div>
  )
}

export default Free