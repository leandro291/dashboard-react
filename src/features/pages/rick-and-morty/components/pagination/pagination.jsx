import { ChevronLeft, ChevronRight } from 'lucide-react'
import React from 'react'

export const Pagination = ({ page, info, setPage })  => {

    const handlePrev = () => {
        setPage( page - 1 )
    }

    const handleNext = () => {
        setPage( page + 1 )
    }

    const prevDisabled = !info?.prev
    const nextDisabled = !info?.next

    return (
        <div className='flex items-center gap-4 mb-4'>
            <button 
                onClick={handlePrev} 
                disabled={prevDisabled}
                className={`bg-slate-800/50 p-2 text-white rounded-lg ${prevDisabled && "opacity-50"}`}
            >
                <ChevronLeft />
            </button>
            <span className='text-white text-2xl font-medium'>{page}</span>
            <button 
                onClick={handleNext} 
                disabled={nextDisabled}
                className={`bg-slate-800/50 p-2 text-white rounded-lg ${nextDisabled && "opacity-50"}`}
            >
                <ChevronRight />
            </button>

        </div>
    )
}
