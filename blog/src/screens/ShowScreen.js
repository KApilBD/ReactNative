import React, { useContext } from 'react';
import { StyleSheet, Text, View, FlatList, Button, TouchableOpacity } from 'react-native';

import { Context as BlogContext } from '../context/BlogContext';
import { AntDesign } from '@expo/vector-icons';

const ShowScreen = ({ navigation }) => {
    const id = navigation.getParam('id');
    const { state } = useContext(BlogContext);
    const blogPost = state.find((blogPost) => blogPost.id === id);

    return (
        <View >
            <Text  >{blogPost.title} </Text>
            <Text  >{blogPost.content} </Text>
        </View>
    );
};

ShowScreen.navigationOptions = ({ navigation }) => {
    return {
        headerRight: (
            <TouchableOpacity
                onPress={() =>
                    navigation.navigate("Edit", { id: navigation.getParam('id') })
                }
            >
                <AntDesign style={styles.headerIconStyle} name="edit" />
            </TouchableOpacity>)
    }
};


const styles = StyleSheet.create({
    headerIconStyle: {
        marginRight: 10,
        fontSize: 24
    }
});

export default ShowScreen;