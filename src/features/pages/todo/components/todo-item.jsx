import React, { useState } from 'react'

export function TodoItem({ todo, onDelete, toggleTodo, editTodo }) {

    const [isEdit, setIsEdit] = useState(false);
    const [newDescription, setNewDescription] = useState("");

    const handleClick = () => {

        if (newDescription.trim() === ""){
            return
        }

        editTodo(todo.id, newDescription)
        setIsEdit(false)

    }

    return (
        <div>
            <li className="flex gap-2 ">
                <div className='flex items-center gap-4'>
                {
                    isEdit ? (
                        <>
                            <input 
                                type="text"
                                placeholder='Escriba su nueva tarea...'
                                value={newDescription}
                                onChange={(e) => setNewDescription(e.currentTarget.value)}
                            />
                            <button onClick={handleClick}>💾</button>
                            <button onClick={() => setIsEdit(false)}>❌</button>
                        </>
                    ) : 
                    (                
                    <>
                        <input 
                            type="checkbox" 
                            value={todo.completed}
                            onChange={() => toggleTodo(todo.id)} 
                        />
                    
                    <p className={todo.completed ? "line-through" : ""}>-{todo.description}</p>

                    <button 
                        onClick={() => onDelete(todo.id)} 
                        className="border bg-red-200/50 w-6 border-gray-800/50 rounded-xs"
                    >
                        🗑
                    </button>

                    <button
                        onClick={() => setIsEdit(true)} 
                        className="border bg-green-200/50 w-6 border-gray-800/50 rounded-xs"
                    >
                        ✏️
                    </button>

                    </>
                )
                }
                </div>
            </li>
        </div>
    )
}
