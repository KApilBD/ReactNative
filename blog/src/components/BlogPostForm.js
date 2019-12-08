import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

const BlogPostForm = ({ onSubmit, initialValues }) => {
    const [title, setTitle] = useState(initialValues.title);
    const [content, setContent] = useState(initialValues.content);

    return (
        <View >
            <Text style={styles.labelStyle} >Enter Title: </Text>
            <TextInput
                style={styles.textInputStyle}
                value={title}
                onChangeText={(text) => setTitle(text)}
            />
            <Text style={styles.labelStyle} >Enter Content: </Text>
            <TextInput
                style={styles.textInputStyle}
                value={content}
                onChangeText={(text) => setContent(text)}
            />
            <Button
                title="Save Blog Post"
                onPress={() => {
                    onSubmit(title, content)
                }}
            />
        </View>
    );
};

BlogPostForm.defaultProps = {
    initialValues: {
        title: '',
        content: '',
    }
}

const styles = StyleSheet.create({
    textInputStyle: {
        borderColor: "black",
        fontSize: 18,
        borderWidth: 1,
        marginBottom: 10,
        padding: 5,
        margin: 5,
        borderRadius: 3
    },
    labelStyle: {
        fontSize: 20,
        // marginBottom:5,
        marginLeft: 5
    }
});

export default BlogPostForm;