<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" width="25%" />
    <Swatches v-model="color" />
    <v-swatches
      v-model="color"
      shapes="circles"
      swatch-size="30"
      :swatches="swatches"
      inline
    ></v-swatches>
  </div>
</template>

<script>
import VSwatches from "vue-swatches";
import Swatches from "./components/Swatches";
// Import the styles too, typically in App.vue or main.js
import "vue-swatches/dist/vue-swatches.css";

export default {
  name: "App",
  components: {
    Swatches,
    VSwatches,
  },
  data: () => ({
    color: "#f00",
    swatches: ["#f00", "#ccff00", "#eee", "#0f0"],
  }),
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
