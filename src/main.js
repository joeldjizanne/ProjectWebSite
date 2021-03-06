// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueMaterial from 'vue-material'
import 'vue-material/dist/vue-material.css'
import Carousel3d from 'vue-carousel-3d';

import App from './App'
import router from './router'

Vue.config.productionTip = false

Vue.use(Carousel3d);
Vue.use(VueMaterial)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: {
    App
  }
})

