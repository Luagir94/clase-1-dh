import { useState, useEffect, useContext } from "react";

import { httpService } from "./services/index";

import Layout from "./components/layout";
import { PokemonProvider, PokemonContext } from "./context";

function App() {
  const { pokemon } = useContext(PokemonContext);
  // const [pokemons, setPokemons] = useState([]);

  // useEffect(() => {
  //   const getPokemons = async () => {
  //     const { data } = await httpService.get("/pokemon?limit=151");
  //     setPokemons(data.results);
  //   };
  //   getPokemons();
  // }, []);

  return <Layout pokemons={pokemon} />;
}

export default App;
