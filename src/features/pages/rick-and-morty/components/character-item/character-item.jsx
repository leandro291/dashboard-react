import { Mars, Minus, ShieldQuestionMark, Venus } from 'lucide-react'
import React from 'react'
import { DisplayGender } from '../../utils/display-gender'
import DisplayStatus from '../../utils/display-status'
import { useNavigate } from 'react-router'

export const CharacterItem = ({ character, withNavigation = true }) => {

    const { id, name, status, species, gender, origin, location, image, url } = character

    const navigate = useNavigate()
    const handleNavigate = () => {

        if (!withNavigation) return

        navigate(`/character/${id}`)
    }

    return (
        <div className='min-h-90 w-70 bg-emerald-900/60 rounded-lg px-6 py-2 flex flex-col gap-6 cursor-pointer transition-all duration-300 hover:scale-105 hover:bg-emerald-800/80 hover:shadow-[0_0_20px_rgba(16,185,129,0.4)]'
            onClick={handleNavigate}>
            <img src={image} alt={name} className='w-full h-44 rounded-lg'/>
            <h2 className='font-bold opacity-50 text-2xl text-white'>{name}</h2>

            <div className='grid grid-cols-2 gap-2 items-center justify-center'>
                <div className='flex gap-2'>
                    <p className='text-white'>Gender: </p>
                    <DisplayGender gender={gender}/>    
                </div>

                <div className='flex gap-2'>
                    <p className='text-white'>Status: </p>
                    <DisplayStatus status={status}/>    
                </div>

                <div className='flex gap-2 col-span-2 items-center'>
                    <p className='text-white'>Species</p>
                    <p className='text-sm opacity-50'>{species}</p>    
                </div>

                <div className='flex gap-2 col-span-2 items-center'>
                    <p className='text-white'>Origin: </p>
                    <p className='text-sm opacity-50'>{origin.name}</p>   
                </div>

                <div className='flex gap-2 col-span-2 items-center'>
                    <p className='text-white'>Location: </p>
                    <p className='text-sm opacity-50'>{location.name}</p>   
                </div>

            </div>

        </div>
    )
}
