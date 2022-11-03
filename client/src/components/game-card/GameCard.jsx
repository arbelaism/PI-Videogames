import React from 'react'
import { Link } from 'react-router-dom'
import './GameCard.css'

const GameCard = ({ id, name, released, bg }) => {
    return (
        <div className="pi__game_card">
            <img src={bg} alt="game-background" className="pi__game_card-img" />
            <Link to="/">
                <h3>{name}</h3>
            </Link>
            <p>{released}</p>
        </div>
    )
}

export default GameCard
