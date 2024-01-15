<template>
  <div class="container">

    <div class="h1 text-center mt-5" v-if="error">
      {{ error }}
    </div>
    <div v-if="loading && !error" class="mt-5 d-flex justify-content-center align-items-center flex-column">
      <div class="ball"></div>
      <h4 class="mt-4">Loading...</h4>
    </div>

    <div v-if="!loading && !error" class="table-container p-4 mt-4">
      <div class="row">
        <div class="col-12 col-md-4 d-flex flex-column justify-content-center align-items-center">
          <h4 class="pokemon-name">{{ pokemon.name }} #{{ pokemon.id }}</h4>
          <img style="width: 200px;"
            :src="`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/` + pokemon.id + `.png`"
            alt="">
        </div>

        <div class="col-12 col-md-8 d-flex flex-column justify-content-around align-items-start info-pokemon">
          <div class="mt-3 mt-md-0">
            <b>Type:</b>
            <span>
              {{ types }}
            </span>
          </div>
          <div class="mt-3 mt-md-0">
            <b>Weight:</b>
            <span>
              {{ pokemon.weight }}
            </span>
          </div>
          <div class="mt-3 mt-md-0">
            <b>Description:</b>
            <span>
              {{ spanishDescription.flavor_text }}
            </span>
          </div>
        </div>

      </div>
    </div>
    <TableMoves v-if="!loading && !error" :moves="moves" :gif="gif" />
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
      moves: [],
      gif: '',
      error: '',
      loading: true
    }
  },
  components: {
    TableMoves
  },
  created() {
    this.pokemonId = this.$route.params.id
    pokemons.getPokemon(`https://pokeapi.co/api/v2/pokemon/` + this.pokemonId)
      .then(res => {
        this.pokemon = res.data
        this.types = this.pokemon.types.map(type => type.type.name).join(',')
        this.moves = res.data.moves
        this.gif = res.data.sprites.other.showdown.front_default
        this.loading = false
      })
      .catch(err => {
        this.error = err
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

span {
  font-weight: 500;
  margin-left: 10px;
}

.info-pokemon {
  font-size: 22px;
}

.pokemon-name {
  font-size: 26px;
}</style>