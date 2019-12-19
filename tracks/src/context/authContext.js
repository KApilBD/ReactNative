import { AsyncStorage } from 'react-native';

import createDataCOntext from './createDataContext';
import trackerApi from '../api/tracker';
import { navigate } from '../navigationRef';

const authReducer = (state, action) => {
    switch (action.type) {
        case 'add_error':
            return { ...state, errorMessage: action.payload }
        case "clear_error_message":
            return { ...state, errorMessage: '' }
        case 'signin':
        case 'signup':
            return { token: action.payload, errorMessage: '' }
        case 'signout':
            return { token: null, errorMessage: '' }
        default:
            return state;
    }
}

const clearErrorMessage = dispatch => () => {
    dispatch({ type: "clear_error_message" })
}

const signup = (dispatch) => async ({ email, password }) => {
    try {
        const response = await trackerApi.post('/signup', { email, password });
        await AsyncStorage.setItem('token', response.data.token);
        dispatch({ type: 'signup', payload: response.data.token });
        navigate('TrackList');
    } catch (err) {
        dispatch({ type: "add_error", payload: "Somthing went wrong with sign up..." })
    }
};

const signin = (dispatch) => {
    return async ({ email, password }) => {
        try {
            const response = await trackerApi.post('/signin', { email, password });
            await AsyncStorage.setItem('token', response.data.token);
            dispatch({ type: "signin", payload: response.data.token })
            navigate('TrackList')
        } catch (err) {
            console.log("Error : ", err)
            dispatch({ type: "add_error", payload: "Somthing went wrong with sign in..." })
        }
    };
};

const tryLocalSignin = (dispatch) => async () => {
    const token = await AsyncStorage.getItem('token');
    if (token) {
        dispatch({ type: 'signin', payload: token });
        navigate('TrackList');
    } else {
        navigate('loginFlow');
    }
};

const signout = dispatch => async () => {
    await AsyncStorage.removeItem('token');
    dispatch({ type: 'signout' });
    navigate('loginFlow');
};

export const { Provider, Context } = createDataCOntext(
    authReducer,
    { signin, signout, signup, clearErrorMessage, tryLocalSignin },
    { token: null, errorMessage: '' }
);