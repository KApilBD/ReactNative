import React, { useContext } from 'react';
import { StyleSheet, Text, ActivityIndicator } from 'react-native';
import MapView, { Polyline, Circle } from 'react-native-maps';

import { Context as LocationContext } from '../context/locationContext';


const Map = () => {
    const { state: { currentLocation } } = useContext(LocationContext);

    if (!currentLocation) {
        return <ActivityIndicator size="large" style={{ marginTop: 200 }} />;
    }
    return (
        <MapView
            style={styles.map}
            initialRegion={{
                ...currentLocation.coords,
                latitudeDelta: 0.05,
                longitudeDelta: 0.05,
            }}
            // region={{
            //     ...currentLocation.coords,
            //     latitudeDelta: 0.05,
            //     longitudeDelta: 0.05,
            // }}
        >
            <Circle
                center={currentLocation.coords}
                radius={120}
                strokeColor="rgba(158,158,255,1.0)"
                fillColor="rgba(158,158,255,0.3)"
            />
            {/* <Polyline coordinates={[]} /> */}
        </MapView>
    );
};

const styles = StyleSheet.create({
    map: {
        height: 300
    }
});

export default Map;