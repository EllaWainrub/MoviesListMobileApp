import { combineReducers } from 'redux'
import favorites from './favoritesReducer'
import userReducer from './userReducer'

export default combineReducers({
    favorites,
    userData: userReducer
})