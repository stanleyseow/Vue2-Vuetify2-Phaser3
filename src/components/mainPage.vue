<template>
  <div class="test">
    <h3>Introduction</h3>
    <v-container xs12 sm12 md16 lg12>
      <v-row>
        <v-col>
          <v-card class="pa-2" variant="outlined">
            Welcome to SVT Maker demo page, this page will showcase all my
            projects primariry focusing on Phaser3, a popular JavaScript 2D Game
            Engine Framework. The page was written using Vue JS frontend
            framework wrapping Phaser3 into the main div. All the UI was done
            using Vuetify, a material design components made for VueJS. <BR/><BR/>
            
            Once you
            pressed spacebar or click on the game, there will be two extra
            Phaser3 features in the game, mini-maps and virtual joysticks. 
            You
            can still use the arrow keys to move the player around the game.


          </v-card>
        </v-col>
      </v-row>

      <v-row wrap>
        <v-col>
          <h5>Phaser.JS</h5>
          <v-card
            class="pa-2"
            variant="outlined"
            prepend-icon="mdi-controller"
            title="Phaser3"
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </v-card>
        </v-col>
        <v-col>
          <h5>P5.JS</h5>
          <v-card
            class="pa-2"
            variant="outlined"
            prepend-icon="mdi-palette"
            title="P5.js"
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </v-card>
        </v-col>
        <v-col>
          <h5>Vue.JS</h5>
          <v-card
            class="pa-2"
            variant="outlined"
            prepend-icon="mdi-database"
            title="Data Viz"
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  name: "mainPage",
  props: {},
};
</script>

<style scoped>
.test {
  background-color: #ff00ff;
}
</style>
