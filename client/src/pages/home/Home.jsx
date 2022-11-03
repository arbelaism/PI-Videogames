import React, { useEffect } from 'react'
import './Home.css'
import { GameCard, Navbar } from '../../components/index'
import * as actions from '../../app/actions/index'
import { useDispatch, useSelector } from 'react-redux'

const Home = () => {
    const dispatch = useDispatch()
    const games = useSelector(state => state.games)

    useEffect(() => {
        dispatch(actions.getAllGames())
    }, [])

    return (
        <div className="pi__home">
            <div className="pi__home-navbar">
                <Navbar />
            </div>
            <div className="pi__home-container">
                <h3>Games</h3>
                <div className="pi__home-games">
                    {games &&
                        games.map(game => {
                            return (
                                <GameCard
                                    key={game.id}
                                    id={game.id}
                                    name={game.name}
                                    bg={game.bg}
                                    released={game.released}
                                />
                            )
                        })}
                </div>
            </div>
        </div>
    )
}

export default Home
