// import React, { createContext, useReducer } from 'react';

import createDataContext from './createDataConstant';

// const BlogContext = createContext();

const blogReducer = (state, action) => {
    switch (action.type) {
        case 'add_blogpost':
            return [...state, { title: `Blog post # ${state.length + 1}` }];
        default:
            return state;
    }
}

const addBlogPost = (dispatch) => {
    return () => {
        dispatch({ type: "add_blogpost" });
    };
}

export const { Context, Provider } = createDataContext(blogReducer, { addBlogPost }, []);

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