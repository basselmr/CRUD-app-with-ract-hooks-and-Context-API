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


    return (
        <GlobalContext.Provider value={{ users: state.users }} >
            {children}
        </GlobalContext.Provider >
    )
}
export { GlobalContext, GlobalProvider };

