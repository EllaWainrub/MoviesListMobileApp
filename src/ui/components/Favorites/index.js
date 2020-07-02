import React from "react";
import { connect } from 'react-redux';
import AddToFavorites from "./AddToFavorites";
import RemoveFromFavorites from "./RemoveFromFavorites";

const Favorites = props => {
    const { containerStyles, short, iconColor, favorites, movieId } = props;

    const isFavorite = favorites.find( f => f === movieId)

    return isFavorite 
        ? <RemoveFromFavorites 
            movieId={movieId} 
            containerStyles={containerStyles} 
            short={short} 
            iconColor={iconColor} 
        />
        : <AddToFavorites 
            movieId={movieId} 
            containerStyles={containerStyles} 
            short={short} 
            iconColor={iconColor} 
        />
}

const mapStateToProps = (state) => ({
    favorites: state.favorites
})

export default connect(mapStateToProps)(Favorites)