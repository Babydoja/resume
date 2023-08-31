import React,{useState} from 'react'
import {Link} from 'react-router-dom'
import Styles from '../Auth/auth.module.scss'
import { toast } from 'react-toastify'
import { auth } from '../../database/Config'

import { createUserWithEmailAndPassword } from 'firebase/auth'

const Register = () => {
  const [email,setEmail] = useState('')
  const [password,setPassword] = useState('')
  const [cpassword,setCpassword] = useState('false');
  const registerUser =(e) =>{
    e.preventDefault()
    if (password !== cpassword){
      toast.error("password doesnot match")
      
    }
   
    if (password.length<6){
      toast.error("password must be greater than 6")
    
    }
    createUserWithEmailAndPassword(auth,email,password)
    .then((userCredential)=>{
      const user = userCredential.user
      console.log(user);
      toast.success("Register successfully")
    console.log('register succssfullly');

    })
    .catch((error) => {
      toast.error(error)
    console.log(error);
    })
   
    setEmail('')
    setPassword('')
    setCpassword('')
  }
 
  return (
    <section className ={`container ${Styles.auth}`}>
        <div className={Styles.img}>

        </div>
        <div className={Styles.form}>
           <h2>Register</h2>
           <form onSubmit={registerUser}>
               <input type="email" placeholder="Email" onChange={(e)=>setEmail(e.target.value)} value={email}  required/> 
               <input type="password" placeholder="password" onChange={(e)=>setPassword(e.target.value)}  value={password}  required/>
               <input type='password'placeholder='confirm password' onChange={(e)=>setCpassword(e.target.value)}  value={cpassword}  required/>
               <button  className='--btn --btn-primary --btn-block'>
               Register
           </button>
           </form>
          
           <span className={Styles.register}>
               <p>Already have an account</p>
           <Link to ="/Login">Login</Link>
           </span>
       </div>

    </section>
  )
}

export default Register