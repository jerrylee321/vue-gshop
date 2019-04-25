
import Vue from 'vue'
import App from './App'

import router from './router/index.js'
import Header from './components/App-Header/Header.vue'
import store from './store'

Vue.component('Header',Header)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App },
  template: '<App/>',
  router,
  store
})
