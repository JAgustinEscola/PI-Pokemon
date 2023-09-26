const { Router } = require("express")
const handlePokemon = require("../handlers/handlePokemon");
const handlePokemonById = require("../handlers/handlePokemonById");
const handleCreatePokemon = require("../handlers/handleCreatePokemon");

const pRoute = Router();


// GET | /pokemons/name?="..." y todos los pokemones
pRoute.get("/", handlePokemon);

// GET | /pokemons/:idPokemon
pRoute.get('/:idPokemon', handlePokemonById)

// POST | /pokemons 
pRoute.post('/', handleCreatePokemon)



module.exports = pRoute;