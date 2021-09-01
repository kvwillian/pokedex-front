import axios from 'axios';

export const API = 'https://raw.githubusercontent.com/Biuni/PokemonGO-Pokedex/master/pokedex.json';

export const fetchPokemons = async () => {
  const response = await axios.get(API);
  return response.data.pokemon;
};
