import React from "react";
import { connect } from 'react-redux';
import { addMovie } from "../../../actions";
import FavoritesView from "./FavoritesView";

const AddToFavorites = props => {
    const { containerStyles, short, iconColor } = props;

    const onAddToFavoritesPress = () => {
        const { movieId, addMovie } = props;
    
        addMovie(movieId)
    }

    return <FavoritesView
        icon="favorite-border"
        onPress={onAddToFavoritesPress}
        text="Add to favorites"
        short={short}
        containerStyles={containerStyles}
        iconColor={iconColor}
    />  
}

const mapDispatchToProps = (dispatch) => ({
    addMovie: (movieId) => dispatch(addMovie(movieId)),
})

export default connect(null, mapDispatchToProps)(AddToFavorites)