import React from 'react'

export const DisplayAbilities = ({ abilities }) => {
    return (
        <div className='flex gap-2'>
            {
                abilities.map((info) => (
                    <p className='capitalize text-white font-semibold'>
                        {info.ability.name}
                    </p>
                )

                )
            }
        </div>
    )
}
