const axios = require("axios")
const { Pokemon, Type } = require("../db")

const createPokemon = async (
    nombre, id, imagen, vida, ataque, defensa, velocidad, altura, peso, tipoPokemon
    ) => {
    const pokemonNuevo = await Pokemon.create({nombre, id, imagen, vida, ataque, defensa, velocidad, altura, peso, tipoPokemon})
    
    const pokemonDb = await Type.findAll({
        where: {nombre}
        });
        pokemonNuevo.addType(pokemonDb)
    
    return pokemonNuevo;    
}



module.exports = createPokemon
