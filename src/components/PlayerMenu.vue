<template>
  <v-list-item style="padding:5px">
    <v-list-item-content class="elevation-6 player-rounded" style="padding:5px">
      <div
        class="d-flex flex-row justify-space-between align-center player_item"
      >
        <img class="player_img" :src="player.playerPiece.imageUrl" />
        <div class="d-flex flex-column player_text">
          <h6 class="player_text_name">{{ player.name }}</h6>
          <h5 class="player_text_money">&#8361;{{ player.balance }}</h5>
        </div>
      </div>
    </v-list-item-content>
  </v-list-item>
</template>

<script>
export default {
  name: "PlayerMenu",
  props: ["player"]
};
</script>

<style scoped>
.player_item {
  width: 100%;
}

.player_img {
  width: 25%;
}
.player_text {
  padding: 10px;
  width: 100%;
}

.player_text_money {
  font-size: 25px;
  font-weight: 400;
}

.player_text_name {
  font-size: 1rem;
  font-weight: 400;
  line-height: normal;
}
.player-rounded {
  border-radius: 15px;
}
</style>
