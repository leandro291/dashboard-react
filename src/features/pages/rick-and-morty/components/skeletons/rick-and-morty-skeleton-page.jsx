import React from 'react'
import { CharacterItemSkeleton } from './character-item-skeleton-page'

export const RickAndMortySkeletonPage = () => {
    return (
        <div className='flex gap-6 flex-wrap max-h-screen overflow-y-scroll'>
            {
                Array.from({ length: 10}).map((_ , key) => (
                    <CharacterItemSkeleton key={key} />
                ))
            }
        </div>
    )
}
