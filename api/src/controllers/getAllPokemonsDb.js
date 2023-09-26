const { Pokemon, Type } = require("../db");
const axios = require("axios")

const getAllPokemonsDb = async (el) => {
  const dbPokemons = await Pokemon.findAll({
    ...el,
    include: Type,
  });
  return dbPokemons;
};

module.exports = getAllPokemonsDb;