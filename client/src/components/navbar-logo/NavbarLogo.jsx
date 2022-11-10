import React from 'react'
import './NavbarLogo.css'
import logo from '../../assets/logoH.png'

const NavbarLogo = () => {
    return (
        <div className="pi__navbar-logo">
            <img src={logo} alt="logoH" />
            <h1>Videogames</h1>
        </div>
    )
}

export default NavbarLogo
