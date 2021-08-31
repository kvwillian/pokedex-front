import axios from 'axios';

export default baseURL = "https://raw.githubusercontent.com/Biuni/PokemonGO-Pokedex/master/pokedex.json";

const api = axios.create({
    baseURL: baseURL,
})

export default api;
