import React from 'react'
import './Navbar.css'
import logo from '../../assets/logoH.png'
import { SearchBar, Filters } from '../index'

const Navbar = () => {
    return (
        <div className="pi__navbar">
            <div className="pi__navbar-logo">
                <img src={logo} alt="logoH" />
                <h1>Videogames</h1>
            </div>
            <div className="pi__navbar-form">
                <SearchBar />
                <Filters />
            </div>
        </div>
    )
}

export default Navbar
