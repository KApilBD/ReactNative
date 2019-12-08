import React, { useContext } from 'react';
import { StyleSheet } from 'react-native';

import { Context as BlogContext } from '../context/BlogContext';
import BlogPostForm from "../components/BlogPostForm";

const EditScreen = ({ navigation }) => {
    const { state, editBlogPost } = useContext(BlogContext);
    const id = navigation.getParam('id');
    const blogPost = state.find((blogPost) => blogPost.id === id);

    return (
        <BlogPostForm
            initialValues={{id:blogPost.id, title: blogPost.title, content: blogPost.content }}
            onSubmit={(title, content) => {
                editBlogPost(id ,title, content, () => navigation.pop())
                // navigation.navigate('Index') Not good to use in case of API calls
            }}
        />
    );
};

const styles = StyleSheet.create({

});

export default EditScreen;