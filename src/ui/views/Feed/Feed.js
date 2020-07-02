import React from "react";
import { Text, View, StyleSheet } from "react-native"
import { Button } from 'react-native-elements';
import FeedAvatar from "./FeedAvatar";
//import GoogleSignIn from "./GoogleSignIn";

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

            { !user && <Text style={styles.loginText} >Please log in to continue.</Text> }
            
            { user 
                ? <Button title="Movies list" type="outline" raised onPress={this.onMoviesListPress} />
                : <Text>Sign in with google</Text>
                // : <GoogleSignIn />
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
        marginBottom: 24
    }
});

export default Feed