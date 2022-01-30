import Vue from 'vue'
import App from './App.vue'
import VueGeolocation from 'vue-browser-geolocation'
import VueRouter from 'vue-router'
import Messages from './components/Messages.vue'

Vue.use(VueRouter)

Vue.config.productionTip = false
Vue.use(VueGeolocation)

import * as VueGoogleMaps from 'vue2-google-maps'
Vue.use(VueGoogleMaps, {
  load: {
    key: 'AIzaSyAHtPjmWT3ezLl7yoXuP1fq_uegR1fzwb8'
  },
})

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')

const routes = [
  {
    path: '/', component: App
  },
  {
      path: '/messages', component: Messages
  },
];

const router = new VueRouter({
  mode: 'history',
  // base: process.env.BASE_URL,
  routes
});
