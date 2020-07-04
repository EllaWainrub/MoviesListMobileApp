const apiUrl = "https://api.themoviedb.org/3/movie"
const apiKey = "407ce67dd9fc838aaf2e88177b591916"

export function getPopularMoviesFromApi(page) {
    return fetch(`${apiUrl}/popular?api_key=${apiKey}&page=${page}`)
      .then((response) => response.json())
      .catch((error) => {
        console.error(error);
      });
}

export function getMovieDetailsFromApi(movieId) {
    return fetch(`${apiUrl}/${movieId}?api_key=${apiKey}`)
      .then((response) => response.json())
      .catch((error) => {
        console.error(error);
      });
}

export function getMoviesByIdFromApi(moviesIds) {
  const promises = []

  moviesIds.forEach( movieId => promises.push(getMovieDetailsFromApi(movieId)))

  return Promise.all(promises)
}