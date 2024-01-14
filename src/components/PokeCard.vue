<template>
  <div class="poke-card-container bg-light rounded">
    <div class="w-100 d-flex justify-content-center align-items-center bg-light bg-pokeball">
      <img style="width: 150px;" :src="pokemon.sprites?.front_default" alt="">
    </div>

    <div class="info-pokemon-container">
      <div class="w-100 d-flex justify-content-between align-items-center">
        <h4>
          {{ pokemon.name }}
        </h4>
        <div class="d-flex justify-content-center align-items-center h5">
          <img height="20" class="me-1" src="../../public/peso.png" alt="">{{ pokemon.weight }}
        </div>
      </div>
      <div class="d-flex justify-content-center text-center gap-2">
        <div class="w-50 type-container" v-for="(type,index) in pokemon.types" :key="index">
          {{ type.type.name }}
        </div>
      </div>
    </div>
  </div>
</template>


<script lang="ts">
import axios from 'axios'
export default {
  name: "PokeCard",
  data() {
    return {
      pokemon: []
    }
  },
  props: ['pokemonId'],
  created() {
    axios
      .get(this.pokemonId)
      .then(res => {
        this.pokemon = res.data
        console.log(res.data)
      })
      .catch(err => {
        console.log("ERROR")
        console.log(err)
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
.bg-pokeball{
  background-image: url('../../public/pokeball.png');
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
}

h4 {
  font-size: 22px;
  text-align: center;
}

h4::first-letter {
  text-transform: uppercase;
}
.type-container{
  background-color: #524a4a;
  color: white;
  font-weight: bold;  
}
.type-container::first-letter {
  text-transform: uppercase;
}
</style>