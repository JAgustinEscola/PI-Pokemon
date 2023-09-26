const axios = require("axios")
const { Type } = require("../db")
const  getTypes = require("../controllers/getPokemonTypes")


const handleType = async(req, res)=>{
    try {
        const dbTypes = await Type.findAll();
        if(dbTypes.length > 0){
            res.status(200).json(dbTypes);
        }else{
             res.status(200).json(await getTypes());
        }
    } catch (error) {
        res.status(400).json({error: error.message})
    }
}

module.exports = handleType;
