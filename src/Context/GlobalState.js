import React, { createContext, useReducer } from 'react'
import AppReducer from "./AppReducer"
// Initial State
const initialState = {
    users: [
        { id: 1, name: "user one" },
        { id: 2, name: "user two" },
        { id: 3, name: "user three" }
    ]
}
// create context
const GlobalContext = createContext(initialState);

// Provider Component
const GlobalProvider = ({ children }) => {
    const [state, dispatch] = useReducer(AppReducer, initialState)
    console.log("Current State is : " + JSON.stringify(state))
    //Actrions
    const removeUser = (id) => {
        dispatch({
            type: 'REMOVE_USER',
            payload: id
        })
    }

    const addUser = (user) => {
        dispatch({
            type: 'ADD_USER',
            payload: user
        })
    }


    return (
        <GlobalContext.Provider value={{ users: state.users, removeUser: removeUser, addUser: addUser }} >
            {children}
        </GlobalContext.Provider >
    )
}
export { GlobalContext, GlobalProvider };

