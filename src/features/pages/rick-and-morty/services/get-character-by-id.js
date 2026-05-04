export const getCharacterById = async ( id ) => {

    const response = await fetch(`https://rickandmortyapi.com/api/character/${id}`)

    if (!response.ok){
        throw new Error("Error getting a single character")
    }

    return response.json()

}