<template>
  <div id="app">
    <!-- <LoadingScreen :isLoading="isLoading" />
    <main v-if="!isLoading">
    </main> -->
    <button class="msgBtn">
      <img src="./assets/comment-multiple-outline.svg">
    </button>
    <Map/>
  </div>
</template>

<script>
import Map from "./components/Map.vue"; 
// import LoadingScreen from "./components/LoadingScreen";


export default {
  name: "App",
  components: {
    Map,
    // LoadingScreen
},
  // data() {
  //   return { 
  //     isLoading: true, }
  // },
  // mounted() {
  //   console.log('Component mounted.'),
  //   setTimeout(() => {
  //     this.isLoading = false;
  //   }, 
  //   3500);
  // },
  
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

#app {
  width: 100vw;
  height: 100vh;
  background: linear-gradient(to left, #FFCCBC, #FF5722);
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}

.msgBtn {
  display: flex; 
  float: left;
  padding: .5rem;
  border:none; 
  background:none;
  cursor: pointer;
}
</style>
