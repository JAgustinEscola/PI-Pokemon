const createPokemon = require("../controllers/createPokemon");
const getAllPokemonsApi = require("../controllers/getAllPokemonsApi");
const getAllPokemonsDb = require("../controllers/getAllPokemonsDb");

const handleCreatePokemon = async (req, res) => {
    try {
        const { nombre, imagen, vida, ataque, defensa, velocidad, altura, peso, tipoPokemon } = req.body
        console.log(nombre, imagen, vida, ataque, defensa, velocidad, altura, peso, tipoPokemon);

        const api = await getAllPokemonsApi();
        const db = await getAllPokemonsDb();

        const pokemonExistenteApi = api.find((p) => p.nombre.toLowerCase() === nombre.toLowerCase());

        const pokemonExistenteDb = db.find((p) => p.nombre.toLowerCase() === nombre.toLowerCase());

        if(pokemonExistenteApi || pokemonExistenteDb){
            throw new Error("El pokemon ya existe")
        }

        if(
            !nombre,
            !imagen,
            !vida,
            !ataque,
            !defensa,
            !velocidad,
            !altura,
            !peso,
            !tipoPokemon
        ){
            throw new Error("faltan datos por completar")
        }

        if(tipoPokemon.length > 2){
            throw new Error("el pokemon solo puede tener hasta dos tipos")
        }else{
            const nuevoPokemon = await createPokemon(
                nombre, imagen, vida, ataque, defensa, velocidad, altura, peso, tipoPokemon
            );
            res.status(200).json(nuevoPokemon)
        }
    } catch (error) {
        res.status(400).json({error: error.message})
    }
}

module.exports = handleCreatePokemon