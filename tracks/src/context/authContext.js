import createDataCOntext from './createDataContext';

const authReducer = (state, action) => {
    switch (action.type) {
        default:
            return state;
    }
}

const signup = (dispatch) => {
    return (email, password) => {
        //make api request to signup with the email and password

        //id we signup, modif the state, and indicate authentication

        // if fail, reflect error msg to user
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