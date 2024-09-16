import React, { createContext, useEffect, useReducer } from 'react';
import { Reducer } from '../TodoReducer/reducer';

export const TodoContext = createContext([]);

const TodoProvider = ({ children }) => {
    const savedData = JSON.parse(localStorage.getItem('todo')) || [];
    const [states, dispatch] = useReducer(Reducer, savedData);

    useEffect(() => {
        localStorage.setItem('todo', JSON.stringify(states));
    }, [states]);

    function Additem(data) {
        dispatch({ type: 'Add', payload: { id: Date.now(), todo: data } });
    }

    function removeItem(id) {
        dispatch({ type: 'remove', payload: id });
    }

    function updatedItem(id) {
        const newVal = prompt("Enter Updated Value");
        if (newVal) {
            dispatch({ type: 'update', payload: { id, todo: newVal } });
        }
    }

    return (
        <TodoContext.Provider value={{ states, Additem, removeItem, updatedItem }}>
            {children}
        </TodoContext.Provider>
    );
};

export default TodoProvider;
