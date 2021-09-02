/* eslint-disable consistent-return */
/* eslint-disable array-callback-return */
/* eslint-disable no-else-return */
import { useState, useEffect } from "react";
import axios from "axios";
import { Container, Form, CardContainer } from "./style";
import inputSearchImg from '../../assets/input-search-bg.png';
import { Card } from "../card/Card";

export function Dashboard() {
  const [search, setSearch] = useState("");
  const [pokemonList, setPokemonList] = useState([]);

  const handleSearch = (e) => {
    setSearch(e.target.value);
  }

  useEffect(() => {
    axios.get('https://raw.githubusercontent.com/Biuni/PokemonGO-Pokedex/master/pokedex.json').then(res => {
      const pokemons = res.data.pokemon;
      setPokemonList(pokemons);
    })
  }, []);

  return (
    <>
    <Container>
        <header>
          <h1>Pokédex</h1>
        </header>
        <Form>
          <div className="search-area">
            <h1>Name or Number</h1>
            <div className="input-field">
              <input
                value={search}
                onChange={handleSearch}
                placeholder="Busque por pokemon"
              />
              <button type="submit" aria-label="Botão de busca">
                <img src={inputSearchImg} alt="Busca" />
              </button>
            </div>
          </div>
        </Form>
        <CardContainer>
            {pokemonList.filter((pokemon) => {
              if (search === "") {
                return pokemon
              } else if (pokemon.name.toLowerCase().includes(search.toLowerCase())) {
                return pokemon
              }
            }).map(pokemon => (
              <Card
                key={pokemon.id}
                id={pokemon.num}
                img={pokemon.img}
                name={pokemon.name}
                type1={pokemon.type[0]}
                type2={pokemon.type[1]}
              />
            ))}
        </CardContainer>
      </Container>
    </>
  );
}
