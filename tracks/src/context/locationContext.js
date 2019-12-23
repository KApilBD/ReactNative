import createDataCOntext from './createDataContext';

const locationReducer = (state, action) => {
    switch (action.type) {
        case "add_current_location":
            return { ...state, currentLocation: action.payload };
        default:
            state;
    }
};

const startRecording = dispatch => () => {

};

const stopRecording = dispatch => () => {

};

const addLocation = dispatch => (location) => {
    dispatch({ type: "add_current_location", payload: location });
};

export const { Context, Provider } = createDataCOntext(
    locationReducer,
    { startRecording, startRecording, stopRecording, addLocation },
    { recording: false, location: [], currentLocation: null }
);