import React from 'react'
import './Register.css';
import { Link } from 'react-router-dom';
import RegValidation from './RegValidation'


export default function Register() {

    const [values, setValues] = React.useState({
        email: "",
        userName: "",
        password: "",
        confirmPassword: ""
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
        setErrors(RegValidation(values))
        }

        console.log(values)

  return (
    <div className="login-box">
        <h1>Register an Account</h1>
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
                {errors.password && <span className='error-message'>{errors.password}</span>}
            </div>
            <div className="section">
                <label htmlFor="confirmPassword">Confirm password</label>
                <input name="confirmPassword" type="password" onChange={handleInput}></input>
                {errors.confirmPassword && <span className='error-message'>{errors.confirmPassword}</span>}
            </div>
            
            <div className="submit-section">
                <input type="submit" value="Create Account" />
                <span>Already have an account? <Link to="/">Click here to login</Link></span>
            </div>

        </form>
    </div>
  )
}
