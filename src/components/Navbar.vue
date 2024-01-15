<template>
  <header>
    <nav class="navbar">
      <div class="container-fluid d-flex justify-content-center align-items-center title-navbar">
        <img src="../../public/pokedex-logo.png" alt="">
      </div>
    </nav>
  </header>
</template>

<script lang="ts">
export default {
  name: "Navbar",
}
</script>

<style scoped>
.title-navbar{
  -webkit-text-stroke: 10px #2a75bb;
  color: #ffcb05;
  font-size: 100px;
}
nav{
  background-color: #ef5450;
}
.navbar{
  border-bottom: 2px solid black;
}
</style>