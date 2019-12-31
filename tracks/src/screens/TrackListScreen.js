import React, { useContext } from 'react';
import { StyleSheet, Text, FlatList, TouchableOpacity } from 'react-native';
import { NavigationEvents } from 'react-navigation';
import { ListItem } from 'react-native-elements';

import { Context as TrackContext } from '../context/trackConext';

const TrackListScreen = ({ navigation }) => {
    const { fetchTracks, state } = useContext(TrackContext);
    return (
        <>
            <NavigationEvents onWillFocus={fetchTracks} />
            <Text style={{ fontSize: 38 }}>TrackListScreen</Text>
            <FlatList
                data={state}
                keyExtractor={item => item._id}
                renderItem={({ item }) => {
                    return <TouchableOpacity onPress={() => navigation.navigate('TrackDetail', { _id: item._id })} >
                        <ListItem chevron title={item.name} />
                    </TouchableOpacity>
                }}
            />
        </>

    );
};

const style = StyleSheet.create({

});

export default TrackListScreen;