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

TrackListScreen.navigationOptions = {
    title: 'Tracks',
    headerTitleStyle: {
        // alignSelf: 'center',
        textAlign: "center",
        // justifyContent: 'center',
        // flex: 1,
        // fontWeight: 'bold',
        // textAlignVertical: 'center'
    }
}

const style = StyleSheet.create({

});

export default TrackListScreen;