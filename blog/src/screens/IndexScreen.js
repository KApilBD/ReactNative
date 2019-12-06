import React, { useContext } from 'react';
import { StyleSheet, Text, View, FlatList, Button } from 'react-native';

import { Context as BlogContext } from '../context/BlogContext';

const IndexScreen = () => {

    const {state, addBlogPost} = useContext(BlogContext);

    return (
        <View>
            <Text>Index Screen {state.length}</Text>
            <Button title="Add Post" onPress = {() => addBlogPost()} />
            {/* or
            <Button title="Add Post" onPress = {addBlogPost} />
            */}
            <FlatList
                data={state}
                keyExtractor={(post) => post.title}
                renderItem={({ item }) => {
                    return <Text>{item.title}</Text>
                }} />
        </View>
    );
};

const styles = StyleSheet.create({

});

export default IndexScreen;