import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../../assets/logo.png'
import StarIcon from '../../assets/star-solid.svg'
import './GameCard.css'

const GameCard = ({ id, name, bg, rating, genres, db }) => {
    return (
        <div className="pi__game_card">
            <img
                src={bg ? bg : logo}
                alt="game-background"
                className="pi__game_card-img"
            />
            <div className="pi__game_card-content">
                <Link to={`/game/${id}?db=${db}`}>{name}</Link>
                <ul>
                    {genres &&
                        genres?.map(g => {
                            return <li key={g.id}>{g.name}</li>
                        })}
                </ul>
                <div className="pi__game_card-rating">
                    <img src={StarIcon} alt="star" />
                    <p>{rating}</p>
                </div>
            </div>
        </div>
    )
}

export default GameCard
