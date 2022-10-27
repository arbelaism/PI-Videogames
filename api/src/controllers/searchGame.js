const axios = require('axios')

const searchGame = async (apiKey, game) => {
    if (!apiKey || !game) throw new Error('APIKEY or ID missing')

    try {
        let url = `https://api.rawg.io/api/games?key=${apiKey}&search=${game}`

        const response = await axios.get(url)
        const gamesFound = await response.data

        const games = gamesFound.results.map(game => {
            return {
                id: game.id,
                name: game.name,
                released: game.released,
                rating: game.rating
            }
        })

        return games
    } catch (error) {
        throw new Error('error in searchGame')
    }
}

module.exports = searchGame
