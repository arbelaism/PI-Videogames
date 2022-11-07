const { Videogame, Genre, Platform } = require('../db.js')

const getGamesDB = async () => {
    const gamesFromDB = await Videogame.findAll()

    // const genres = gamesFromDB.getGenre()
    const games = gamesFromDB.map(game => {
        return {
            id: game.id,
            name: game.name,
            description: game.description,
            released: game.releaseDate,
            rating: game.rating,
            createdByUser: game.createdByUser
        }
    })

    return games
}

module.exports = getGamesDB
