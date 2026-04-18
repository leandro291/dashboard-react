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
        <div className='flex flex-col gap-5 pt-5'>

            <h2 className='text-xl'>Registe su nuevo Todo</h2>

            <input
                type="text"
                placeholder='Ingrese una tarea...'
                value={todoValue}
                onChange={(e) => setTodoValue(e.currentTarget.value)}
            />

            <button
                onClick={handleClick} 
                className='bg-cyan-950 py-2 px-5 rounded-2xl'>
                Enviar Todo
            </button>
        </div>
    )
}
