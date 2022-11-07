import {
    CLEAR_FILTER,
    CREATE_GAME,
    FILTER_BY_AZ,
    FILTER_BY_GENRE,
    FILTER_BY_RATING,
    FILTER_BY_SOURCE,
    GET_ALL_GAMES,
    GET_GENRES,
    GET_PLATFORMS,
    SEARCH_GAME
} from '../actions/index'

const initialState = {
    games: [],
    gamesSorted: [],
    genres: [],
    platforms: []
}

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_ALL_GAMES:
            return {
                ...state,
                games: [...action.payload]
            }
        case CREATE_GAME:
            return {
                ...state,
                games: [...state.games, action.payload]
            }
        case GET_GENRES:
            return {
                ...state,
                genres: [...action.payload]
            }
        case GET_PLATFORMS:
            return {
                ...state,
                platforms: [...action.payload]
            }
        case SEARCH_GAME:
            return {
                ...state,
                games: action.payload
            }
        case FILTER_BY_AZ:
            return {
                ...state,
                gamesSorted: [...action.payload]
            }
        case FILTER_BY_RATING:
            return {
                ...state,
                gamesSorted: [...action.payload]
            }
        case FILTER_BY_GENRE:
            return {
                ...state,
                gamesSorted: [...action.payload]
            }
        case FILTER_BY_SOURCE:
            return {
                ...state,
                gamesSorted: [...action.payload]
            }
        case CLEAR_FILTER:
            return {
                ...state,
                gamesSorted: action.payload
            }
        default:
            return state
    }
}
export default rootReducer
