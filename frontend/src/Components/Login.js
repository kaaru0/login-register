import React from 'react';
import './Login.css';
import { Link } from 'react-router-dom'
import Validation from './Validation';


export default function Login() {

  const [values, setValues] = React.useState({
    email: "",
    userName: "",
    password: ""
  })
  const [errors, setErrors] = React.useState({})


  const handleInput = (event) => {
     const {name,value} = event.target
     setValues(prev => {
        return{
            ...prev,
            [name]: value
        }
     })
  }
  
  const handleSubmit = (event) => {
    event.preventDefault();
    setErrors(Validation(values))
  }

  console.log(values)

  return (
    <div className="login-box">
        <h1>Login to your Account</h1>
        <form action="" className="form" onSubmit={handleSubmit}>
            <div className="section">
                <label htmlFor="email">E-mail</label>
                <input type="email" name="email" onChange={handleInput}></input>
                {errors.email && <span className='error-message'> {errors.email}</span>}
            </div>
            <div className="section">
                <label htmlFor="userName">username</label>
                <input type="text" name="userName" onChange={handleInput}></input>
                {errors.userName && <span className='error-message'> {errors.userName}</span>}
            </div> 
            <div className="section">
                <label htmlFor="password">password</label>
                <input name="password" type="password" onChange={handleInput}></input>
                {errors.password && <span className='error-message'> {errors.password}</span>}
            </div>
            <div className="submit-section">
                <input type="submit" value="Create Account" />
                <span>Dont have an account? <Link to="/register">Click here to Register</Link></span>
            </div>
        </form>
    </div>
  )
}
