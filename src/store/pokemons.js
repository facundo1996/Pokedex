import axios from "axios"

export default {
  getAllPokemons: () => {
    return axios.get('https://pokeapi.co/api/v2/pokemon/?offset=0&limit=20')
  },
  getNextPage: (next) => {
    return axios.get(next)
  },
  getPokemon: (pokemonURL) => {
    return axios.get(pokemonURL)
  },
}

