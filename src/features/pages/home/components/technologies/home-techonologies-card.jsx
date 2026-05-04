import React from 'react'

export function TechnologiesCard({ Icon, title, description }) {
    return (
        <div className="bg-slate-800/40 p-6 rounded-2xl border border-slate-700 hover:border-cyan-400 transition-all group">
            <div className="text-cyan-400 text-3xl mb-4 group-hover:scale-110 transition-transform"><Icon /></div>
            <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
            <p className="text-slate-400 text-sm">
                {description}
            </p>
        </div>
    )
}
