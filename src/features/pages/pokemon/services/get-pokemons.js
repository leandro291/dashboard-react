import axios from "axios"

const API_URL = "https://pokeapi.co/api/v2/pokemon/"

export const getPokemons = async ({ offset = 0}) => {

    const response = await axios.get(API_URL, {
        params: { offset, limit: 6}
    })
    
    return response.data
}