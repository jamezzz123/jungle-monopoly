<template>
  <div>
    <div id="view">
      <div class="dice" id="dice1" ref="dice1">
        <div class="diceFace dice_front">
          <div
            class="dots"
            style="justify-content: space-evenly; flex-direction: column;"
          >
            <div class="dots__size" style="margin: 0 auto"></div>
          </div>
        </div>
        <div class="diceFace dice_right">
          <div class="dots" style="justify-content: space-between;">
            <div class="dots__size"></div>
            <div class="dots__size" style="align-self: flex-end;"></div>
          </div>
        </div>
        <div class="diceFace dice_back">
          <div class="dots" style="justify-content: space-evenly">
            <div class="dots__size"></div>
            <div class="dots__size"></div>
            <div class="dots__size"></div>
            <div class="dots__size"></div>
            <div class="dots__size"></div>
            <div class="dots__size"></div>
          </div>
        </div>
        <div class="diceFace dice_left">
          <div class="dots" style="justify-content: space-around">
            <div class="dots__size"></div>
            <div class="dots__size"></div>
            <div class="dots__size"></div>
            <div class="dots__size"></div>
          </div>
        </div>
        <div class="diceFace dice_top">
          <div class="dots" style="flex-wrap: nowrap;">
            <div class="dots__size"></div>
            <div class="dots__size" style="align-self:center"></div>
            <div class="dots__size" style="align-self:flex-end"></div>
          </div>
        </div>
        <div class="diceFace dice_bottom">
          <div class="dots" style="justify-content: space-around">
            <div class="dots__size"></div>
            <div class="dots__size"></div>
            <div class="dots__size" style="margin:0 50px"></div>
            <div class="dots__size"></div>
            <div class="dots__size"></div>
          </div>
        </div>
      </div>
      <div class="dice" id="dice2" ref="dice2">
        <div class="diceFace dice_front">
          <div
            class="dots"
            style="justify-content: space-evenly; flex-direction: column;"
          >
            <div class="dots__size" style="margin: 0 auto"></div>
          </div>
        </div>
        <div class="diceFace dice_right">
          <div class="dots" style="justify-content: space-between;">
            <div class="dots__size"></div>
            <div class="dots__size" style="align-self: flex-end;"></div>
          </div>
        </div>
        <div class="diceFace dice_back">
          <div class="dots" style="justify-content: space-evenly">
            <div class="dots__size"></div>
            <div class="dots__size"></div>
            <div class="dots__size"></div>
            <div class="dots__size"></div>
            <div class="dots__size"></div>
            <div class="dots__size"></div>
          </div>
        </div>
        <div class="diceFace dice_left">
          <div class="dots" style="justify-content: space-around">
            <div class="dots__size"></div>
            <div class="dots__size"></div>
            <div class="dots__size"></div>
            <div class="dots__size"></div>
          </div>
        </div>
        <div class="diceFace dice_top">
          <div class="dots" style="flex-wrap: nowrap;">
            <div class="dots__size"></div>
            <div class="dots__size" style="align-self:center"></div>
            <div class="dots__size" style="align-self:flex-end"></div>
          </div>
        </div>
        <div class="diceFace dice_bottom">
          <div class="dots" style="justify-content: space-around">
            <div class="dots__size"></div>
            <div class="dots__size"></div>
            <div class="dots__size" style="margin:0 50px"></div>
            <div class="dots__size"></div>
            <div class="dots__size"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import anime from 'animejs/lib/anime.es.js';
// import { gsap } from "gsap";
import { random,shuffle } from "lodash"; //we are gona have to find a way to reduce
//the size of the bundle because of lodash

export default {
  data: () => ({
    diceFaceNumber: {
      1: [0, 0], //Y against X axis [Y,X] which hold the degree of there rotation
      2: [-90, 0],
      3: [0, -90],
      4: [90, 0],
      5: [0, 90],
      6: [180, 0]
    },
    dice1roll: "",
    dice2roll: ""
  }),

  methods: {
    diceRoll:function(elem){
      let rotationDeg = [90, -90, 180, -180, 270, 360]; // all possible degree
      let randomDiceRoll = random(1, 6);

      let dice = this.$anime.timeline({
      targets: elem,
      loop: false,
      // easing:"inElastic"
    });

    dice.add({
      rotateX: [
        { value: rotationDeg[random(rotationDeg.length - 1)] },
        { value: rotationDeg[random(rotationDeg.length - 1)] },
        { value: rotationDeg[random(rotationDeg.length - 1)] },
        { value: rotationDeg[random(rotationDeg.length - 1)] },
        { value: rotationDeg[random(rotationDeg.length - 1)] }
      ],
      rotateY: [
        { value: rotationDeg[random(rotationDeg.length - 1)] },
        { value: rotationDeg[random(rotationDeg.length - 1)] },
        { value: -rotationDeg[random(rotationDeg.length - 1)] },
        { value: rotationDeg[random(rotationDeg.length - 1)] },
        { value: rotationDeg[random(rotationDeg.length - 1)] }
      ],
      rotateZ: 360,
      rotate: 360,
      direction: "alternate"
    });
    dice.add({
      rotateY: this.diceFaceNumber[randomDiceRoll][0],
      rotateX: this.diceFaceNumber[randomDiceRoll][1],
      rotateZ: 360,
      rotate: 360,
      direction: "alternate"
    });

    return randomDiceRoll;

    },

    randomFace:function(){
      let diceFaces = [1,2,3,4,5,6];
      let shuffledFaces  = shuffle(diceFaces);
      console.log(shuffledFaces);
      return shuffledFaces[random(shuffledFaces.length -1)];
    }
  },

  mounted() {
    let { dice1,dice2} = this.$refs;
    this.dice1roll = this.diceRoll(dice1);
    this.dice2roll = this.diceRoll(dice2);
  }
};
</script>

<style scoped>
@import "../assets/css/dice.css";
/*#dice1{
    will-change: transform;
    transform:rotate(0.01deg);  
    translateZ: 0;
}*/
</style>
