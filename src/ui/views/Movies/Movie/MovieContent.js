import React from "react";
import { View, Text, StyleSheet } from "react-native";
import MoviePoster from "../../../components/MoviePoster";
import MovieRate from "./MovieRate";
import Favorites from "../../../components/Favorites";

class MovieContent extends React.Component {
    render(){
        const { movie } = this.props;
        const { poster_path, title, release_date, overview, vote_average, id } = movie;

        const movieYear = new Date(release_date).getFullYear()

        return <View style={styles.container}>
            <MoviePoster style={styles.moviePoster} posterPath={poster_path} />
            <Text style={styles.title}>{title} <Text style={styles.movieYear}>({movieYear})</Text></Text>

            <View style={styles.centerContainer}>
                <MovieRate voteAverage={vote_average} containerStyles={styles.movieRateContainer} />
                <Favorites containerStyles={styles.addToFavorites} movieId={id} />
            </View>

            <Text style={styles.overview} >Overview</Text>
            <Text>{overview}</Text>
        </View>
    }
}

const styles = StyleSheet.create({
    moviePoster: {
        height: 250, resizeMode: "contain", marginBottom: 16
    },
    container: {
        flex: 1, 
        padding: 16
    },
    title: {
        fontSize: 16, textAlign: 'center'
    },
    movieYear: { 
        fontSize: 14, color: '#8A8A8A' 
    },
    overview: {
        fontSize: 16,
        lineHeight: 24,
        fontWeight: '500'
    },
    overviewText: {
        fontSize: 14,
        lineHeight: 24
    },
    centerContainer: {
        marginTop: 16, marginBottom: 16, flexDirection: 'row', alignItems: 'center'
    },
    movieRateContainer: {
        justifyContent: 'center', flex: 1, borderRightWidth: 1, borderColor: '#8A8A8A'
    },
    addToFavorites: {
        justifyContent: 'center', flex: 1
    }
});

export default MovieContent