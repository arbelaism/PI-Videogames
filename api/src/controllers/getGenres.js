const axios = require('axios')

const getGenres = async apiKey => {
    if (!apiKey) throw new Error('API KEY MISSING')

    try {
        let genres = []
        let url = `https://api.rawg.io/api/genres?key=${apiKey}`

        const response = await axios.get(url)

        response.data.results.forEach(genre => {
            genres.push({
                id: genre.id,
                genre: genre.name
            })
        })

        return genres
    } catch (error) {
        throw new Error('error in getGenres')
    }
}

module.exports = getGenres
