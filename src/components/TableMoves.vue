<template>
  <div class="moves-container">
    <table class="table table-striped">
      <thead>
        <tr>
          <th scope="col"><img height="40px" :src="gif" alt=""></th>
          <th scope="col">Moves</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(move, index) in moves" :key="index">
          <th scope="row">{{ index }}</th>
          <td>{{ move.move.name }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script lang="ts">
export default {
  name: "TableMoves",
  data() {
    return {

    }
  },
  props: ['moves', 'gif'],
}
</script>
<style scoped>
.moves-container{
  max-height: 500px;
  overflow-y: scroll;
  margin-top: 30px;
  border: 2px solid black;
  border-radius: 13px;
}
.moves-container::-webkit-scrollbar{
  display: none;
}
</style>