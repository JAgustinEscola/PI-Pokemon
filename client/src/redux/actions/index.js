import axios from "axios"
import { GET_POKEMONS, GET_POKEMONS_NAME, GET_POKEMONS_ID, GET_POKEMONS_TYPE, ORDER, FILTER, FILTER_TYPE, POKEMON_POST } from "./actionType"

const getPokemons = ()=>{
    return async (dispatch)=>{

        let json = await axios.get("http://loaclhost:3001/characters")
        return dispatch({

            type: GET_POKEMONS,
            payload: json.data

        });
    };
};

const getPokemonsName = (name)=>{
    return async (dispatch) => {
        try {
            let json = await axios.get(`http://loaclhost:3001/pokemons/?name=${name}`)
            return dispatch ({
                type: GET_POKEMONS_NAME,
                payload : json.data
            })
        } catch (error) {
            "Coloque un nombre valido"
        }
    };
};

const getPokemonsId = (id)=>{
    return async (dispatch) => {
        let json = await axios.get(`http://loaclhost:3001/pokemons/${id}`)
        return dispatch({
            type: GET_POKEMONS_ID,
            payload: json.data
        });
    };
};

const getPokemonsType = () => {
    return async (dispatch) => {
        let json = await axios.get("http://loaclhost:3001/types")
        return dispatch({
            type: GET_POKEMONS_TYPE,
            payload: json.data
        });
    };

};

const createPokemons = (pokemon)=>{
    return async (dispatch)=>{
        let json = await axios.post("http://loaclhost:3001/pokemons", pokemon)
        return {
            type: POKEMON_POST,
            payload:json.data
        };
    };
};

const filter = (filter)=>{
    return {
        type: FILTER,
        payload: filter
    };
};

const filterType = (filter)=>{
    return {
        type: FILTER_TYPE,
        payload: filter
    };
};

const order = (order)=>{
    return {
        type: ORDER,
        payload: order
    }
}