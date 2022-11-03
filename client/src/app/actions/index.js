import axios from 'axios'

export const GET_ALL_GAMES = 'GET_ALL_GAMES'
export const GET_GAME_DETAIL = 'GET_GAME_DETAIL'
export const GET_GENRES = 'GET_GENRES'
export const SEARCH_GAME = 'SEARCH_GAME'
export const FILTER_BY_AZ = 'FILTER_BY_AZ'
export const CREATE_GAME = 'CREATE_GAME'

export const getAllGames = () => {
    return async function (dispatch) {
        const response = await axios.get('http://localhost:3001/videogames')

        return dispatch({
            type: GET_ALL_GAMES,
            payload: response.data
        })
    }
}

export const getGenres = () => {
    return async function (dispatch) {
        const response = await axios.get('http://localhost:3001/genres')

        return dispatch({
            type: GET_GENRES,
            payload: response.data
        })
    }
}

export const searchGame = name => {
    return async function (dispatch) {
        const response = await axios.get(`http://localhost:3001/videogames?name=${name}`)

        return dispatch({
            type: SEARCH_GAME,
            payload: response.data
        })
    }
}

export const filterGamesByName = sort => {
    return {
        type: FILTER_BY_AZ,
        payload: sort
    }
}
