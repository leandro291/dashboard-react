import { create } from "zustand";
import { persist } from "zustand/middleware";

export const usePaginationStore = create(
    persist(
        (set) => ({
            page: 1,
            setPage: (page) => set({page})
        }),

        {
            name : 'pagination-store'
        }
    )
)