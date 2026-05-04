import { Mars, Minus, ShieldQuestionMark, Venus } from 'lucide-react'
import React from 'react'

export const DisplayGender= ( {gender} ) => {

    if (gender === "Female") return <div><Venus className='text-pink-500'/></div>
    if (gender === "Male") return <div><Mars className='text-blue-500'/></div>
    if (gender === "Genderless") return <div><Minus className='text-black'/></div>
    if (gender === "unknown") return <div><ShieldQuestionMark className='text-gray-500'/></div>

    return <div><ShieldQuestionMark className='text-gray-500'/></div>
}
