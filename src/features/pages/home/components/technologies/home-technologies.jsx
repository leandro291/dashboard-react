import React from 'react'
import { TechnologiesCard } from './home-techonologies-card'

export function HomeTechnologies({ technologies }) {
    return (
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {
                technologies.map(({ id, Icon, title, description}) => (
                    <TechnologiesCard key={id} Icon={Icon} title={title} description={description} />
                ))
            }

        </section>
    )
}
