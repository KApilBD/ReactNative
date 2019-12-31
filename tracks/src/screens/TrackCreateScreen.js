// import '../_mockLocation';
import React, { useContext, useCallback } from 'react';
import { StyleSheet } from 'react-native';
import { Text } from 'react-native-elements';
import { SafeAreaView, withNavigationFocus } from 'react-navigation';
import { AntDesign } from '@expo/vector-icons';

import Map from '../components/Map';
import { Context as LocationContext } from '../context/locationContext';
import useLocation from '../hooks/useLocation';
import TrackForm from '../components/TrackForm';

const TrackCreateScreen = ({ isFocused }) => {
    const { addLocation, state: { recording } } = useContext(LocationContext);
    const callback = useCallback((location) => {
        addLocation(location, recording)
    }, [recording]);
    const [err] = useLocation(isFocused || recording, callback);

    return (
        <SafeAreaView forceInset={{ top: "always" }} >
            <Text h2>Create a Track</Text>
            <Map />
            {err ? <Text>Please enable location services</Text> : null}
            <TrackForm />
        </SafeAreaView>
    );
};

TrackCreateScreen.navigationOptions = {
    title: 'Add Track',
    tabBarIcon: <AntDesign name='plus' size={20} />
}

const style = StyleSheet.create({

});

export default withNavigationFocus(TrackCreateScreen);