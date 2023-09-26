const axios = require("axios")
const { Type } = require("../db")

const getTypes = async ()=>{
    const urlType = await axios.get("https://pokeapi.co/api/v2/type")

    const arrType = urlType.data.results.map((type)=> type.name)
    
    await Promise.all(
        arrType.map((type) => {
            Type.findOrCreate({
                where: {
                    nombre: type,
                }
            })
        })
    )
    const typeTotal = await Type.findAll();
    return typeTotal
}

module.exports = getTypes
