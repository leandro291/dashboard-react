import React from 'react'
import { useGetPokemons } from '../hooks/use-get-pokemons'
import { PokemonCard } from './pokemon-card';
import { Pagination } from '../components/pagination/pagination';


export function PokemonPage (){ 

    const { pokemons, page, setPage, loading, error} = useGetPokemons();

    console.log(pokemons)

    if (loading){
        return (
            <div>
                <h2>Loading...</h2>
            </div>
        )
    }

    if (error){
        return(
            <div>
                <h2>Ha ocurrido un error</h2>
            </div>
        )
    }

    // Esta funcion principal tiene que retonar el mapeo de todas las funciones 
    return (
        <div className='h-full w-full flex flex-col items-center jus py-10'>

            <div className='flex flex-col justify-center items-center'>
                <div className='flex justify-center flex-wrap gap-5'>
                    {
                        pokemons.map((pokemon) => (
                            <PokemonCard key={pokemon.name} name={pokemon.name} url={pokemon.url}/>
                        ))
                    }
                </div>

                <Pagination page={page} setPage={setPage} />
            </div>

        </div>
    )
}
