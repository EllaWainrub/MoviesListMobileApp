import React from 'react'
import { ScrollView, View } from 'react-native'
import MovieListItem from './MovieListItem'

const MoviesList = props => (
    <ScrollView >
        {props.movies.map( movie => {
            return <View key={movie.id}>
                <MovieListItem movie={movie} />
            </View>
        })}
    </ScrollView>
)

export default MoviesList