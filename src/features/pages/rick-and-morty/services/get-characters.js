import axios from "axios";

const API_URL = "https://rickandmortyapi.com/api/character";

export const getCharacters = async ({ name = "", page = 1 }) => {

    const response = await axios.get(API_URL, {
        params: { name, page },
    });

    console.log(response)

    return response.data;
};