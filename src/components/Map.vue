<template>
  <div id="mapContainer">
    <div id="btnContainer">
      <button @click="drawMarkers">Draw Markers</button>
      <button @click="drawDirection">Draw Direction</button>
      <button @click="clearMap">Clear Map</button>
    </div>
    <GmapMap 
      :center="center"
      :zoom="7"
      map-type-id="terrain"
      style="width: 1000px; height: 540px"
    >
      <GmapMarker
        :key="index"
        v-for="(m, index) in markers"
        :position="m.position"
        :clickable="true"
        :draggable="true"
        @click="center = m.position"/>
        <gmap-polygon :paths="paths"></gmap-polygon>
    </GmapMap>
  </div>
</template>

<script>
const taxi1 = { lat: -33.876115, lng: 18.5008116 };
const taxi2 = { lat: -33.9685533, lng: 18.5662383 };
const taxi3 = { lat: -34.0461583, lng: 18.7047383 };
const taxi4 = { lat: -31.8994016, lng: 26.8671716 };
const taxi5 = { lat: -31.8942983, lng: 26.878175 };
const taxi6 = { lat: -31.9998233, lng: 27.5801216 };
export default {
  name: "GoogleMap",
  data() {
    return {
      markers: [],
      center: taxi1,
      paths: [],
    };
  },
  methods: {
    drawMarkers() {
      this.markers = [
        {
          position: taxi1,
        },
        {
          position: taxi2,
        },
        {
          position: taxi3,
        },
        {
          position: taxi4,
        },
        {
          position: taxi5,
        },
        {
          position: taxi6,
        },
      ];
    },
    drawDirection() {
      this.paths = [taxi1, taxi2, taxi3, taxi4, taxi5, taxi6];
    },
    clearMap() {
      this.paths = [];
      this.markers = [];
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
 #mapContainer {
  display: flex;
  flex-direction: column;
  align-items: center;
  /* position: relative;
  bottom: 20px; */
 }
</style>