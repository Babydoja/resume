import React from 'react'
import feed from '../assets/Group 214.png'
import '../Feedback/Feedback.css'
import lang from '../assets/tabler_world.png'
import lind from '../assets/mdi_linkedin.png'
import fac from '../assets/Vector.png'
import whats from '../assets/ri_whatsapp-fill.png'
import insta from '../assets/ri_instagram-fill.png'
const Feedback = () => {
  return (
    <div>
    <div className='feeds'>
        <div className='feed1'>
            <h4>Do you have any feedback?</h4>
            <div className='inputfield'>
                <label>Enter Feedback</label>
                <div className='inputs'><input className='input1' type='text'/>
                <img className='img2' src={feed} width={25} /></div>
            </div>
        </div>
        <div className='feed2'>
            <ul>
                <li>About</li>
                <li>partners</li>
                <li>Privacy Policy</li>
                <li>Terms of Service</li>
            </ul>
        </div>
        <div className='feed3'>
            <ul>
                <li>Pricing</li>
                <li>Contact us</li>
                <li>Press Kit</li>
                <li></li>
            </ul>
        </div>
    </div>

    <div className='footer'>
        <div className='foot1'>
            <img src={lang}/>
            <p>English</p>
        </div>
        <div>
            <span>Share with your friends</span>
        </div>
        <div className='foot3'>
        <img className='fscc' src={fac}/>
        <img className='fscc' src={lind}/>
        <img className='fscc' src={insta}/>
        <img className='fscc' src={whats}/>
        </div>

    </div>
    </div>
  )
}

export default Feedback