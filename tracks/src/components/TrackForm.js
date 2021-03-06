import React, { useContext } from 'react';
import { Input, Button } from 'react-native-elements';

import Spacer from './Spacer';
import { Context as LocationContext } from '../context/locationContext';
import useSaveTrack from '../hooks/useSaveTrack';

const TrackForm = ({ }) => {
    const { state: { name, recording, locations },
        changeName, startRecording, stopRecording } = useContext(LocationContext);

    const [saveTrack] = useSaveTrack();

    return (
        <>
            <Spacer>
                <Input value={name} onChangeText={changeName} placeholder="Enter Name" />
            </Spacer>
            <Spacer>
                {recording
                    ? (<Button onPress={stopRecording} title="STOP" />)
                    : <Button onPress={startRecording} title="Start Recording" />
                }
            </Spacer>
            <Spacer>
                {
                    !recording && locations.length
                        ? <Button onPress={saveTrack} title="Save Route" />
                        : null
                }
            </Spacer>
        </>
    );
};


export default TrackForm;