import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
    getGenres,
    filterGamesByName,
    filterGamesByRating,
    filterGamesByGenres,
    filterGamesBySource
} from '../../app/actions/index'
import './Filters.css'

const Filters = () => {
    const [order, setOrder] = useState('')
    const dispatch = useDispatch()
    const genres = useSelector(state => state.genres)
    const games = useSelector(state => state.games)

    useEffect(() => {
        dispatch(getGenres())
    }, [])

    const handleState = e => {
        setOrder(e.target.value)
    }

    const filterByRating = e => {
        e.preventDefault()
        dispatch(filterGamesByRating(order, games))
        setOrder('')
    }

    const filterAZ = e => {
        e.preventDefault()
        dispatch(filterGamesByName(order, games))
        setOrder('')
    }

    const filterByGenre = e => {
        e.preventDefault()
        dispatch(filterGamesByGenres(order, games))
        setOrder('')
    }

    const filterBySource = e => {
        e.preventDefault()
        dispatch(filterGamesBySource(order, games))
        setOrder('')
    }

    return (
        <div className="pi__filters">
            <select
                name="filterBySource"
                id="filterBySource"
                className="pi__filters-select"
                onChange={handleState}>
                <option key="none" value="none">
                    Filter by Source
                </option>
                <option value="API" onClick={filterBySource}>
                    API
                </option>
                <option value="DB" onClick={filterBySource}>
                    DB
                </option>
            </select>
            <select
                name="filterByGenre"
                id="genres"
                className="pi__filters-select"
                onChange={handleState}>
                <option key="none" value="none">
                    Filter by Genres
                </option>
                {genres &&
                    genres.map(genre => {
                        return (
                            <option
                                key={genre.id}
                                value={genre.name}
                                onClick={filterByGenre}>
                                {genre.name}
                            </option>
                        )
                    })}
            </select>
            <select
                name="filterByRating"
                id="filterByRating"
                className="pi__filters-select"
                onChange={handleState}>
                <option key="none" value="none">
                    Filter by Rating
                </option>
                <option value="ratingAsc" onClick={filterByRating}>
                    Rating ASC
                </option>
                <option value="ratingDesc" onClick={filterByRating}>
                    Rating DESC
                </option>
            </select>
            <select
                name="filterByAZ"
                id="filterByAZ"
                className="pi__filters-select"
                onChange={handleState}>
                <option key="none" value="none">
                    Filter alphabetically
                </option>
                <option value="AZ" onClick={filterAZ}>
                    A-Z
                </option>
                <option value="ZA" onClick={filterAZ}>
                    Z-A
                </option>
            </select>
        </div>
    )
}

export default Filters
