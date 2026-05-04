import { Search } from 'lucide-react'
import React from 'react'

export const FilterCharacters = ({ search, setSearch }) => {
    return (
    <div className='mb-4 bg-white/10 p-3 rounded-lg flex gap-3 flex-1'>

        <Search />
        <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            type="text" 
            placeholder='Search a character.....' 
            className='flex-1 focus:outline-0 px-3'
        />

    </div>
    )
}
