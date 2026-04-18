import React from 'react'
import { TodoList } from './components/todo-list'
import { TodoHooks } from './hooks/todo-hooks';
import { useTodo } from './context/todo-context';

export function TodoDescriptionPage() {

    const { todos, deleteTodo, toggleTodo, editTodo } = useTodo();

    return (
        <div className='flex flex-col mx-auto max-w-120 w-full'>
            <h2 className='text-5xl text-center'>Lista de Tareas</h2>
            <TodoList todos={todos} onDelete={deleteTodo} toggleTodo={toggleTodo} editTodo={editTodo} />
        </div>
    )
}
