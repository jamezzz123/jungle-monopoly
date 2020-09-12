<template>
  <div>
    <v-container class="fill-height">
      <Board />
    </v-container>
  </div>
</template>

<script>
import Board from "../components/Board";
export default {
  name: "Arena",
  components: {
    Board
  }
};
</script>
<style></style>
