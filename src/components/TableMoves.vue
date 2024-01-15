<template>
  <div class="moves-container">
    <table class="table table-striped">
      <thead>
        <tr>
          <th scope="col">#</th>
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
  props: ['moves'],
}
</script>
<style scoped>
.moves-container{
  height: 500px;
  overflow-y: scroll;
  margin-top: 30px;
}
</style>