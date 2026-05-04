import { useEffect, useState } from "react"
import { getPokemons } from "../services/get-pokemons"

export const useGetPokemons = () => {

    const [ page, setPage ] = useState(0)
    const [ pokemon, setPokemon ] = useState([])
    const [ loading, setLoading ] = useState(true)
    const [ error, setError ] = useState(null) 

    useEffect(() => {
        getPokemons({ offset : page })
            .then(setPokemon)
            .catch((error) => setError(error.message))
            .finally(() => setLoading(false))
    }, [page])

    return {
        pokemons : pokemon.results,
        loading,
        error,
        page,
        setPage,
    }

}