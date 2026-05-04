import React from 'react'
import { useNavigate, useParams } from 'react-router'
import { useGetCharacterById } from '../hooks/use-get-character-by-id'
import { CharacterItem } from '../components/character-item/character-item'
import { MoveLeft } from 'lucide-react'

export const CharacterPage = () => {

    const navigate = useNavigate()
    
    const { characterId } = useParams()
    const { character, isError, isLoading } = useGetCharacterById(characterId);

    const handleNavigation = () =>{
        navigate("/rick-and-morty")
    }

    if (isLoading){
        return (
        <div>
            <h2>Loading....</h2>
        </div>
        )
    }

    if (isError){
        return (
        <div>
            <h2>An error ocurred</h2>
        </div>
        )
    }

    return (
        <div className='relative flex flex-col w-full justify-center items-center min-h-screen'>
        <MoveLeft className='absolute top-2 left-8 cursor-pointer' onClick={handleNavigation} />

        <CharacterItem character={character} withNavigation={false} />

        </div>
    )
}
