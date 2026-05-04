import React, { createContext, useContext } from 'react'
import { TodoHooks } from '../hooks/todo-hooks';

const TodoContext = createContext()

export function TodoProvider({ children }) {

    const todoFunctions = TodoHooks();

    return (
        <TodoContext.Provider value={todoFunctions}>
            {children}
        </TodoContext.Provider>
    )
}

export const useTodo = () => useContext(TodoContext);
