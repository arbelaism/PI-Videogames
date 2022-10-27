import React from 'react'
import logo from '../../assets/logo.png'
import './Landing.css'

const Landing = () => {
    return (
        <div className="pi__landing">
            <div className="pi__landing-container">
                <img src={logo} alt="logo" />
                <h1>Videogames</h1>
            </div>
        </div>
    )
}

export default Landing
