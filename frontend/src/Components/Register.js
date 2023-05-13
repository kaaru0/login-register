import React from 'react'
import './Register.css';
import { Link } from 'react-router-dom';


export default function Register() {
  return (
    <div className="login-box">
        <h1>Register an Account</h1>
        <form action="" className="form">
            <div className="section">
                <label htmlFor="email">E-mail</label>
                <input type="email" name="email"></input>
            </div>
            <div className="section">
                <label htmlFor="userName">username</label>
                <input type="text" name="userName"></input>
            </div> 
            <div className="section">
                <label htmlFor="password">password</label>
                <input name="password" type="password"></input>
            </div>
            <div className="submit-section">
                <input type="submit" value="Create Account" />
                <span>Already have an account? <Link to="/">Click here to login</Link></span>
            </div>
        </form>
    </div>
  )
}
