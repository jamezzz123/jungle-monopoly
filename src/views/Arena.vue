<template>
  <div>
    <v-container class="fill-height">
      <Board />
    </v-container>
  </div>
</template>

<script>
import Board from "@/components/Board.vue";
export default {
  name: "Arena",
  components: {
    Board
  }
};
</script>
<style></style>
