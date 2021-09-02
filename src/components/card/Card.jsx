/* eslint-disable react/prop-types */
import { PokemonCard } from "./style";

export function Card({ img, id, name, type1, type2}) {
  return (
    <>
      <PokemonCard>
        <div className="card-figure">
          <img src={img} alt="" />
        </div >
        <p>{id}</p>
        <h2>{name}</h2>
        <div className="type">
          <span>{type1} {type2}</span>
        </div>
      </PokemonCard>
    </>
  );
}
