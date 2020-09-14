<template>
  <v-app id="inspire">
    <v-navigation-drawer v-model="drawerRight" app clipped right :width="320">
      <v-list dense>
        <v-list-item @click.stop="right = !right">
          <v-list-item-action>
            <v-icon>mdi-exit-to-app</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Open Temporary Drawer1</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <PlayerMenu
          v-for="(item, index) in players"
          :key="index"
          :player="item"
        />
      </v-list>
    </v-navigation-drawer>

    <v-app-bar app clipped-right color="grey darken-3" dark>
      <v-btn icon large>
        <v-avatar size="32px" item>
          <v-img
            :src="require('@/assets/svg/001-gorilla.svg')"
            alt="Vuetify"
          ></v-img
        ></v-avatar>
      </v-btn>
      <v-toolbar-title class="ml-0 pl-4">Toolbar</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-text-field
        flat
        solo-inverted
        hide-details
        prepend-inner-icon="mdi-magnify"
        label="Search"
        class="hidden-sm-and-down"
      ></v-text-field>
      <v-spacer></v-spacer>

      <!-- For the Theming  -->
      <v-icon>mdi-weather-sunny</v-icon>
      <v-list-item-action class="ml-2">
        <v-switch id="themeSwitcher" v-model="isDark" inset></v-switch>
      </v-list-item-action>
      <v-icon>mdi-weather-night</v-icon>
      <!--  -->

      <v-btn icon>
        <v-icon>mdi-apps</v-icon>
      </v-btn>
      <v-btn icon>
        <v-icon>mdi-bell</v-icon>
      </v-btn>
      <v-app-bar-nav-icon
        @click.stop="drawerRight = !drawerRight"
      ></v-app-bar-nav-icon>
    </v-app-bar>

    <v-main>
      <vue-page-transition name="overlay-right">
        <router-view></router-view>
      </vue-page-transition>
    </v-main>

    <v-navigation-drawer v-model="right" fixed right temporary hide-overlay>
      <h1>History Log</h1></v-navigation-drawer
    >

    <v-footer app color="grey darken-3" class="white--text">
      <span>Vuetify</span>
      <v-spacer></v-spacer>
      <span>&copy; {{ new Date().getFullYear() }}</span>
    </v-footer>
  </v-app>
</template>

<script>
// import Board from "./components/Board";
import PlayerMenu from "./components/PlayerMenu";

export default {
  name: "App",

  components: {
    // Board,
    PlayerMenu
  },
  props: {
    source: String
  },
  data: () => ({
    // drawer: null,
    drawerRight: false,
    right: false,
    // for dark theme
    isDark: false
  }),
  computed: {
    players() {
      console.log(this.$store.state.players);
      return this.$store.state.players;
    }
  },
  watch: {
    isDark() {
      this.$vuetify.theme.dark = this.isDark;
      
    }
  }
};
</script>

<style lang="scss">
// .v-application {
//   font-family: "Oswald", sans-serif !important;
//   text-transform: uppercase;
// }



// .v-application {
  //  font-family: $body-font-family, sans-serif !important;
    // .title { // To pin point specific classes of some components
    //    font-family: $title-font, sans-serif !important;
    // }
//  }


</style>
