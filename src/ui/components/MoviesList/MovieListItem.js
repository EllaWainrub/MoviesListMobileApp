import React from "react";
import { Text, TouchableOpacity, StyleSheet } from 'react-native';
import { withNavigation } from 'react-navigation';
import { Card, ListItem } from "react-native-elements";
import Favorites from "../Favorites";
import MoviePoster from "../MoviePoster";

class MoviesListItem extends React.Component {
    onMoviePress = () => {
        const { navigation, movie } = this.props;

        navigation.navigate("movie", { movieId: movie.id, title: movie.title })
    }

    render(){
        const { movie } = this.props;
        const { poster_path, title, overview, id } = movie;

        return <TouchableOpacity onPress={this.onMoviePress}>
            <Card containerStyle={styles.cardContainerStyle}>
                <ListItem  
                    containerStyle={styles.listItemContainerStyle}
                    titleStyle={styles.title}
                    title={title}
                    rightElement={<Favorites iconColor='#8A8A8A' short movieId={id} />}
                    subtitle={<Text numberOfLines={2} >{overview}</Text>}
                    leftElement={<MoviePoster style={styles.moviePoster} posterPath={poster_path} />}
                />
            </Card>
        </TouchableOpacity>
    }
}

const styles = StyleSheet.create({
    moviePoster: {
        height: 120, resizeMode: "contain", width: 80
    },
    cardContainerStyle: {
        padding: 16, margin: 16
    },
    listItemContainerStyle: {
        padding: 0
    },
    title: {
        marginBottom: 12
    }
});

export default withNavigation(MoviesListItem)