import createDataContext from './createDataContext';
import tracker from '../api/tracker';

const trackReducer = (state, action) => {
    switch (action.type) {
        default:
            return state;
    }
};

const fetchTracks = dispatch => () => {

};

const createTrack = dispatch => async (name, locations) => {
    await tracker.post('/tracks', { name, locations });
};

export const { Provider, Context } = createDataContext(
    trackReducer,
    { fetchTracks, createTrack },
    []
);
