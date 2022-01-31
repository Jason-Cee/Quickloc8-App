<template>
  <div id="app">
    <LoadingScreen :isLoading="isLoading" />
    <main v-if="!isLoading">
    </main>
    <a class="msgBtn" href="#message">
      <img src="./assets/comment-multiple-outline.svg">
    </a>
    <Map/>
    <Messages/>
  </div>
</template>

<script>
import Map from "./components/Map.vue";
import Messages from "./components/Messages.vue"; 
import LoadingScreen from "./components/LoadingScreen";


export default {
  name: "App",
  components: {
    Map,
    LoadingScreen,
    Messages
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
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  overflow: hidden;
}

#app {
  background: #FFCCBC;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  height: 100vh;
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
