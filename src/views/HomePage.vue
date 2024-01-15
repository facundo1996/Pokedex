<template>
  <div class="container">
    <div v-if="!loading && !error" class="pokemon-container mt-3 justify-content-center">
      <PokeCard v-for="(pokemon, index) in allPokemons" :key="index" :pokemonURL='pokemon.url' />
    </div>
    <div v-if="!loading && !error" class="d-flex justify-content-center my-5">
      <img class="pokeball-logo" src="../../public/pokeball-open.png" v-if="morePages" v-on:click="nextPage">
    </div>
    <div v-if="loading && !error" class="mt-5 d-flex justify-content-center align-items-center flex-column">
      <div class="ball"></div>
      <h4 class="mt-4">Loading...</h4>
    </div>
    <div class="h1 text-center mt-5" v-if="error">
      {{ error }}
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
      morePages: '',
      error: '',
      loading: true,
    }
  },
  components: {
    PokeCard
  },
  methods: {
    nextPage() {
      this.loading = true
      pokemons.getNextPage(this.morePages)
        .then(res => {
          this.allPokemons = this.allPokemons.concat(res.data.results)
          this.morePages = res.data.next
          this.loading = false

          this.$nextTick(() => {
            window.scrollTo({
              top: document.documentElement.scrollHeight,
              behavior: 'smooth',
            });
          });

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
        this.loading = false
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

.pokeball-logo {
  width: 100px;
}

.pokeball-logo:hover {
  cursor: pointer;
}
</style>