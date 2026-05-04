import { create } from "zustand";
import { persist } from "zustand/middleware";

export const useSearchStore = create(
    persist(
        (set) => ({
            search: "",
            setSearch: (search) => set({search})
        }),

        {
            name: "search-store"
        }
    )
)