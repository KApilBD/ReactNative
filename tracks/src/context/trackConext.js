import createDataContext from './createDataContext';
import tracker from '../api/tracker';

const trackReducer = (state, action) => {
    switch (action.type) {
        case "fetch_tracks":
            return action.payload;
        default:
            return state;
    }
};

const fetchTracks = dispatch => async () => {
    const res = await tracker.get('/tracks');
    dispatch({ type: "fetch_tracks", payload: res.data })
};

const createTrack = dispatch => async (name, locations) => {
    await tracker.post('/tracks', { name, locations });
};

export const { Provider, Context } = createDataContext(
    trackReducer,
    { fetchTracks, createTrack },
    []
);
