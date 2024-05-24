import React from 'react'
import './Resume.css'
import profile from '../assets/contact-parach-computers-150x150.jpg'
import { FaPhone } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { CiLink } from "react-icons/ci";
import { FaLocationDot } from "react-icons/fa6";

const Resume = () => {
  return (
    <body>
      <div className='container'>
        <div className='left_side'>
          <div className='profileText'>
            <div className='imgBx'><img src={profile}/></div>
            <h2>Bolatito oladoja <br/><span>Web Developer</span></h2>
          </div>
          <div className='contactInfo'>
            <h3 className='title'>Contact Info</h3>
            <ul>
              <li>
                <span className='icon'><FaPhone /></span>
                <span className='text'>08083016392</span>
              </li>
              <li>
                <span className='icon'><MdEmail /></span> 
                <span className='text'>oladojabolatito29@gmail.com</span>
              </li>
              <li>
                <span className='icon'><CiLink /></span>
                <span className='text'>https://parachictacademy.com.ng/</span>
              </li>
              <li>
                <span className='icon'><FaLocationDot /></span>
                <span className='text'>patna Bihar ,india</span>
              </li>
            </ul>

          </div>
          <div className='contactInfo education'>
            <h3 className='title'>Education</h3>
            <ul>
              <li>
                <h5>2010 - 2013</h5>
                <h4>Master Degree in Computer Science </h4>
                <h4>University of ibadan </h4>
              </li>
              <li>
                <h5>2007 - 2010</h5>
                <h4>Bachelor Degree in Computer Science </h4>
                <h4>Osun state University </h4>
              </li>
              <li>
                <h5>1997 - 2007</h5>
                <h4>Matriculation </h4>
                <h4>University name </h4>
              </li>
            </ul>
          </div>
          {/* laguage */}
          <div className='contactInfo  '>
            <h3 className='title'>Languages</h3>
            <ul>
              <li>
                <span className='text'>English</span>
                <span className='percent'>Good speaking</span>
              </li>
              <li>
                <span className='text'>spanish</span>
                <span className='percent'>Average</span>
              </li>
              <li>
                <span className='text'>french </span>
                <span className='percent'>Very good</span>
              </li>
            </ul>
          </div>

         
          
        
        </div>
        {/* right start  */}

        <div className='right_side'>
          <div className='about'>
            <h2 className='title2'>Profile</h2>
            <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
             Modi aspernatur rerum, non vero dolorum debitis eum similique illum corrupti,
              sit quidem minima eius 
             doloribus iure reprehenderit excepturi maiores tempora commodi? <br/><br/>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
             Modi aspernatur rerum, non vero dolorum debitis eum similique illum corrupti,
              sit quidem minima eius 
             doloribus iure reprehenderit excepturi maiores tempora commodi?
            </p>
          </div>
          <div className='about'>
            <h2 className='title2'>Experience</h2>
            <div className='box'>
              <div className='year_company'>
                <h5>2019 - present</h5>
                <h5>Comapany Name</h5>
              </div>
              <div className='text'>
                <h4>Senior Ux Designer</h4>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Modi aspernatur rerum, non vero dolorum debitis eum similique illum corrupti, sit quidem minima eius doloribus iure reprehenderit excepturi maiores tempora commodi?</p>
              </div>
            </div>
            <div className='box'>
              <div className='year_company'>
                <h5>2016 - 2019</h5>
                <h5>Comapany Name</h5>
              </div>
              <div className='text'>
                <h4>Ui/ux Designer</h4>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Modi aspernatur rerum, non vero dolorum debitis eum similique illum corrupti, sit quidem minima eius doloribus iure reprehenderit excepturi maiores tempora commodi?</p>
              </div>
            </div>
            <div className='box'>
              <div className='year_company'>
                <h5>2014 - 2016</h5>
                <h5>Comapany Name</h5>
              </div>
              <div className='text'>
                <h4>Software Developer</h4>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Modi aspernatur rerum, non vero dolorum debitis eum similique illum corrupti, sit quidem minima eius doloribus iure reprehenderit excepturi maiores tempora commodi?</p>
              </div>
            </div>

          </div>

          <div className='about skills'>
            <h2 className='title2'>Professional skills</h2>
            <div className='box'>
              <h4>Html</h4>
              <div className='percent'></div>
            </div>
            <div className='box'>
              <h4>javascript</h4>
              <div className='percent'></div>
            </div>
            <div className='box'>
              <h4>Css</h4>
              <div className='percent'></div>
            </div>
            <div className='box'>
              <h4>photoshop</h4>
              <div className='percent'></div>
            </div>
          </div>

          <div className='about interest'>
            <h2 className='title2'>Interest</h2>
            <ul>
              <li>Gaming</li>
              <li>singing</li>
              <li>Reading</li>
              <li>Dancing</li>
            </ul>
          </div>
        </div>


    </div>
    </body>
  )
}

export default Resume