const axios = require("axios")
const getAllPokemonsApi = require("./getAllPokemonsApi")


const getPokemonByIdApi = async (id) => {
    try {

        const api = await getAllPokemonsApi();
        const pokemonId = api.find((p)=> p.id === id)
        return pokemonId

    } catch (error) {
        throw new Error("Error al buscar el Pokemon por id en la API")
    }
    
}

module.exports = getPokemonByIdApi
