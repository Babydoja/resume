import React from 'react'
import {Link} from 'react-router-dom'
import Styles from '../Auth/auth.module.scss'

const Reset = () => {
  return (
    <section className ={`container ${Styles.auth}`}>
    <div className={Styles.img}>

    </div>
    <div className={Styles.form}>
       <h2>Reset Password</h2>
       <form>
           <input type="email" placeholder="Email" required/>
           <button  type="submit"className='--btn --btn-primary --btn-block'>Reset Password </button>
           
       </form>
       
        <p><Link to ="/Login">-Login</Link></p>
        <p> <Link to ="/Register">-Register</Link></p>
     
   </div>

</section>

  )
}

export default Reset