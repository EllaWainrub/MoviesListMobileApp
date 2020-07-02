import React from "react";
import { Dimensions, Text, View } from "react-native";
import { Overlay } from 'react-native-elements';
import { connect } from 'react-redux';
import MoviesList from "../MoviesList";
import { getMoviesByIdFromApi } from "../../views/Movies/moviesUtils";

class FavoritesModal extends React.Component {
    state = {
        results: []
    }
    
    getFavoritesMovies = () => {
        getMoviesByIdFromApi(this.props.favorites).then( responces => {
            this.setState({ results: responces })
        })
    }

    componentDidMount(){
        this.getFavoritesMovies()
    }

    componentDidUpdate(prevProps){
        const { favorites: prevFavorites} = prevProps;
        const { favorites } = this.props;

        if(prevFavorites.length !== favorites.length 
            || prevFavorites.some((value, index) => value !== favorites[index])){
            this.getFavoritesMovies()
        }
    }

    render(){
        const { isVisible, onBackdropPress } = this.props;

        return <Overlay 
            isVisible={isVisible} 
            onBackdropPress={onBackdropPress}
            overlayStyle={{ overflow: 'hidden', width: Dimensions.get("screen").width * 0.8, height: Dimensions.get("screen").height * 0.8 }}
        >
            <View>
                <Text style={{ textAlign: 'center', fontWeight: '500', fontSize: 16 }}>Favorites Movies</Text>
                <MoviesList movies={this.state.results} />
            </View>
        </Overlay>
    }
}

const mapStateToProps = (state) => ({
    favorites: state.favorites
})

export default connect(mapStateToProps)(FavoritesModal)