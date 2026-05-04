import { Heart, HeartPulse, ShieldQuestionMark, Skull } from 'lucide-react'
import React from 'react'

export default function DisplayStatus({ status }) {

    if ( status === "Alive" ) return <div><Heart className='text-red-500 fill-red-500'/> </div>
    if ( status === "Dead" ) return <div><Skull className='text-gray-500' /></div>
    if ( status === "Unknown" ) return <div><ShieldQuestionMark className='text-gray-500' /></div>

    return <div><ShieldQuestionMark className='text-gray-500' /></div>
}
