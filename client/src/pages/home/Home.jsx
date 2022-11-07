import React, { useEffect, useState } from 'react'
import './Home.css'
import { GameCard, Navbar, Pagination, Loader } from '../../components/index'
import * as actions from '../../app/actions/index'
import { useDispatch, useSelector } from 'react-redux'

const Home = () => {
    const [currentPage, setCurrentPage] = useState(1)
    const [cardsPerPage, setCardsPerPage] = useState(12)
    const [loading, setLoading] = useState(false)

    const dispatch = useDispatch()
    const games = useSelector(state => state.games)
    const gamesSorted = useSelector(state => state.gamesSorted)

    useEffect(() => {
        setLoading(true)
        dispatch(actions.getAllGames())
        dispatch(actions.getGenres())
        dispatch(actions.getPlatforms())
        setTimeout(() => {
            setLoading(false)
        }, 2500)
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
        <div className="pi__home">
            <div className="pi__home-navbar">
                <Navbar />
            </div>
            <div className="pi__home-container">
                <h3>Games</h3>
                <div className="pi__home-games">
                    {loading ? (
                        <Loader />
                    ) : gamesSorted.length > 0 ? (
                        currentCards.map(game => {
                            return (
                                <GameCard
                                    key={game.id}
                                    id={game.id}
                                    name={game.name}
                                    bg={game.bg}
                                    rating={game.rating}
                                    released={game.released}
                                    genres={game.genres}
                                />
                            )
                        })
                    ) : (
                        games &&
                        currentCards.map(game => {
                            return (
                                <GameCard
                                    key={game.id}
                                    id={game.id}
                                    name={game.name}
                                    bg={game.bg}
                                    rating={game.rating}
                                    released={game.released}
                                    genres={game.genres}
                                />
                            )
                        })
                    )}
                </div>
            </div>
            {gamesSorted.length > 0 ? (
                <Pagination
                    totalCards={gamesSorted.length}
                    cardsPerPage={cardsPerPage}
                    setCurrentPage={setCurrentPage}
                />
            ) : (
                <Pagination
                    totalCards={games.length}
                    cardsPerPage={cardsPerPage}
                    setCurrentPage={setCurrentPage}
                />
            )}
        </div>
    )
}

export default Home
