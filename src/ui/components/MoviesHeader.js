import React from "react";
import { Header, Badge, Icon } from 'react-native-elements'
import { StyleSheet, View } from "react-native";
import { connect } from 'react-redux';
import FavoritesModal from "./Favorites/FavoritesModal";

class MoviesHeader extends React.Component {
    state = {
        isFavoritesOpen: false
    }

    openFavorites = () => this.setState({ isFavoritesOpen: true })
    closeFavorites = () => this.setState({ isFavoritesOpen: false })

    render(){
        const { leftIcon, title, onLeftComponentPress, favorites } = this.props;
        const { isFavoritesOpen } = this.state
    
        const rightComponent = <View style={styles.rightComponentContainer} >
            <Icon name="favorite" onPress={this.openFavorites} />

            <Badge
                value={favorites.length}
                containerStyle={styles.badgeContainerStyle}
                badgeStyle={styles.badgeStyle}
            />
        </View>

        return <View>
            <Header 
                backgroundColor={"white"} 
                containerStyle={{ paddingTop: 0 }} 
                leftComponent={{ icon: leftIcon, color: '#000', onPress: onLeftComponentPress }} 
                rightComponent={rightComponent} 
                centerComponent={{ text: title }}
            />
            {isFavoritesOpen && <FavoritesModal isVisible={isFavoritesOpen} onBackdropPress={this.closeFavorites} />}
        </View>
    }
}

const mapStateToProps = (state) => ({
    favorites: state.favorites
})

const styles = StyleSheet.create({
    rightComponentContainer: {
        marginRight: 14
    },
    badgeContainerStyle: {
        position: 'absolute', top: -5, right: -12
    },
    badgeStyle: {
        backgroundColor: '#ef47b6'
    }
})

export default connect(mapStateToProps)(MoviesHeader)