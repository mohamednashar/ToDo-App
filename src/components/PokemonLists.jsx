import React from "react";

const PokemonLists = ({ pokemon }) => {
  return (
    <div>
      {pokemon.map((p) => (
        <div key={p}>{p}</div>
      ))}
    </div>
  );
};

export default PokemonLists;
