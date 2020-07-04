import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Button } from 'react-native-elements';
import { connect } from 'react-redux';
import FeedAvatar from "./FeedAvatar";
import GoogleSignIn from '../../components/GoogleSignIn';

class Feed extends React.Component {
    onMoviesListPress = () => {
        this.props.navigation.navigate('movies')
    }

    render(){
        const { user } = this.props;

        const welcomName = user ? user.name : "Stranger!"

        return <View style={styles.container}>
            <Text style={styles.welcomText} >Welcom {welcomName}</Text>

            <FeedAvatar user={user} />
            
            { user 
                ? <Button title="Movies list" type="outline" raised onPress={this.onMoviesListPress} />
                : <View  style={styles.loginContainer} >
                    <Text style={styles.loginText} >Please log in to continue.</Text>
                    <GoogleSignIn />
                </View>
            }
        </View>
    }
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center', justifyContent: 'center', padding: 16, flex: 1
    },
    welcomText: {
        fontSize: 24
    },
    loginText: {
        fontSize: 16,
    },
    loginContainer: {
        alignItems: 'center'
    }
});

const mapStateToProps = state => ({
    user: state.userData.user,
});

export default connect(mapStateToProps)(Feed)