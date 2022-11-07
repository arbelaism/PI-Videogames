import React from 'react'
import { Link } from 'react-router-dom'
import './GameCard.css'

const GameCard = ({ id, name, released, bg, rating, genres }) => {
    return (
        <div className="pi__game_card">
            <img src={bg} alt="game-background" className="pi__game_card-img" />
            <Link to={`/game/${id}`}>
                <h3>{name}</h3>
            </Link>
            <p>{released}</p>
            <p>{rating}</p>
            <ul>
                {genres &&
                    genres.map(g => {
                        return <li key={g.id}>{g.name}</li>
                    })}
            </ul>
        </div>
    )
}

export default GameCard
