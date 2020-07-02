import React from 'react'
import { Image } from 'react-native'

const MoviePoster = props => (
    <Image
        style={props.style}
        source={{ uri: "https://image.tmdb.org/t/p/w500/"+props.posterPath }} 
    />
)

export default MoviePoster