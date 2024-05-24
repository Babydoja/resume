import React from 'react'
import{LiaCrossSolid} from 'react-icons/lia'
import{FaFilePdf} from 'react-icons/fa'
import{TfiWrite} from 'react-icons/tfi'
import{MdFreeCancellation} from 'react-icons/md'
import{FaUserLock} from 'react-icons/fa'
import{FaCreativeCommonsSamplingPlus} from 'react-icons/fa'
// import Image from '../assets/Group 216.png'
// import Image1 from '../assets/Group 216.png'

export const Freedata =  [
    {
        id:1,
        icon: <LiaCrossSolid size={40}/>,
        heading:"Fully flexible design",
        text:"Being easy to use doesn't have to mean that you are forced into using a pre-made template. Make your resume stand out by trying different headline formats and more.",
        // button:"SIGN UP"
    },
    {
        id:2,
        icon: <FaFilePdf size={40}/>,
        heading:"Pdf file",
        text:"A great deal of effort went into making sure that your PDF looks as crisp as it gets when printed or shared.",
        // img:<img src={Image1}/>
    },
    {
        id:3,
        icon: <TfiWrite size={40}/>,
        heading:"Effortless editing",
        text:"Whether you want to input skills,professional experience, we designed guided forms to help you inputting all the data necessary.",
        // img:<img src={Image}/>
       
    },
    {
        id:4,
        icon: <MdFreeCancellation size={40}/>,
        heading:"Free, as in free",
        text:"Your first resume is entirely for free and it will be free of watermarks.There are no premium-only options and you can download your resume for free, as many times as you like.",
       
    },
    {
        id:5,
        icon: <FaUserLock size={40}/>,
        heading:"Data privacy",
        text:"We don't sell your data. Ever. Instead, we are GDPR-ready and let you delete all of your data in a heartbeat if you decide so.",
    },
    {
        id:6,
        icon: <FaCreativeCommonsSamplingPlus size={40}/>,
        heading:"ATS-ready resume",
        text:"With most employers, your resume will be scanned by an applicant tracking system (ATS), parsing resumes for keywords. Using FlowCV,you will get a PDF that is proven to be readable by an ATS.",
    },
]
 

