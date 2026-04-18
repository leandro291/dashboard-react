import React, { useState } from 'react'

export function TodoHooks (){

    const [todos, setTodos] = useState([]);

    const addTodo = (description) => {
        const newTodo = {
            id: Date.now(),
            description: description
        }

        setTodos([...todos, newTodo])
    }

    const deleteTodo = (id) => {
        const updated = todos.filter((todo) => todo.id !== id)
        setTodos(updated)
    }

    // Recibe el todo de mismo  
    const toggleTodo = (id) => {
        const updated = todos.map((todo) => (
            todo.id === id ? { ...todo, completed: !todo.completed} : todo
        ))

        setTodos(updated)
    }

    const editTodo = (id, newDescription) => {
        const updated = todos.map((todo) => (
            todo.id === id ? { ...todo, description: newDescription} : todo
        ))

        setTodos(updated)
    }

    return {
        todos,
        addTodo,
        deleteTodo,
        toggleTodo,
        editTodo
    }
}
