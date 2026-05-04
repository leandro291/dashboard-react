import React from 'react'
import { useCounter } from '../store/zustand-example-store'

export function ZustandExamplePages() {

    const { counter, increment, decrement } = useCounter();

    return (
        <div className='w-full h-full flex flex-col justify-center items-center gap-15'>
            <h1 className='text-6xl font-extrabold'>ZUSTAND</h1>

            <h2 className='text-3xl opacity-85 font-bold'>{counter}</h2>

            <div className='flex gap-10'>
                <button onClick={increment} className='p-4 rounded-2xl bg-amber-500'>Incrementar</button>
                <button onClick={decrement} className='p-4 rounded-2xl bg-red-500'>Incrementar</button>
            </div>

        </div>
    )
}
