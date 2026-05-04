import { useEffect, useState } from "react"
import { getPokemonCharacter } from "../services/get-pokemon-character"

export const useGetPokemonCharacter = (url) =>{

    const [ character, setCharacter ] = useState(null)
    const [ loading, setLoading ] = useState(true)
    const [ error, setError ] = useState(null)

    useEffect(() => {
        getPokemonCharacter(url)
        .then(setCharacter)
        .catch((error) => setError(error.message))
        .finally(() => setLoading(false))
    }, [url])

    return{
        character,
        loading,
        error
    }
}