import Vue from 'vue'
import App from './App.vue'
import VueGeolocation from 'vue-browser-geolocation'


Vue.config.productionTip = false
Vue.use(VueGeolocation)

import * as VueGoogleMaps from 'vue2-google-maps'
Vue.use(VueGoogleMaps, {
  load: {
    key: 'AIzaSyAHtPjmWT3ezLl7yoXuP1fq_uegR1fzwb8'
  },
})

new Vue({
  render: h => h(App),
}).$mount('#app')


// const taxi1 = { lat: -33.876115, lng: 18.5008116 };
// const taxi2 = { lat: -33.9685533, lng: 18.5662383 };
// const taxi3 = { lat: -34.0461583, lng: 18.7047383 };
// const taxi4 = { lat: -31.8994016, lng: 26.8671716 };
// const taxi5 = { lat: -31.8942983, lng: 26.878175 };
// const taxi6 = { lat: -31.9998233, lng: 27.5801216 };

// drawMarkers() {
//   this.markers = [
//     {
//       position: taxi1,
//     },
//     {
//       position: taxi2,
//     },
//     {
//       position: taxi3,
//     },
//     {
//       position: taxi4,
//     },
//     {
//       position: taxi5,
//     },
//     {
//       position: taxi6,
//     }
//   ];
// },