import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
    filterGamesByName,
    filterGamesByRating,
    filterGamesByGenres,
    filterGamesBySource,
    clearFilters
} from '../../app/actions/index'
import './Filters.css'

const Filters = () => {
    const dispatch = useDispatch()
    const genres = useSelector(state => state.genres)
    const games = useSelector(state => state.games)

    const filterByRating = e => {
        e.preventDefault()
        dispatch(filterGamesByRating(e.target.value, games))
    }

    const filterAZ = e => {
        e.preventDefault()
        dispatch(filterGamesByName(e.target.value, games))
    }

    const filterByGenre = e => {
        e.preventDefault()
        dispatch(filterGamesByGenres(e.target.value, games))
    }

    const filterBySource = e => {
        e.preventDefault()
        dispatch(filterGamesBySource(e.target.value, games))
    }

    const handleClear = () => {
        const sourceFilterSelect = document.getElementById('filterBySource')
        const genreFilterSelect = document.getElementById('filterByGenre')
        const ratingFilterSelect = document.getElementById('filterByRating')
        const azFilterSelect = document.getElementById('filterByAZ')

        sourceFilterSelect.value = 'none'
        genreFilterSelect.value = 'none'
        ratingFilterSelect.value = 'none'
        azFilterSelect.value = 'none'

        dispatch(clearFilters(games))
    }

    return (
        <div className="pi__filters">
            <select
                name="filterBySource"
                id="filterBySource"
                className="pi__filters-select"
                onChange={filterBySource}>
                <option key="none" value="none">
                    Filter by Source
                </option>
                <option value="API">API</option>
                <option value="DB">DB</option>
            </select>
            <select
                name="filterByGenre"
                id="filterByGenre"
                className="pi__filters-select"
                onChange={filterByGenre}>
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
                onChange={filterByRating}>
                <option key="none" value="none" onClick={filterByRating}>
                    Filter by Rating
                </option>
                <option value="ratingAsc">Rating ASC</option>
                <option value="ratingDesc">Rating DESC</option>
            </select>
            <select
                name="filterByAZ"
                id="filterByAZ"
                className="pi__filters-select"
                onChange={filterAZ}>
                <option key="none" value="none">
                    Filter alphabetically
                </option>
                <option value="AZ">A-Z</option>
                <option value="ZA">Z-A</option>
            </select>
            <button onClick={handleClear}>CLEAR</button>
        </div>
    )
}

export default Filters
