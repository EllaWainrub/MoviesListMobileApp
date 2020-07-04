import { AsyncStorage } from 'react-native';

export const SAVE_USER = 'SAVE_USER'
export const REMOVE_USER = 'REMOVE_USER'
export const LOADING_USER = 'LOADING_USER'
export const ERROR_USER = 'ERROR_USER'
export const GET_TOKEN = 'GET_TOKEN'

export const saveUser = user => ({
    type: SAVE_USER,
    user
});

export const removeUser = () => ({
    type: REMOVE_USER,
});

export const loading = bool => ({
    type: LOADING_USER,
    isLoading: bool,
});

export const error = error => ({
    type: ERROR_USER,
    error,
});

export const getToken = accessToken => ({
    type: GET_TOKEN,
    token: accessToken
})

export const getUserToken = () => dispatch => 
    AsyncStorage.getItem('access_token')
        .then((data) => {
            dispatch(loading(false));
            dispatch(getToken(data));
        })
        .catch((err) => {
            dispatch(loading(false));
            dispatch(error(err.message || 'ERROR'));
        })

export const saveUserToken = (data) => dispatch =>
    AsyncStorage.setItem('access_token', data.accessToken)
        .then(() => {
            dispatch(loading(false));
            dispatch(saveUser(data.user));
        })
        .catch((err) => {
            dispatch(loading(false));
            dispatch(error(err.message || 'ERROR'));
        })

export const removeUserToken = () => dispatch =>
    AsyncStorage.removeItem('access_token')
        .then((data) => {
            dispatch(loading(false));
            dispatch(removeUser(data));
        })
        .catch((err) => {
            dispatch(loading(false));
            dispatch(error(err.message || 'ERROR'));
        })