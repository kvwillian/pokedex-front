import { fetchPokemons } from '../services/api';
import axios from 'axios';

jest.mock('axios');

describe('fetchData', () => {
  it('fetches successfully data from API', async () => {
    const data = {
      results: [
        {
          avg_spawns: 69,
          candy: "Bulbasaur Candy",
          candy_count: 25,
          egg: "2 km",
          height: "0.71 m",
          id: 1,
          img: "http://www.serebii.net/pokemongo/pokemon/001.png",
          multipliers: [1.58],
          name: "Bulbasaur",
          next_evolution: [{num: "002", name: "Ivysaur"}],
          num: "001",
          spawn_chance: 0.69,
          spawn_time: "20:00",
          type: ["Grass", "Poison"],
          weaknesses: ["Fire", "Ice", "Flying", "Psychic"],
          weight: "6.9 kg"
        }
      ]
    };

    axios.get.mockImplementationOnce(() => Promise.resolve(data));

    await expect(fetchPokemons).resolves.toEqual(data);
  });
  it('fetches erroneously data from an API', async () => {
    const errorMessage = 'Network Error';

    axios.get.mockImplementationOnce(() => Promise.reject(new Error(errorMessage)));

    await expect(fetchPokemons).rejects.toThrow(errorMessage);
  });
})
