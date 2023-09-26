const axios = require("axios")
const getAllPokemonsDb = require("./getAllPokemonsDb")

const getPokemonByIdDb = async (id) => {
    try {
        
        const db = await getAllPokemonsDb();
        const dbPokemonId = db.find((p)=> p.id === id)
        return dbPokemonId

    } catch (error) {
        
        throw new Error("Error al buscar el Pokemon por id en la Base de datos")

    }
}

module.exports = getPokemonByIdDb