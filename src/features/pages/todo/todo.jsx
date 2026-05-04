import React from 'react'
import { TodoInput } from './components/todo-input'
import { useTodo } from './context/todo-context';
import { ListTodo } from 'lucide-react';
import { TodoList } from './components/todo-list';

export function TodoPage() {

    const { todos, deleteTodo, addTodo ,toggleTodo, editTodo } = useTodo();

    return (
        <div className='flex flex-col gap-5 mx-auto my-auto w-full'>
            <h1 className='text-6xl text-white font-extrabold text-center flex items-center gap-10'>To-Do List <ListTodo size={64}/></h1>
            <TodoInput addTodo={addTodo} />
            <TodoList todos={todos} onDelete={deleteTodo} toggleTodo={toggleTodo} editTodo={editTodo} />
        </div>
    )
}
