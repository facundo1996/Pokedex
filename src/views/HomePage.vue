<template>
  <div class="container">
    <div class="pokemon-container mt-3 justify-content-center">
      <PokeCard v-for="(pokemon, index) in allPokemons" :key="index" :pokemonId='pokemon.url' />
    </div>
  </div>
</template>

<script lang="ts">
import axios from 'axios'
import PokeCard from '../components/PokeCard.vue'
export default {
  name: "HomePage",
  data(){
    return {
      allPokemons: []
    }
  },
  components: {
    PokeCard
  },
  created() {
    axios
      .get('https://pokeapi.co/api/v2/pokemon/?limit=20')
      .then(res => {
        this.allPokemons = res.data.results
      })
      .catch(err => {
        console.log("ERROR")
        console.log(err)
      })
  }
}
</script>
<style scoped>
  .pokemon-container{
    display: grid;
    grid-template-columns: repeat(auto-fit, 300px);
    grid-gap: 10px;
  }
</style>