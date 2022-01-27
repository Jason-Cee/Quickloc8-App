<template>
  <div id="app">
    <LoadingScreen :isLoading="isLoading" />
    <main v-if="!isLoading">
    </main>
    <Map/>
  </div>
</template>

<script>
import Map from "./components/Map.vue"; 
import LoadingScreen from "./components/LoadingScreen";

export default {
  name: "App",
  components: {
    Map,
    LoadingScreen
},
  data() {
    return { 
      isLoading: true, }
  },
  mounted() {
    console.log('Component mounted.'),
    setTimeout(() => {
      this.isLoading = false;
    }, 
    3500);
  },
  
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
