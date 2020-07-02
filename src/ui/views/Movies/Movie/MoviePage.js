import React from "react";
import { View, ActivityIndicator } from "react-native";
import MoviesHeader from "../../../components/MoviesHeader";
import { getMovieDetailsFromApi } from "../moviesUtils";
import MovieContent from "./MovieContent";

class MoviePage extends React.Component {
    state = {
        movie: {},
        isLoading: true
    }

    componentDidMount(){
        const movieId = this.props.navigation.state.params.movieId

        getMovieDetailsFromApi(movieId).then(res => {
            this.setState({ movie: res, isLoading: false })
        })
    }

    goBack = () => this.props.navigation.goBack();

    render(){
        const { navigation } = this.props;
        const { title } = navigation.state.params;
        const { isLoading, movie } = this.state;

        return <View style={{ flex: 1 }}>
            <MoviesHeader
                title={title}
                leftIcon="navigate-before" 
                onLeftComponentPress={this.goBack}
            />

            {isLoading 
                ? <ActivityIndicator size="large" color="#0000ff" style={{ marginTop: 16 }} />
                : <MovieContent movie={movie} />
            }

        </View>
    }
}

export default MoviePage