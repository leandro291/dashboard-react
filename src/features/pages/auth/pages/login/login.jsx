import React, { useState } from 'react'
import { useAuth } from '../../hooks/use-auth'
import { useNavigate } from 'react-router'

export function LoginPage() {

    const { login } = useAuth()

    const navigate = useNavigate()

    const [ form, setForm ] = useState({
        username: "",
        password: "",
    })

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        try {
            await login({ username: form.username, password: form.password });
            navigate("/");
        } catch (error) {
            alert("Username or password are incorrects");
        }
    }

    return (
        <form className="min-h-screen flex justify-center items-center" onSubmit={handleSubmit}>
        <div className="flex flex-col justify-center items-center gap-6 h-105 w-fit p-4">
            <h1>Login</h1>

            <input
                placeholder="username"
                className="w-2xs focus:outline-white/50 focus:outline-none px-4 border border-slate-700 rounded-lg"
                onChange={(e) => setForm({ ...form, username: e.target.value })} 
            />

            <input
                type="password"
                placeholder="password"
                className="w-2xs focus:outline-white/50 focus:outline-none px-4 border border-slate-700 rounded-lg"
                onChange={(e) => setForm({ ...form, password: e.target.value })} 
            />

            <button className="px-3 py-2 bg-slate-900 text-white rounded-lg cursor-pointer" type='submit'>
            Submit
            </button>
            
            <div className='flex flex-col'>
                <p>user: donero</p>
                <p>pass: ewedon</p>
            </div>
        </div>
        </form>
    )
}
