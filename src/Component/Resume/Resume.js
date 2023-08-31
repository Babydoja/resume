import React from 'react'
import '../Resume/Resume.css'
import { Link } from 'react-router-dom'

const Resume = () => {
  return (
    <div className='resume1'>
        <div className='resume'>
            <h1 className='build'>Build your resume online</h1>
            <button className='btn3'><Link to ="/Register">Try for free</Link></button>
            <br/>
            <span className='span1'>No account needed</span>

        </div>
    </div>
  )
}

export default Resume