<template>
  <router-link class="text-decoration-none" :to="'/' + pokemon?.id">

    <div class="poke-card-container bg-light rounded">
      <div class="w-100 d-flex justify-content-center align-items-center bg-light bg-pokeball">
        <img style="width: 150px;" :src="pokemon.sprites?.front_default" alt="">
      </div>

      <div class="info-pokemon-container">
        <div class="w-100 d-flex justify-content-between align-items-center">
          <h4>
            {{ pokemon.name }}
          </h4>
          <div class="d-flex justify-content-center align-items-center h5 text-dark">
            <img height="20" class="me-1" src="../../public/peso.png" alt="">{{ pokemon.weight }}
          </div>
        </div>
        <div class="d-flex justify-content-center text-center gap-2">
          <div class="w-50 type-container" v-for="(type, index) in pokemon.types" :key="index">
            {{ type.type.name }}
          </div>
        </div>
      </div>
    </div>
  </router-link>
</template>

<script lang="ts">
import pokemons from '../store/pokemons'
export default {
  name: "PokeCard",
  data() {
    return {
      pokemon: []
    }
  },
  props: ['pokemonURL'],
  created() {
    pokemons.getPokemon(this.pokemonURL)
      .then(res => {
        this.pokemon = res.data
      })
  }
}
</script>

<style scoped>
.poke-card-container {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 15px;
  min-width: 300px;
  min-height: 258px;
}

.info-pokemon-container {
  width: 100%;
  min-height: 60px;
  padding: 10px;
  box-sizing: border-box;
  border-radius: 5px;
  background-color: #fcfcfc;
  box-shadow: 1px 1px 7px -2px #000;
}

.bg-pokeball {
  background-image: url('../../public/pokeball.png');
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
}

h4 {
  font-size: 22px;
  color: black;
}

h4::first-letter {
  text-transform: uppercase;
}

.type-container {
  background-color: var(--type);
  color: white;
  font-weight: bold;
}

.type-container::first-letter {
  text-transform: uppercase;
}</style>