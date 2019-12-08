// import React, { createContext, useReducer } from 'react';

import createDataContext from './createDataContext';

// const BlogContext = createContext();

const blogReducer = (state, action) => {
    switch (action.type) {
        case 'add_blogpost':
            return [
                ...state,
                {
                    title: action.payload.title,
                    id: Math.floor(Math.random() * 99999),
                    content: action.payload.content
                }
            ];
        case 'edit_blogpost':
            return state.map((blogpost) => {
                return blogpost.id === action.payload.id ? action.payload : blogpost
            });
        case 'delete_blogpost':
            return state.filter((blogpost) => blogpost.id !== action.payload);
        default:
            return state;
    }
}

const addBlogPost = (dispatch) => {
    return (title, content, callback) => {
        dispatch({ type: "add_blogpost", payload: { title, content } });
        if (callback) {
            callback();
        }
    };
}
const deleteBlogPost = (dispatch) => {
    return (id) => {
        dispatch({ type: "delete_blogpost", payload: id });
    }
}

const editBlogPost = (dispatch) => {
    return (id, title, content, callback) => {
        dispatch({ type: "edit_blogpost", payload: { id, title, content } });
        if (callback) {
            callback();
        }
    }
}

export const { Context, Provider } = createDataContext(
    blogReducer,
    { addBlogPost, deleteBlogPost, editBlogPost },
    [{ title: "Test Post", content: 'Test Content', id: 1 }]
);

// export const BlogProvider = ({ children }) => {
//     const [blogPosts, dispatch] = useReducer(blogReducer, []);

//     const addBlogPost = () => {
//         dispatch({type: "add_blogpost"});
//     }

//     return (<BlogContext.Provider value={{ data: blogPosts, addBlogPost }}>
//         {children}
//     </BlogContext.Provider>);
// };

// export default BlogContext;