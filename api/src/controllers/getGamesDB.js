const { Videogame } = require('../db.js')

const getGamesDB = async () => {
    const gamesFromDB = await Videogame.findAll()

    const games = gamesFromDB.map(game => {
        return {
            id: game.id,
            name: game.name,
            released: game.releaseDate
        }
    })

    return games
}

module.exports = getGamesDB
