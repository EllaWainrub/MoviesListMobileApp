import React from "react";
import { View } from 'react-native';
import MoviesHeader from "../../components/MoviesHeader";
import { getPopularMoviesFromApi } from "./moviesUtils";
import MoviesList from "../../components/MoviesList";

class MoviesListView extends React.Component {
    state = {
        page: 1,
        movies: []
    }

    componentDidMount() {
        const { page } = this.state;

        getPopularMoviesFromApi(page).then((response) => {
            this.setState({ movies: response.results })
        })
    }

    goBack = () => this.props.navigation.goBack();

    render(){
        const { movies } = this.state;

        return <View style={{ flex: 1 }}>
            <MoviesHeader 
                title="Most Popular Movies" 
                leftIcon="navigate-before" 
                onLeftComponentPress={this.goBack}
            />

            <MoviesList movies={movies} />
        </View>
    }
}

export default MoviesListView