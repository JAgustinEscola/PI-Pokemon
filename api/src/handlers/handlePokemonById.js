const handlePokemon = require("./handlePokemon")
const getPokemonByIdApi = require("../controllers/getPokemonByIdApi")
const getPokemonByIdDb = require("../controllers/getPokemonByIdDb")

const handlePokemonById = async (req, res) =>{
    try {

        const { idPokemon } = req.params;

        if( !idPokemon ){

            res.status(200).json(await handlePokemon(req, res));

        } else {

            const pokemonIdApi = await getPokemonByIdApi(Number(idPokemon))
            const pokemonIdDb = await getPokemonByIdDb(idPokemon)

            if(!pokemonIdApi && !pokemonIdDb) {
                throw new Error("no se encontro ningun Pokemon con ese id")
            } else {
                res.status(200).json({pokemonIdDb, pokemonIdApi})
            }
        }
    } catch (error) {
        res.status(500).json({error: error.message})
    }
}

module.exports = handlePokemonById