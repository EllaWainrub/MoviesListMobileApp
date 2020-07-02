export const addMovie = movieId => ({
    type: 'ADD_MOVIE',
    movieId
})

export const removeMovie = movieId => ({
    type: 'REMOVE_MOVIE',
    movieId
})