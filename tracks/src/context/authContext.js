import createDataCOntext from './createDataContext';
import trackerApi from '../api/tracker';

const authReducer = (state, action) => {
    switch (action.type) {
        default:
            return state;
    }
}

const signup = (dispatch) => {
    return async ({email, password}) => {
        try {
            const response = await trackerApi.post('/signup', { email, password });
            console.log(response.data);
        } catch (err) {
            console.log(err.message);
        }
    };
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

export const { Provider, Context } = createDataCOntext(authReducer, { signin, signout, signup }, { isSignedIn: false });