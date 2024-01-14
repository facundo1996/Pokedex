<template>
  <div class="container">
    <div class="pokemon-container mt-3 justify-content-center">
      <PokeCard v-for="(pokemon, index) in allPokemons" :key="index" :pokemonURL='pokemon.url' />
    </div>
  </div>
</template>

<script lang="ts">
import PokeCard from '../components/PokeCard.vue'
import pokemons from '../store/pokemons'
export default {
  name: "HomePage",
  data() {
    return {
      allPokemons: [],
      error: ''
    }
  },
  components: {
    PokeCard
  },
  created() {
    pokemons.getAllPokemons()
      .then(res => {
        this.allPokemons = res.data.results
      })
      .catch(err => {
        this.error = err
      })
  }
}
</script>
<style scoped>
.pokemon-container {
  display: grid;
  grid-template-columns: repeat(auto-fit, 300px);
  grid-gap: 10px;
}
</style>