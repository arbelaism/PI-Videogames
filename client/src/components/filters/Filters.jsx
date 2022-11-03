import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getGenres, filterGamesByName } from '../../app/actions/index'
import './Filters.css'

const Filters = () => {
    const dispatch = useDispatch()
    const genres = useSelector(state => state.genres)

    useEffect(() => {
        dispatch(getGenres())
    }, [])

    const filterAZ = e => {
        e.preventDefault()
        dispatch(filterGamesByName(e.target.value))
    }

    return (
        <div className="pi__filters">
            <select name="filterByGenre" id="genres" className="pi__filters-select">
                <option key="none" value="none">
                    Filter by Genres
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
            <select name="filterByRating" id="filterByRating" className="pi__filters-select">
                <option key="none" value="none">
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
        </div>
    )
}

export default Filters
