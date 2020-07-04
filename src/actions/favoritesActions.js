export const ADD_MOVIE = 'ADD_MOVIE'
export const REMOVE_MOVIE = 'REMOVE_MOVIE'

export const addMovie = movieId => ({
    type: ADD_MOVIE,
    movieId
})

export const removeMovie = movieId => ({
    type: REMOVE_MOVIE,
    movieId
})