import createDataCOntext from './createDataContext';

const locationReducer = (state, action) => {
    switch (action.type) {

        default:
            state;
    }
};

const startRecording = dispatch => () => {

};

const stopRecording = dispatch => () => {

};

const addLocation = dispatch => () => {

};

export const { Context, Provider } = createDataCOntext(
    locationReducer,
    { startRecording, startRecording, addLocation },
    { recording: false, location: [], currentLocation: null }
);