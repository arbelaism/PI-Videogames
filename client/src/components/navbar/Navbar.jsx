import React from 'react'
import './Navbar.css'
import logo from '../../assets/logoH.png'
import { SearchBar, Filters } from '../index'
import { useDispatch } from 'react-redux'
import { clearFilters } from '../../app/actions'
import { Link } from 'react-router-dom'

const Navbar = () => {
    const dispatch = useDispatch()

    const handleClear = () => {
        dispatch(clearFilters())
    }
    return (
        <div className="pi__navbar">
            <div className="pi__navbar-head">
                <Link to="/home">
                    <div className="pi__navbar-logo">
                        <img src={logo} alt="logoH" />
                        <h1>Videogames</h1>
                    </div>
                </Link>
                <SearchBar />
                <div className="pi__navbar-head_buttons">
                    <button onClick={handleClear}>CLEAR</button>
                    <Link to="/create">
                        <button>ADD</button>
                    </Link>
                </div>
            </div>
            <div className="pi__navbar-form">
                <Filters />
            </div>
        </div>
    )
}

export default Navbar
