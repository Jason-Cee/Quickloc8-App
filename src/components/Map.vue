<template>
    <div id="mapContainer">
      <div id="btnContainer">
        <button @click="history">History</button>
        <button @click="clearMap">Clear Map</button>
      </div>
      <GmapMap
        :center="center"
        :zoom="7"
        style="width: 1000px; height: 540px"
      >
        <GmapMarker
          :key="index"
          v-for="(m, index) in markers"
          :position="m.position"
          @click="center=m.position"
        ></GmapMarker>
      </GmapMap>
    </div>
</template>
<script>

const vanA = { lat: -33.876115, lng: 18.5008116 };
const vanB = { lat: -33.9685533, lng: 18.5662383 };
const vanC = { lat: -34.0461583, lng: 18.7047383 };
const vanD = { lat: -31.8994016, lng: 26.8671716 };
const vanE = { lat: -31.8942983, lng: 26.878175 };
const vanF = { lat: -31.9998233, lng: 27.5801216 };

export default {
  name: "Map",
  data() {
    return {
      center: vanA,
      markers: [],
    };
  },
  methods: {
    history() {
      this.markers = [
        {
          position: vanA,
        },
        {
          position: vanB,
        },
        {
          position: vanC,
        },
        {
          position: vanD,
        },
        {
          position: vanE,
        },
        {
          position: vanF,
        },
      ];
    },
    clearMap() {
      this.markers = [];
    }
  }
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
 #mapContainer {
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
  /* position: relative;
  bottom: 20px; */
 }
#btnContainer button {
  font-size: 1.5rem;
  cursor: pointer;
  padding: .25em 1em;
  border-radius: .25em;
  margin: 10px;
}

.vue-map-container{
  width: 60vw;
  height: 70vh !important;
}
</style>