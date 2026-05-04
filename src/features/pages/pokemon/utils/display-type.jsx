import React from 'react'

const typeColors = {
    grass: 'bg-green-500 text-white',
    fire: 'bg-red-500 text-white',
    water: 'bg-blue-500 text-white',
    bug: 'bg-lime-600 text-white',
    normal: 'bg-gray-400 text-black',
    poison: 'bg-purple-500 text-white',
    electric: 'bg-yellow-400 text-black',
    ground: 'bg-yellow-700 text-white',
    fairy: 'bg-pink-300 text-black',
    fighting: 'bg-orange-700 text-white',
    psychic: 'bg-pink-500 text-white',
    rock: 'bg-stone-600 text-white',
    ghost: 'bg-indigo-800 text-white',
    ice: 'bg-cyan-300 text-black',
    dragon: 'bg-indigo-600 text-white',
    dark: 'bg-zinc-800 text-white',
    steel: 'bg-slate-500 text-white',
    flying: 'bg-sky-400 text-black',
};

export const DisplayType = ({ types }) => {
    return (
        <div className='flex gap-2 mt-2'>
            {
                types.map((info) => {
                    // Obtenemos el nombre del tipo
                    const typeName = info.type.name;
                    // Buscamos el color en el diccionario, si no existe usamos un gris por defecto
                    const colorClass = typeColors[typeName] || 'bg-gray-500 text-white';

                    return (
                        <p 
                            key={typeName} 
                            className={`capitalize text-sm font-bold px-3 py-1 rounded-full ${colorClass}`}
                        >
                            {typeName}
                        </p>
                    );
                })
            }
        </div>
    );
};