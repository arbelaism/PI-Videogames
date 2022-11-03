import { FILTER_BY_AZ, GET_ALL_GAMES, GET_GENRES, SEARCH_GAME } from '../actions/index'

const initialState = {
    games: [],
    genres: []
}

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_ALL_GAMES:
            return {
                ...state,
                games: [...action.payload]
            }
        case GET_GENRES:
            return {
                ...state,
                genres: [...action.payload]
            }
        case SEARCH_GAME:
            return {
                ...state,
                games: action.payload
            }
        case FILTER_BY_AZ:
            const sortedGames = state.games.sort((a, b) => {
                if (a.name < b.name) return action.payload === 'AZ' ? -1 : 1
                if (a.name > b.name) return action.payload === 'AZ' ? 1 : -1
                return 0
            })
            return {
                ...state,
                games: sortedGames
            }
        default:
            return state
    }
}
export default rootReducer
