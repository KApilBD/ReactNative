import createDataContext from './createDataContext';
import { ActionSheetIOS } from 'react-native';

const trackReducer = (state, action) => {
    switch (action.type) {
        default:
            return state;
    }
};

const fetchTracks = dispatch => () => {

};

const createTrack = dispatch => () => {

};

export const{ Provider, Context } = createDataContext(
    trackReducer,
    {fetchTracks, createTrack},
    []
);
