// import React, { createContext, useReducer } from 'react';

import createDataContext from './createDataContext';

// const BlogContext = createContext();

const blogReducer = (state, action) => {
    switch (action.type) {
        case 'add_blogpost':
            return [
                ...state,
                { 
                    title: `Blog post # ${state.length + 1}`, 
                    id: Math.floor(Math.random() * 99999) 
                }
            ];
        case 'delete_blogpost':
            console.log("state", state, action.payload)
            return state.filter((blogpost)=> blogpost.id !== action.payload);
        default:
            return state;
    }
}

const addBlogPost = (dispatch) => {
    return () => {
        dispatch({ type: "add_blogpost" });
    };
}
const deleteBlogPost = (dispatch) => {
    return (id) => {
        dispatch({type: "delete_blogpost", payload:id});
    }
}

export const { Context, Provider } = createDataContext(blogReducer, { addBlogPost, deleteBlogPost }, []);

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