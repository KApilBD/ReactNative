import { useContext, useState, useEffect } from 'react';

import { Context as LocationContext } from '../context/locationContext';
import { Context as TrackContext } from '../context/trackConext';
import { navigate } from "../navigationRef";

export default () => {
    const { state: { locations, name }, reset } = useContext(LocationContext);
    const { createTrack } = useContext(TrackContext);

    const saveTrack = async () => {
        await createTrack(name, locations);
        reset();
        navigate('TrackList')
    };

    return [saveTrack];
};