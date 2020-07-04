import { ADD_MOVIE, REMOVE_MOVIE } from "../actions"

const favoritesReducer = (state = [], action) => {
    switch (action.type) {
        case ADD_MOVIE:
            return [
                ...state,
                action.movieId
            ]
        case REMOVE_MOVIE:
            return state.filter( f => f !== action.movieId)
      default:
        return state
    }
  }
  
  export default favoritesReducer