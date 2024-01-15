<template>
  <div class="container">


    <div class="table-container mt-4">
      <div class="row">
        <div class="col-3 d-flex flex-column justify-content-center align-items-center">
          <h4>{{ pokemon.name }} #{{ pokemon.id }}</h4>
          <img style="width: 150px;"
            :src="`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/` + pokemon.id + `.png`"
            alt="">
        </div>
        <div class="col-6 d-flex flex-column justify-content-around align-items-start">
          <div><b>Type:</b> {{ types }} </div>
          <div><b>Weight:</b> {{ pokemon.weight }}</div>
          <div><b>Description:</b> {{ spanishDescription.flavor_text }}</div>
        </div>
      </div>
    </div>
    <TableMoves :moves="moves" />
  </div>
</template>

<script lang="ts">
import pokemons from '../store/pokemons'
import TableMoves from '../components/TableMoves.vue'
export default {
  name: "PokemonInfo",
  data() {
    return {
      pokemon: [],
      pokemonId: '',
      types: '',
      spanishDescription: '',
      moves: []
    }
  },
  components:{
    TableMoves
  },
  created() {
    this.pokemonId = this.$route.params.id
    pokemons.getPokemon(`https://pokeapi.co/api/v2/pokemon/` + this.pokemonId)
      .then(res => {
        this.pokemon = res.data
        this.types = this.pokemon.types.map(type => type.type.name).join(',')
        this.moves = res.data.moves
      })
      .catch(err => {
        console.log("ERROR")
        console.log(err)
      })
    pokemons.getPokemon(`https://pokeapi.co/api/v2/pokemon-species/` + this.pokemonId)
      .then(res => {
        this.spanishDescription = res.data.flavor_text_entries.find(entry => entry.language.name === 'es');
      })
  }
}
</script>

<style scoped>
.table-container {
  border: 2px solid black;
  border-radius: 8px;
}

h4::first-letter {
  text-transform: uppercase;
}

h4 {
  font-weight: bold;
}
</style>