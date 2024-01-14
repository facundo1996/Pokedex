<template>
  <div class="container">
    <div class="pokemon-card-container">
      <PokeCard />
    </div>
  </div>
</template>

<script lang="ts">
  import PokeCard from '../components/PokeCard.vue'
  export default {
    name: "HomePage",
    components: {
      PokeCard
    }
  }
</script>