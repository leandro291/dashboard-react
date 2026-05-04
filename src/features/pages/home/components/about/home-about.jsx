import React from 'react'

export function HomeAbout() {
    return (
        <section className="text-center md:text-left">
            <h1 className="text-5xl font-extrabold text-white mb-4">
                Hola, soy <span className="text-emerald-400">Leandro</span>
            </h1>
            <p className="text-xl text-slate-300 max-w-2xl">
                Estudiante de Ingeniería de Sistemas, por el momento enfocado en el desarrollo Full-Stack. 
                Aplicando conocomientos en este dashboard donde integro APIs modernas y gestiono estados complejos.
            </p>
        </section>
    )
}
