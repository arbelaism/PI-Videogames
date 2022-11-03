import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { searchGame } from '../../app/actions/index'
import './SearchBar.css'

const SearchBar = () => {
    const [game, setGame] = useState('')
    const dispatch = useDispatch()

    const handleSearch = e => {
        e.preventDefault()
        dispatch(searchGame(game))
        setGame('')
    }

    const onChangeInput = e => {
        setGame(e.target.value.toLowerCase())
    }

    return (
        <div className="pi__search">
            <form onSubmit={handleSearch}>
                <input
                    type="text"
                    placeholder="Search..."
                    onChange={onChangeInput}
                    name="name"
                    value={game}
                />
                <button type="submit">Search</button>
            </form>
        </div>
    )
}

export default SearchBar
