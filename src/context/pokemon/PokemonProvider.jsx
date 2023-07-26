import { useEffect, useReducer, useState } from "react";
import { httpService } from "../../services/index";
import { PokemonContext } from "./PokemonContext";
import { pokemonReducer } from "./pokemonReducer";

const POKEMON_INITIAL_STATE = {
  pokemon: [],
};

export const PokemonProvider = ({ children }) => {
  const [state, dispatch] = useReducer(pokemonReducer, POKEMON_INITIAL_STATE);

  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    const getPokemons = async () => {
      const { data } = await httpService.get("/pokemon?limit=151");
      setPokemons(data.results);
    };
    getPokemons();
  }, []);

  const addPokemonToFav = (pokemon) => {
    dispatch({ type: "[Pokemon] - Add to fav", payload: pokemon });
    console.log(state.pokemon);
  };

  useEffect(() => {
    const getPokemons = async () => {
      const { data } = await httpService.get("/pokemon?limit=151");
      dispatch({ type: "[Pokemon] - Get from PokeApi", payload: data.results });
    };
    getPokemons();
  }, []);

  return (
    <PokemonContext.Provider
      value={{
        //Pokemons del useState
        pokemons,
        //Spread de Pokemons del useReducer
        ...state,
        addPokemonToFav,
      }}
    >
      {children}
    </PokemonContext.Provider>
  );
};
