require('dotenv').config()

const { Router } = require('express')
const { API_KEY } = process.env
const getGames = require('../controllers/getGames')
const searchGame = require('../controllers/searchGame')
const getGenres = require('../controllers/getGenres')
const getGameById = require('../controllers/getGameById')
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');

const router = Router()

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

router.get('/api/games', async (req, res) => {
    const { search } = req.query

    try {
        if (search) {
            const searchGameByName = await searchGame(API_KEY, search)
            res.json(searchGameByName)
            return
        } else {
            const response = await getGames(API_KEY)
            res.json(response)
        }
    } catch (error) {
        res.json({ err: error.message })
    }
})

router.get('/api/games/:id', async (req, res) => {
    const { id } = req.params

    try {
        const gameFounded = await getGameById(API_KEY, id)
        res.json(gameFounded)
    } catch (error) {
        res.json({ err: error.message })
    }
})

router.get('/api/genres', async (req, res) => {
    try {
        const response = await getGenres(API_KEY)
        res.json(response)
    } catch (error) {
        res.json({ err: error.message })
    }
})

module.exports = router
