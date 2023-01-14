<template>
  <div>
    <div id="phaser-div" class="test"></div>
  </div>
</template>

<script>
import Phaser from "phaser";
import Game from "../game/index";
export default {
  data() {
    return {
      game: null
    };
  },
  mounted() {
    console.log("start Phaser when mounted") ;
    window.Phaser = Phaser;

    this.game = new Game();
    console.log("this.game: ", this.game)
  },
};
</script>

<style scoped>
.test {
    background-color: #00ff00;  
}
</style>
