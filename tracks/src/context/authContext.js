import { AsyncStorage } from 'react-native';

import createDataCOntext from './createDataContext';
import trackerApi from '../api/tracker';

const authReducer = (state, action) => {
    switch (action.type) {
        case 'add_error':
            return { ...state, errorMessage: action.payload }
        case 'signup':
            return { token: action.payload, errorMessage: '' }
        default:
            return state;
    }
}

const signup = (dispatch) => async ({ email, password }) => {
    try {
        const response = await trackerApi.post('/signup', { email, password });
        await AsyncStorage.setItem('token', response.data.token);
        dispatch({ type: 'signup', payload: response.data.token })
    } catch (err) {
        dispatch({ type: "add_error", payload: "Somthing went wrong with sign up..." })
    }
};

const signin = (dispatch) => {
    return (email, password) => {
        //make api request to signin with the email and password

        //if we signin, update the state, 

        // if fail, reflect error msg to user
    };
};

const signout = (dispatch) => {
    return () => {
        //signpout the user
    };
};

export const { Provider, Context } = createDataCOntext(
    authReducer,
    { signin, signout, signup },
    { token: null, errorMessage: '' }
);