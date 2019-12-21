import React, { useState, useEffect } from 'react';
import { View, StyleSheet } from 'react-native';
import { requestPermissionsAsync } from 'expo-location';
import { Text } from 'react-native-elements';
import { SafeAreaView } from 'react-navigation';

import Map from '../components/Map';

const TrackCreateScreen = () => {
    const [err, setErr] = useState(null);

    const startWatching = async () => {
        try {
            await requestPermissionsAsync();
            
        } catch (e) {
            console.log(e)
            setErr(e)
        }
    }
    useEffect(() => {
        startWatching();
    }, []);
    return (
        <SafeAreaView forceInset={{ top: "always" }} >
            <Text h2>Create a Track</Text>
            <Map />

            {err ? <Text>Please enable location services</Text> : null}
        </SafeAreaView>
    );
};

const style = StyleSheet.create({

});

export default TrackCreateScreen;