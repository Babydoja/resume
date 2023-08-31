
import React ,{useState}from 'react'
import './style.css'
import Styles from "../Auth/auth.module.scss"
import { Link } from 'react-router-dom'
import {FaGoogle} from 'react-icons/fa'
import { toast } from 'react-toastify'
import { signInWithEmailAndPassword } from 'firebase/auth'


import { auth } from '../../database/Config'


const Login = () => {
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')
    const loginUser =(e) =>{
      e.preventDefault()
      if (password.length<6){
        toast.error("password must be greater than 6")
      }
      signInWithEmailAndPassword(auth,email,password)
      .then((userCredential)=>{
        const user = userCredential.user
        console.log(user);
        toast.success("login successfully")
  
      })
     
      .catch((error) => {
        toast.error(error)
        
      })
     
      setEmail('')
      setPassword('')
      
    }
  return (
   <section className ={`container ${Styles.auth}`}>
       <div className={Styles.img}>

       </div>
       <div className={Styles.form}>
           <h2>Login</h2>
           <form onSubmit={loginUser}>
               <input type="email" placeholder="Email" onChange={(e)=>setEmail(e.target.value)} value={email}  required/>
               <input type="password" placeholder="password" onChange={(e)=>setPassword(e.target.value)}  value={password} required/>
               <div className={Styles.link}>
                   <Link to ="/reset">Reset password</Link>
                  <button className='--btn --btn-primary --btn-block ' type='submit'>login</button>
               </div>
               <p>--- or ---</p>
               <button className='--btn --btn-primary --btn-block'>
               <FaGoogle color="#fff"/> Login with Goggle
           </button>
           </form>
           
           <span className={Styles.register}><p>Dont have an account?</p>
           <Link to ="/Register">Register</Link>
           </span>
       </div>
   </section>
    
  )
}

export default Login