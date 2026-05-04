import React from 'react'
import { useGetPokemonCharacter } from '../hooks/use-get-pokemon-character'
import { CharacterItem } from '../components/character-item/character-items';


export function PokemonCard({ name, url }) {

    const { character, loading, error } = useGetPokemonCharacter(url);

    if (loading){
        return <div>Cargando datos de {name}...</div>;
    } 

    if (error){
        return <div>Error: {error}</div>;
    } 

    return (
        <div className='relative flex flex-col justify-center items-center'>
            <CharacterItem character={character} name={name}/>
        </div>
    )
}
