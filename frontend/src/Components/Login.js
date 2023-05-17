import React from 'react';
import './Login.css';
import { Link, useNavigate } from 'react-router-dom'
import Validation from './Validation';
import axios from 'axios';



export default function Login() {

  const navigate = useNavigate(); 
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

    axios.post('http://localhost:8806/login', values)
    .then(res => {
        if(res.data === "Successful Login"){
            navigate(`/welcome/${values.userName}`);
        } else {
            alert("No user recorded") 
        }
    })
  }

  console.log(values)

  return (
    <div className="login-box">
        <h1>Login to your Account</h1>
        <form action="" className="form" onSubmit={handleSubmit}>
            <div className="section">
                <label htmlFor="email">E-mail</label>
                <input type="email" name="email" onChange={handleInput}></input>
                
            </div>
            <div className="section">
                <label htmlFor="userName">username</label>
                <input type="text" name="userName" onChange={handleInput}></input>
                
            </div> 
            <div className="section">
                <label htmlFor="password">password</label>
                <input name="password" type="password" onChange={handleInput}></input>
                
            </div>
            <div className="submit-section">
                <input type="submit" value="Create Account" />
                <span>Dont have an account? <Link to="/register">Click here to Register</Link></span>
            </div>
        </form>
    </div>
  )
}
