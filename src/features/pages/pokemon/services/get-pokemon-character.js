export const getPokemonCharacter = async (url) => {

    const response = await fetch (url)

    if (!response.ok){
        throw new Error("Ha ocurrido un error al recibir los datos")
    }

    return response.json()
}