import React from 'react'

import { useUser } from '../../providers/user-provider/user-provider';

export function UserSection() {

    const {user} = useUser();

    return (
        <div className='flex justify-around items-center border border-blue-800 rounded-xl p-6'>
            <img className='rounded-full w-15 h-15' src={user.avatar} alt="" />
            <div className='flex flex-col items-start'>
                <h3 className='text-2xl '>{user.name}</h3>
                <p className='opacity-50 text-lg'>{user.role}</p>
            </div>
        </div>
    )
}
