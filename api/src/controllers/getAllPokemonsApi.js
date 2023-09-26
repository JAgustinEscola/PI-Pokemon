const axios = require("axios");

const URL = "https://pokeapi.co/api/v2/pokemon?limit=100";

const getAllPokemonsApi = async () => {
  try {
    const apiUrl = await axios.get(URL);
    const apiData = apiUrl.data.results.map(async (pokemon) => {
      const pokemonData = await axios.get(pokemon.url);
      return {
        id: pokemonData.data.id,
        nombre: pokemonData.data.name,
        imagen: pokemonData.data.sprites.other.dream_world.front_default,
        vida: pokemonData.data.stats[0].base_stat,
        ataque: pokemonData.data.stats[1].base_stat,
        defensa: pokemonData.data.stats[2].base_stat,
        velocidad: pokemonData.data.stats[5].base_stat,
        altura: pokemonData.data.height,
        peso: pokemonData.data.weight,
        tipo: pokemonData.data.types.map((type) => type.type.name),
      };
    });
    return Promise.all(apiData);
  } catch (error) {
    throw new Error("No se pudo obtener los Pokemones de la API");
  }
};

module.exports = getAllPokemonsApi;