import React from 'react'
import { TodoItem } from './todo-item'

export function TodoList({ todos, onDelete, toggleTodo, editTodo }) {
    return (
        <ul className='mt-5'>
            {
                todos.length === 0 ? (
                    <p>No existen todos registrados</p>
                ) :
                    <>
                        {todos.map((todo) => (
                            <TodoItem 
                                key={todo.id} 
                                todo={todo} 
                                onDelete={onDelete} 
                                toggleTodo={toggleTodo}
                                editTodo={editTodo} 
                            />
                            ))
                        }
                    </>
            }
        </ul>
    )
}

