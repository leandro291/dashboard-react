import React from 'react'
import { HomeAbout } from '../components/about/home-about'
import { HomeTechnologies } from '../components/technologies/home-technologies'
import { TECHNOLOGIES } from '../constants/technologies/techonologies'

export function HomePage() {
    return (

        
            <div className="p-10 max-w-6xl mx-auto flex flex-col gap-10">
                <HomeAbout />
                <HomeTechnologies technologies={TECHNOLOGIES} />
            </div>

    )
}
