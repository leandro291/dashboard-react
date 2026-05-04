import { ChevronLeft, ChevronRight } from 'lucide-react'
import React from 'react'

export function Pagination({ page, setPage }) {

    const showPage = page == 0 ? 1 : (page/6) + 1

    const handlePrev = () => {
        setPage(page - 6)
    }

    const handleNext = () => {
        setPage(page + 6)
    }

    const prevDisabled = page <= 0
    return (
        <div className='flex gap-5 items-center mt-4'>
            <button
                disabled={prevDisabled}
                onClick={handlePrev}
                className={`bg-slate-800/50 p-4 text-white rounded-lg ${prevDisabled && "opacity-50"}`}
            >
                <ChevronLeft />
            </button>
            <span className='text-2xl text-white font-extrabold'>{showPage}</span>
            <button
                onClick={handleNext}
                className={`bg-slate-800/50 p-4 text-white rounded-lg  && "opacity-50"}`}
            >
                <ChevronRight />
            </button>
        </div>
    )
}
