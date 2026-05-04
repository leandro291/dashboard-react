import React from 'react'
import { TodoItem } from './todo-item'
import { X } from 'lucide-react'

export function TodoList({ todos, onDelete, toggleTodo, editTodo }) {
    return (
        <div className='mt-5'>
            {
                todos.length === 0 ? (
                    <p className='flex justify-center items-center gap-5 text-3xl font-extrabold text-red-700'><X size={50} />No existen todos registrados</p>
                ) :
                    <ul className='flex flex-col gap-5'>
                        {
                            todos.map((todo) => (
                                <TodoItem 
                                    key={todo.id} 
                                    todo={todo} 
                                    onDelete={onDelete} 
                                    toggleTodo={toggleTodo}
                                    editTodo={editTodo} 
                                />
                            ))
                        }
                    </ul>
            }
        </div>
    )
}

