<template>
  <header>
    <nav class="navbar">
      <div v-on:click="goPage" class="container-fluid d-flex justify-content-center align-items-center title-navbar">
        <img src="../../public/pokedex-logo.png" alt="">
      </div>
    </nav>
  </header>
</template>

<script lang="ts">
import router from '@/router';
router
export default {
  name: "Navbar",
  methods: {
    goPage(){
      router.push({ path: '/' })
    }
  }
}
</script>

<style scoped>
.title-navbar {
  -webkit-text-stroke: 10px #2a75bb;
  color: #ffcb05;
  font-size: 100px;
  cursor: pointer;
}

nav {
  background-color: #ef5450;
}

.navbar {
  border-bottom: 2px solid black;
}

.link {
  width: min-content;
}</style>