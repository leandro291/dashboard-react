import { useEffect, useState } from "react";
import { getCharacters } from "../services/get-characters";
import { useDebounce } from "use-debounce";
import { usePaginationStore } from "../store/pagination";
import { useSearchStore } from "../store/search";

export const useGetCharacters = () => {

    const { page, setPage } = usePaginationStore()
    const { search, setSearch } = useSearchStore()
    const [ debounceSearch ] = useDebounce(search, 1000)

    const [ characters, setCharacters ] = useState({});
    const [ loading, setLoading] = useState(true);
    const [ error, setError] =  useState(null)

    useEffect(() => {
        getCharacters({ name: debounceSearch, page: page })
            .then(setCharacters)
            .catch((error) => setError(error.message))
            .finally(() => setLoading(false))

    }, [debounceSearch, page])

    return {
        characters: characters.results,
        info: characters.info,
        search,
        setSearch,
        page,
        setPage,
        loading,    
        error,
    }

}