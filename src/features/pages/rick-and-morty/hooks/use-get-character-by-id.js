import React, { useEffect, useState } from 'react'
import { getCharacterById } from '../services/get-character-by-id';

export const useGetCharacterById = (id) => {

    const [ character, setCharacter ] = useState({});
    const [ isLoading, setIsLoading ] = useState(true)
    const [ isError, setIsError ] = useState(null)

    useEffect(() => {
        getCharacterById(id).then(setCharacter)
        .catch((error) => setIsError(error.message))
        .finally((isLoading) => setIsLoading(false))
    }, [id])

    return { character, isLoading, isError }

}
