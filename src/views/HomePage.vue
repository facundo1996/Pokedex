<template>
  <div class="container">
    <div class="pokemon-container mt-3 justify-content-center">
      <PokeCard v-for="(pokemon, index) in allPokemons" :key="index" :pokemonURL='pokemon.url' />
    </div>
    <div class="d-flex justify-content-center my-5">
      <img class="pokeball-logo" src="../../public/pokeball-open.png" v-if="morePages" v-on:click="nextPage" >
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
      error: '',
      morePages: '',
    }
  },
  components: {
    PokeCard
  },
  methods:{
    nextPage(){
      pokemons.getNextPage(this.morePages)
      .then(res => {
        this.allPokemons = this.allPokemons.concat(res.data.results)
        this.morePages = res.data.next
      })
      .catch(err => {
        this.error = err
      })
    }
  },
  created() {
    pokemons.getAllPokemons()
      .then(res => {
        this.allPokemons = res.data.results
        this.morePages = res.data.next
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
.pokeball-logo{
  width: 100px;
}
.pokeball-logo:hover{
  cursor: pointer;
}
</style>