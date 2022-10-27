const axios = require('axios')

const getGameById = async (apiKey, id) => {
    if (!apiKey || !id) throw new Error('APIKEY or ID missing')

    try {
        let url = `https://api.rawg.io/api/games/${id}?key=${apiKey}`

        const response = await axios.get(url)

        return {
            id: response.data.id,
            name: response.data.name,
            description: response.data.description,
            released: response.data.released,
            rating: response.data.rating,
            bg: response.data['background_image']
        }
    } catch (error) {
        throw new Error('error in getGameById')
    }
}

module.exports = getGameById
