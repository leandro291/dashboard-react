import { Pencil, Save, Trash, Trash2, X } from 'lucide-react';
import React, { useState } from 'react'

export function TodoItem({ todo, onDelete, toggleTodo, editTodo }) {

    const [isEdit, setIsEdit] = useState(false);
    const [newDescription, setNewDescription] = useState("");

    const handleSave = () => {

        if (newDescription.trim() === ""){
            return
        }

        editTodo(todo.id, newDescription)
        setIsEdit(false)

    }

    return (
        <li className="flex items-center justify-between bg-white p-4 mb-3 rounded-xl border border-gray-100 shadow-sm">
            <div className="flex items-center gap-4 flex-1">
                {
                    isEdit ? 
                        (
                            <div className="flex items-center gap-2 w-full">
                                <input 
                                    className="flex-1 bg-gray-50 border border-gray-200 rounded-lg px-3 py-1 focus:outline-none"
                                    type="text"
                                    value={newDescription}
                                    onChange={(e) => setNewDescription(e.currentTarget.value)}
                                />
                                <button 
                                    onClick={handleSave}
                                    className="p-2 text-green-600 hover:bg-green-50 rounded-lg"
                                >
                                    <Save size={20} />
                                </button>
                                <button 
                                    onClick={() => setIsEdit(false)}
                                    className="p-2 text-red-500 hover:bg-red-50 rounded-lg"
                                >
                                    <X size={20} />
                                </button>
                            </div>
                        ) : (
                            <>
                                <input
                                    type="checkbox" 
                                    checked={todo.completed}
                                    onChange={() => toggleTodo(todo.id)}
                                    className="w-5 h-5 accent-orange-500 cursor-pointer"
                                />
                                <p className={`flex-1 text-lg ${
                                    todo.completed ? "line-through text-gray-400" : "text-gray-700"
                                }`}>
                                    {todo.description}
                                </p>
                            </>
                        )
                }
            </div>


            {
                !isEdit && 
                    (
                        <div className="flex gap-1">
                            <button
                                onClick={() => setIsEdit(true)} 
                                className="p-2 text-blue-500 hover:bg-blue-50 rounded-lg"
                            >
                                <Pencil size={18} />
                            </button>
                            <button 
                                onClick={() => onDelete(todo.id)} 
                                className="p-2 text-red-500 hover:bg-red-50 rounded-lg"
                            >
                                <Trash2 size={18} />
                            </button>
                        </div>
                    )
            }
        </li>
    );
}
