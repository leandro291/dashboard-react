import React, { useState } from 'react'

export function TodoInput({ addTodo }) {

    const [todoValue, setTodoValue] = useState("");

    const handleClick = () => {

        if (todoValue === ""){
            return
        }
        
        addTodo(todoValue);
        setTodoValue("");
    }

    return (
        <div className='flex mt-5 items-center bg-gray-600 rounded-2xl shadow-sm focus-within:shadow-md transition-shadow duration-300'>

            <input
                className='flex-1 py-4 px-4 focus:outline-none placeholder:transition-opacity focus:placeholder:opacity-50 '
                type="text"
                placeholder='Ingrese una tarea...'
                value={todoValue}
                onChange={(e) => setTodoValue(e.currentTarget.value)}
            />

            <button
                onClick={handleClick} 
                className='bg-orange-400 py-4 px-8 rounded-2xl w-60 text-white text-lg font-bold hover:bg-orange-500 
                        transition-all duration-400 cursor-pointer'>
                Enviar Todo
            </button>
        </div>
    )
}
