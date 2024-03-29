import React, { useEffect, useState } from 'react'
import './Home.css'
import {
    GameCard,
    Navbar,
    Pagination,
    Loader,
    ErrorHandler
} from '../../components/index'
import * as actions from '../../app/actions/index'
import { useDispatch, useSelector } from 'react-redux'

const Home = () => {
    const [currentPage, setCurrentPage] = useState(1)
    const [cardsPerPage, setCardsPerPage] = useState(12)

    const dispatch = useDispatch()
    const games = useSelector(state => state.games)
    const gamesSorted = useSelector(state => state.gamesSorted)
    const error = useSelector(state => state.error)

    useEffect(() => {
        dispatch(actions.getAllGames())
        dispatch(actions.getGenres())
        dispatch(actions.getPlatforms())
    }, [])

    const lastCardIndex = currentPage * cardsPerPage
    const firstCardIndex = lastCardIndex - cardsPerPage
    let currentCards
    if (gamesSorted.length > 0) {
        currentCards = gamesSorted.slice(firstCardIndex, lastCardIndex)
    } else {
        currentCards = games.slice(firstCardIndex, lastCardIndex)
    }

    return (
        <div className="pi__home section__padding">
            <div className="pi__home-navbar">
                <Navbar
                    setCurrentPage={setCurrentPage}
                />
            </div>
            <div className="pi__home-container">
                <div className="pi__home-games">
                    {currentCards.length < 1 ? (
                        <Loader />
                    ) : error.length ? (
                        <ErrorHandler error={error} />
                    ) : (
                        currentCards?.map(game => {
                            return (
                                <GameCard
                                    key={game.id}
                                    id={game.id}
                                    name={game.name}
                                    bg={game.bg}
                                    rating={game.rating}
                                    genres={game.genres}
                                    db={
                                        game.createdByUser === undefined
                                            ? false
                                            : true
                                    }
                                />
                            )
                        })
                    )}
                </div>
            </div>
            {!error.length && (
                <Pagination
                    totalCards={
                        gamesSorted.length > 0
                            ? gamesSorted.length
                            : games.length
                    }
                    cardsPerPage={cardsPerPage}
                    setCurrentPage={setCurrentPage}
                />
            )}
        </div>
    )
}

export default Home
