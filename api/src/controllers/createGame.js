const { Videogame, Genre } = require('../db.js')

const createGame = async (name, description, image, releaseDate, rating, genres, platforms) => {
    if (!name) throw new Error('name missing')
    if (!description) throw new Error('description missing')
    if (!platforms) throw new Error('platforms missing')

    const newGame = await Videogame.create({
        name,
        description,
        image,
        releaseDate,
        rating,
        platforms
    })

    if (genres.length) {
        genres.map(async genre => {
            let g = await Genre.findOrCreate({
                where: { name: genre.toLowerCase() }
            })

            newGame.addGenre(g[0])
        })
    }

    return newGame
}

module.exports = createGame
