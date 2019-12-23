import '../_mockLocation';
import React, { useState, useEffect, useContext } from 'react';
import { View, StyleSheet } from 'react-native';
import { requestPermissionsAsync, watchPositionAsync, Accuracy } from 'expo-location';
import { Text } from 'react-native-elements';
import { SafeAreaView } from 'react-navigation';

import Map from '../components/Map';
import { Context as LocationContext } from '../context/locationContext';

const TrackCreateScreen = () => {
    const [err, setErr] = useState(null);
    // const [err, setErr] = useState(null);
    const { addLocation } = useContext(LocationContext);

    const startWatching = async () => {
        try {
            await requestPermissionsAsync();
            await watchPositionAsync({
                accuracy: Accuracy.BestForNavigation,
                timeInterval: 1000,
                distanceInterval: 10,
            }, (location) => {
                addLocation(location);
            });
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