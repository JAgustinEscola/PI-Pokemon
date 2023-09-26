import { FILTER, FILTER_TYPE, GET_POKEMONS, GET_POKEMONS_ID, GET_POKEMONS_NAME, GET_POKEMONS_TYPE, ORDER, POKEMON_POST,  } from "../actions/actionType";

const initialState = {
pokemons : [],
id: [],
nombre: [],
tipoPokemon: [],
original: [],
copia: [],
pag: 1,
origen: [],

}

const rootReducer = (state = initialState, action)=>{
    switch(action.type) {
        case GET_POKEMONS:

        return{

            ...state,
            pokemons: action.payload,
            original: action.payload,
            copia: action.payload
            
        }
        
        case GET_POKEMONS_NAME:
            state.copia = payload
            return {
                
                ...state,
                pokemons: state.copia
            }
        case GET_POKEMONS_ID:
            return {

                ...state,
                id: payload
            }
        case GET_POKEMONS_TYPE: 
        return {

            ...state,
             tipoPokemon: payload
        }
        case ORDER:
            if(payload === "atqAsc" || "atqDesc"){
                const ataque = [...state.pokemons]
                const atqCopia = [...state.copia]
                return{

                    ...state,

                    pokemons:

                    payload === "atqAsc"

                    ? ataque.sort((a, b) => a.ataque - b.ataque)
                    : ataque.sort((a, b) => b.ataque - a.ataque),

                    copia:

                    payload === "atqAsc"

                    ? atqCopia.sort((a,b) => a.ataque - b.ataque)
                    : atqCopia.sort((a, b) => a.ataque - b.ataque)

                }
            }
            if(payload === "AZasc" || payload === "AZDesc"){
                const ABC = [...state.pokemons]
                const ABCopia = [...state.copia]
                return {

                    ...state,

                    pokemons:

                    payload === "AZasc"

                    ? ABC.sort((a, b) => a.nombre.localeCompare(b.nombre))
                    : ABC.sort((a, b) => b.nombre.localeCompare(a.nombre)),

                    copia: 

                    payload  ==="AZasc"

                    ? ABCopia.sort((a , b)=> a.nombre.localeCompare(b.nombre))
                    : ABCopia.sort((a, b) => b.nombre.localeCompare(a.nombre)),

                }
            }if(payload === "id"){
                return {

                    ...state,
                    pokemons: state.origen,
                    copia: state.origen

                }
            }
        case FILTER:

            if(payload==="api"){

                const allApiPokemons = state.copia.filter(
                    (p) => typeof p.id === "number"
                );

                return {...state, pokemons: allApiPokemons}

            }

            if(payload==="Base de Datos"){

                const allDbPokemons = state.copia.filter(
                    (p) => typeof p.id === "string"
                );

                return {...state, pokemons: allDbPokemons}

            } else {

                return {

                    ...state,
                    pokemons: state.copia

                }
            }

        case FILTER_TYPE: 

            if(payload !== "All Pokemons"){

                const pokemonsFiltered = state.origen.filter(
                    (p)=> p.tipoPokemon.includes(payload));

                const pokemonsFilteredDb = state.origen.filter(
                    (p)=> p.tipoPokemon.some((type)=> type.nombre === payload));

                const totalPokemons = [...pokemonsFiltered, ...pokemonsFilteredDb]
                }
            return{

            }
        case POKEMON_POST:
            return{
                ...state
            }
        default: 

        return {...state}    
    }
}

export default rootReducer;