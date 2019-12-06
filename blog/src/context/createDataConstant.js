import React, { createContext, useReducer } from 'react';


export default (reducer, actions, initialState) => {
    const Context = createContext();
    const Provider = ({ children }) => {
        const [state, dispath] = useReducer(reducer, initialState);

        // actions === {addBlogPost: (dispatch) => {retrun () => {}}};
        const boundActions = {};
        for (let key in actions) {
            boundActions[key] = actions[key](dispatch);
        }


        return (
            <Context.Provider value={{ state, ...boundActions }} >
                {children}
            </Context.Provider>
        )
    }

    return { Context, Provider };
};