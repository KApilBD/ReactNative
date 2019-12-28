import React, { useContext } from 'react';
import { Text, Input, Button } from 'react-native-elements';

import Spacer from './Spacer';
import { Context as LocationContext } from '../context/locationContext';

const TrackForm = ({ }) => {
    const { state: { name, recording, locations },
        changeName, startRecording, stopRecording } = useContext(LocationContext);

    return (
        <>
            <Spacer>
                <Input value={name} onChangeText={changeName} placeholder="Enter Name" />
            </Spacer>
            {recording
                ? <Button onPress={stopRecording} title="STOP" />
                : <Button onPress={startRecording} title="START" />
            }
        </>
    );
};


export default TrackForm;