import * as Google from 'expo-google-app-auth';
import React from 'react';
import { Dimensions, Image, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import { saveUserToken } from '../../actions';

class MyGoogleSignIn extends React.Component {
    signInAsync = async () => {
        try {
            const result = await Google.logInAsync({
                iosClientId: '492456680139-uj7kj71m7l3cv2f0avpsk8k1fcsri5u5.apps.googleusercontent.com',
                scopes: ['profile', 'email']
            })

            if(result.type === 'success'){
                this.props.saveUserToken(result)
            }
        } 
        catch ({ message }) {
            alert('login: Error:' + message);
        }
    };

    render() {
        return <TouchableOpacity onPress={this.signInAsync} >
            <Image source={require('../../../assets/GoogleSignIn.png')} style={{ width: Dimensions.get("screen").width*0.8, resizeMode: 'contain' }} />
        </TouchableOpacity>
    }      
}

const mapStateToProps = state => ({
    user: state.userData.user,
});


const mapDispatchToProps = dispatch => ({
    saveUserToken: (result) => dispatch(saveUserToken(result)),
});

export default connect(mapStateToProps, mapDispatchToProps)(MyGoogleSignIn)