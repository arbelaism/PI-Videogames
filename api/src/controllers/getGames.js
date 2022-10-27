const axios = require('axios')

const getGames = async apiKey => {
    if (!apiKey) throw new Error('APIKEY missing')

    try {
        let games = []
        let url = `https://api.rawg.io/api/games?key=${apiKey}`

        for (let index = 0; index < 6; index++) {
            let response = await axios.get(url)

            response.data.results.forEach(game => {
                games.push({
                    id: game['id'],
                    name: game['name'],
                    released: game['released'],
                    bg: game['background_image']
                })
            })

            url = response.data.next
        }
        return games
    } catch (error) {
        throw new Error(error)
    }
}

module.exports = getGames
