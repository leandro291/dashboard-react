import React from 'react'
import { TodoInput } from './components/todo-input'
import { useTodo } from './context/todo-context';

export function TodoPage() {

    const { addTodo } = useTodo();

    return (
        <div className='flex flex-col mx-auto my-auto max-w-120 w-full'>
            <h1 className='text-4xl text-center'>Pagina para crear un todo</h1>
            <TodoInput addTodo={addTodo} />
        </div>
    )
}
