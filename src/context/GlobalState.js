import React, { createContext, useReducer } from 'react';
import AppReducer from './AppReducer';

// Initial State
const initialState = {
    books: []
}

// Create context
export const GlobalContext = createContext(initialState);

// Provider component
export const GlobalProvider = ({ children }) => {
    const [state, dispatch] = useReducer(AppReducer, initialState);

    // Actions
    const deleteBook = function(id) {
        dispatch({ 
            type: "DELETE_BOOK",
            payload: id
        })
    };

    const addBook = function(transaction) {
        dispatch({ 
            type: "ADD_BOOK",
            payload: transaction
        })
    };

    return (<GlobalContext.Provider value={{
        books: state.books,
        deleteBook,
        addBook
    }}>
        {children}
    </GlobalContext.Provider>);
}