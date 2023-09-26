const axios = require("axios")
const { Op } = require("sequelize")
const getAllPokemonsDb = require("../controllers/getAllPokemonsDb");
const getAllPokemonsApi = require("../controllers/getAllPokemonsApi");


const handlePokemon = async (req, res)=>{
    try {
        
        const { name } = req.query;

        if( name === "" ){
            throw new Error("No se encontraron Pokemones con ese nombre")
        }
        //busco en la Base de Datos por el nombre.
        if (name) {
            const pokemonNameDb = await getAllPokemonsDb({
              where: {
                nombre: { [Op.iLike]: `%${name}%` },
              },
            })
        //busco en la Api por el nombre.
        const pokemonApi = await getAllPokemonsApi();
        const pokemonNameApi = pokemonApi.filter((p)=>{
            return p.nombre.toLowerCase().includes(name.toLowerCase());
        })
        //si no encontre un nombre entonces tiro un error 
        if(pokemonNameApi.length === 0 && pokemonNameDb.length){
            throw new Error("No se encontraron Pokemones con ese nombre")
        }   
        //si encuentro el nombre 
        total = [...pokemonApi, ...pokemonNameDb]
        res.status(200).json(total)

    } else {
        //si no especifica el nombre muestro todo
        const allPApi = await getAllPokemonsApi();
        const allpDb = await getAllPokemonsDb();
        //si no hay nada en la base de datos muestro la Api
        if(!allpDb){
            res.status(200).json({allPApi})
        }
        //si hay algo en la base de datos muestro la Api y la Db
        res.status(200).json([...allPApi, ...allpDb]);
    }

    } catch (error) {
        res.status(500).json({error: error.message})
    }
};



module.exports = handlePokemon;
