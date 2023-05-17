import React from 'react'
import { useParams } from 'react-router-dom'
import './Welcome.css'
export default function Welcome() {

    const { email, userName } = useParams();

    return (
        <div className="welcome-page">
            <h1>Hi {userName}</h1> 
        </div>
  )
}
