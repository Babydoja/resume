import React from 'react'
// import '../Component/Header/Header.css'
import '../Header/Header.css'
// import img from '../Component/assets/landing page.jpg'
// import img from '../Component/assets/image 1.png'
import img from '../assets/imageside.png'
import {NavLink } from 'react-router-dom'
import Resume from '../Resume/Resume'
import Feedback from '../Feedback/Feedback'
import Free from '../Free/Free'
import {BiRightArrowAlt} from 'react-icons/bi'
import Frequentques from '../Frequentquesion/Frequestques'
// import{LuParkingCircle} from 'react-icons/lu'
const items = [
  {   line:<hr/>,
      icon: <BiRightArrowAlt size={25}/>,
      title: ' Can I try FlowCV without an account?',
      content: 'Yes',
    },
  {
    line:<hr/>,
    icon: <BiRightArrowAlt size={25}/>,
    title: 'Will you sell my data?',
    content: 'No',
  },
  {
    line:<hr/>,
    icon: <BiRightArrowAlt size={25}/>,
    title: 'Can you give me feedback on my resume?',
    content: 'Yes',
  },
  {
    line:<hr/>,
    icon: <BiRightArrowAlt size={25}/>,
    title: 'Is FlowCV really free??',
    content: 'Yes',
  },
  {
    line:<hr/>,
    icon: <BiRightArrowAlt size={25}/>,
    title: 'Can you give me feedback on my resume?',
    content: 'Yes',
    
  },
];


const Header = () => {
  return (
    <div className='landingpage'>
    <div className='container'> 
          <div>
            {/* <LuParkingCircle size={40} color='#4054B2'/> */}
          </div>
          <div className='navcontain'>
        <ul>
            <li className='free'><NavLink to='/register'>Try for free</NavLink></li>
          <button className='btns'> <NavLink to='/login'>Login</NavLink> </button>
            {/* <button className='btns'>Login</button> */}
           {/* <input type='button' placeholder='loginhjjjjjjjjjjjjjjjj'/> */}
          </ul>
  
        </div>
    </div>
    <div className='background'>
        <div className='textbackground'>
        <h2>Build a job- <br/>winning <br/> resume for free</h2>
        <p className='set'>Set yourself apart with a modern resume.<br/> Expert tips, customizable templates & quick PDF <br/> 
                download included.</p>
                <button className='btn2'>Get started</button>
        </div>
        <div className='backgroundimage'>
        <img src={img} width={300} id='img1'  alt=""/>
        </div>
    </div>
    {/* <Frequentques/> */}
    
    <Free/>
    <Resume/>

    <Frequentques items={items}/>
    <Feedback/>
    </div>
    
  )
}

export default Header