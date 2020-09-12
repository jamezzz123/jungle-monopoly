import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    PlayerImages: [
      {
        id: "cat",
        imageUrl: require("@/assets/svg/003-cat.svg")
      },
      {
        id: "owl",
        imageUrl: require("@/assets/svg/001-owl.svg")
      },
      {
        id: "dog",
        imageUrl: require("@/assets/svg/004-dog.svg")
      },
      {
        id: "cow",
        imageUrl: require("@/assets/svg/005-cow.svg")
      },
      {
        id: "panda",
        imageUrl: require("@/assets/svg/006-panda.svg")
      },
      {
        id: "pig",
        imageUrl: require("@/assets/svg/008-pig.svg")
      },
      {
        id: "monkey",
        imageUrl: require("@/assets/svg/009-monkey.svg")
      },
      {
        id: "bear",
        imageUrl: require("@/assets/svg/010-bears.svg")
      }
    ],
    players: [
      {
        name: "james",
        balance: "0.00",
        playerPiece: {
          id: "panda",
          imageUrl: require("@/assets/svg/006-panda.svg")
        },
        currentPosition: 0
      },
      {
        name: "john",
        balance: "0.00",
        playerPiece: {
          id: "monkey",
          imageUrl: require("@/assets/svg/009-monkey.svg")
        },
        currentPosition: 0
      },
      {
        name: "jane",
        balance: "0.00",
        playerPiece: {
          id: "cat",
          imageUrl: require("@/assets/svg/003-cat.svg")
        },
        currentPosition: 0
      }
    ]
  },
  mutations: {},
  actions: {},
  modules: {}
});
