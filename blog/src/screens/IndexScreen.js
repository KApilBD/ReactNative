import React, { useContext } from 'react';
import { StyleSheet, Text, View, FlatList, Button, TouchableOpacity } from 'react-native';
import { AntDesign } from '@expo/vector-icons'

import { Context as BlogContext } from '../context/BlogContext';

const IndexScreen = ({ navigation }) => {

    const { state, deleteBlogPost } = useContext(BlogContext);

    return (
        <View>
            {/*<Button title="Add Post" onPress={() => addBlogPost()} />
             or
            <Button title="Add Post" onPress = {addBlogPost} />
            */}
            <FlatList
                data={state}
                keyExtractor={(post) => post.id + ""}
                renderItem={({ item }) => {
                    return (
                        <TouchableOpacity onPress={() => navigation.navigate("Show", { id: item.id })}>
                            <View style={styles.rowStyle} >
                                <Text style={styles.titeleStyle} >{item.title}</Text>
                                <TouchableOpacity onPress={() => deleteBlogPost(item.id)}>
                                    <AntDesign style={styles.iconStyle} name="delete" />
                                </TouchableOpacity>
                            </View>
                        </TouchableOpacity>
                    );
                }} />
        </View>
    );
};

IndexScreen.navigationOptions = ({ navigation }) => {
    return {
        headerRight: <TouchableOpacity onPress={() => navigation.navigate("Create")}>
            <AntDesign style={styles.headerIconStyle} name="plus" />
        </TouchableOpacity>

    };
};

const styles = StyleSheet.create({
    rowStyle: {
        flexDirection: 'row',
        justifyContent: "space-between",
        paddingVertical: 15,
        // borderTopWidth:1,
        paddingHorizontal: 10,
        borderBottomWidth: 1,
        borderColor: 'gray'
    },
    titeleStyle: {
        fontSize: 18,
    },
    iconStyle: {
        fontSize: 24
    },
    headerIconStyle: {
        marginRight: 10,
        fontSize: 24
    }
});

export default IndexScreen;