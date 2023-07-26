export const pokemonReducer = (state, action) => {
  switch (action.type) {
    case "[Pokemon] - Get from PokeApi":
      return {
        pokemon: action.payload.map((pokemon) => ({
          ...pokemon,
          isFav: false,
        })),
      };
    case "[Pokemon] - Add to fav":
      return {
        pokemon: state.pokemon.map((pokemon) =>
          pokemon.name === action.payload
            ? { ...pokemon, isFav: !pokemon.isFav }
            : pokemon
        ),
      };
    default:
      return state;
  }
};
