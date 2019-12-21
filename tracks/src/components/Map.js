import React from 'react';
import { StyleSheet, Text } from 'react-native';
import MapView, { Polyline } from 'react-native-maps';


const Map = () => {
    let points = [];
    for (let i = 0; i < 20; i++) {
        if(i % 2 === 0){
            points.push({
                latitude: 12.9716 + i * 0.001,
                longitude: 77.5946 + i * 0.001,
            })
        }else{
            points.push({
                latitude: 12.9716 - i * 0.002,
                longitude: 77.5946 + i * 0.002,
            })
        }

    }
    return (
        <MapView
            style={styles.map}
            initialRegion={{
                latitude: 12.9716,
                latitudeDelta: 0.05,
                longitude: 77.5946,
                longitudeDelta: 0.05,
            }}
        >
<Polyline coordinates={points} />
        </MapView>
    );
};

const styles = StyleSheet.create({
    map: {
        height: 300
    }
});

export default Map;