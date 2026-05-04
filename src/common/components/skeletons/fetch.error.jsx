import React from 'react'

export function FetchError({ message }) {
    return (
        <div className='text-2xl opacity-50 text-red-500'>{message}</div>
    )
}
