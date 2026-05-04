import React from 'react'
import { DisplayType } from '../../utils/display-type'
import { DisplayAbilities } from '../../utils/display-abilities'

export function CharacterItem({ character, name }) {

    const { id, abilities, types, stats, sprites} = character

    return (
        <div className='min-h-90 w-70 bg-slate-700/50 rounded-lg px-6 py-2 flex flex-col items-center gap-2 cursor-pointer transition-all duration-300 hover:-translate-y-2 hover:scale-105 hover:shadow-2xl hover:bg-slate-700'>
            <span className='text-xl text-white font-extrabold'>{`#${id < 10 ? `00${id}` : id < 100 ? `0${id}` : id}`}</span>

            <img 
                src={sprites.other['official-artwork'].front_default} 
                alt={name} 
                className="w-32 h-32"
            />

            <h2 className='text-4xl capitalize font-bold'>{name}</h2>

            <div className='flex flex-col items-center mb-0'>
                <h2 className='text-xl font-medium'>Tipo: </h2>
                <DisplayType types={types} />
            </div>

            <div className='flex flex-col items-center mb-0'>
                <h2 className='text-xl font-medium'>Habilidades: </h2>
                <DisplayAbilities abilities={abilities} />
            </div>
        </div>
    )
}
