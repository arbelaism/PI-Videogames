import { createGame } from 'app/actions'
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import './Create.css'

const validate = input => {
    let errors = {}

    if (input.name === '') errors.name = 'Name is required'
    if (input.description === '') errors.description = 'Description is required'
    if (input.platforms.length < 1) errors.platforms = 'Platforms required'

    return errors
}

const Create = () => {
    const initialState = {
        name: '',
        description: '',
        releaseDate: '',
        rating: 0,
        genres: [],
        platforms: []
    }
    const [state, setState] = useState(initialState)
    const [errors, setErrors] = useState({})
    const [done, setDone] = useState(false)

    const genres = useSelector(state => state.genres)
    const platforms = useSelector(state => state.platforms)
    const dispatch = useDispatch()

    const handleInput = e => {
        setErrors(
            validate({
                ...state,
                [e.target.name]: e.target.value
            })
        )
        setState({
            ...state,
            [e.target.name]: e.target.value
        })
    }

    const handleGenres = e => {
        setErrors(
            validate({
                ...state,
                genres: e.target.value
            })
        )
        if (!state.genres.includes(e.target.value)) {
            setState({
                ...state,
                genres: [...state.genres, e.target.value]
            })
        }
    }
    const handlePlatforms = e => {
        setErrors(
            validate({
                ...state,
                platforms: e.target.value
            })
        )
        if (!state.platforms.includes(e.target.value)) {
            setState({
                ...state,
                platforms: [...state.platforms, e.target.value]
            })
        }
    }

    const handleSubmit = e => {
        e.preventDefault()
        dispatch(createGame(state))
        setErrors({})
        setState(initialState)
        setDone(true)
    }

    return (
        <div className="pi__create">
            <h1>Create New Game</h1>
            <form onSubmit={handleSubmit}>
                <label htmlFor="name">Name</label>
                <input
                    type="text"
                    name="name"
                    value={state.name}
                    onChange={handleInput}
                />
                <label htmlFor="releaseDate">Release Date</label>
                <input
                    type="date"
                    name="releaseDate"
                    value={state.releaseDate}
                    onChange={handleInput}
                />
                <label htmlFor="rating">Rating</label>
                <input
                    type="number"
                    name="rating"
                    value={state.rating}
                    onChange={handleInput}
                />
                <label htmlFor="platforms">Platforms</label>
                <select name="platforms" onChange={handlePlatforms}>
                    <option key="none" value="none">
                        Select a Platform
                    </option>
                    {platforms &&
                        platforms.map(platform => {
                            return (
                                <option key={platform.id} value={platform.name}>
                                    {platform.name}
                                </option>
                            )
                        })}
                </select>
                <label htmlFor="genres">Genres</label>
                <select name="genres" onChange={handleGenres}>
                    <option key="none" value="none">
                        Select a Genre
                    </option>
                    {genres &&
                        genres.map(genre => {
                            return (
                                <option key={genre.id} value={genre.name}>
                                    {genre.name}
                                </option>
                            )
                        })}
                </select>
                <label htmlFor="description">Description</label>
                <textarea
                    name="description"
                    cols="20"
                    rows="5"
                    value={state.description}
                    onChange={handleInput}></textarea>
                <button type="submit">CREAR</button>
            </form>
            {done && <h1>Videogame created</h1>}
        </div>
    )
}

export default Create
