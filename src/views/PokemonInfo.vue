<template>
  <div class="container">
    <div class="pokemon-container mt-3 justify-content-center">
      
        
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: "PokemonInfo",
  data(){
    return {
      pokemon: [],
      pokemonId: ''
    }
  },
  components: {
  },
  mounted() {
    this.pokemonId = this.$route.params.id
    console.log(this.pokemonId)
  }
}
</script>
<style scoped>
</style>