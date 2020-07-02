import React from "react";
import { connect } from 'react-redux';
import { removeMovie } from "../../../actions";
import FavoritesView from "./FavoritesView";

const RemoveFromFavorites = props => {
    const { containerStyles, short, iconColor } = props;

    const onRemoveFromFavoritesPress = () => {
        const { movieId, removeMovie } = props;
    
        removeMovie(movieId)
    }

    return <FavoritesView
        icon="favorite"
        onPress={onRemoveFromFavoritesPress}
        text="Remove from favorites"
        short={short}
        containerStyles={containerStyles}
        iconColor={iconColor}
    />  
}

const mapDispatchToProps = (dispatch) => ({
    removeMovie: (movieId) => dispatch(removeMovie(movieId))
})

export default connect(null, mapDispatchToProps)(RemoveFromFavorites)