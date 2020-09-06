<template>
  <div>
    <div style="position:relative;z-index:3">
      <img
        class=""
        style="z-index:3"
        :src="require('@/assets/svg/003-cat.svg')"
        width="50px"
        alt="player image"
      />
    </div>
    <div ref="bubblePulse" class="bubble-pulse"></div>
    <!-- <v-img src="@/assets/svg/003-cat.svg"></v-img> -->
  </div>
</template>

<script>
export default {
  name: "PlayerImage",
  mounted() {
    // const { bubblePulse} = this.$refs;
    // let tl =this.$anime.timeline({
    //   targets:bubblePulse,
    //   loop:true
    // })
    // tl.add({
    //   duration:1000,
    //   opacity:0.7,
    //   scale:0.9,
    // })
    // tl.add({
    //   scale: 3,
    //   opacity: 0,
    //   duration:900
    // },'-=150')
  }
};
</script>

<style>
.bubble-pulse {
  position: absolute;
  z-index: 2;
  height: 80px;
  width: 80px;
  top: 85%;
  left: 85%;
  margin-top: -60px;
  margin-left: -60px;
  background: #848383e6;
  border-radius: 50%;
  opacity: 0;
  transform: scale(0);
}
</style>
