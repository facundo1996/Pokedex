import axios from "axios"

export default {
  getAllPokemons: () => {
    return axios.get('https://pokeapi.co/api/v2/pokemon/?limit=20')
  },
  getPokemon: (pokemonURL) => {
    return axios.get(pokemonURL)
  },
}

