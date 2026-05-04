import React, { useState } from 'react'
import { useGetCharacters } from '../hooks/use-get-characters'
import { CharacterItem } from '../components/character-item/character-item';
import { RickAndMortySkeletonPage } from '../components/skeletons/rick-and-morty-skeleton-page';
import { FetchError } from '../../../../common/components/skeletons/fetch.error';
import { FilterCharacters } from '../components/filter-characters/filter-characters';
import { Pagination } from '../components/pagination/pagination';

export function RickAndMortyPage() {

    const { characters, search, setSearch, setPage, page, info, loading, error } = useGetCharacters();
    
    if (loading){
        return (
            <RickAndMortySkeletonPage />
        )
    }
        
    if (error && !loading){
        <div>
            <FetchError message={error.message}/>
        </div>
    }
    
    return (
        <div className='min-h-screen'>

            <div className='flex justify-between items-center gap-5 pr-25'>
                <FilterCharacters search={search} setSearch={setSearch} />

                <Pagination setPage={setPage} page={page} info={info} />
            </div>

            <div className='flex flex-wrap gap-6 justify-center'>
                {
                    characters.map((character) => (
                        <CharacterItem character={character} key={character.id}/>
                    ))
                }
            </div>

        </div>
    )
}
