
import Vue from 'vue'
import App from './App'
import {Button} from 'mint-ui'
import router from './router/index.js'
import Header from './components/App-Header/Header.vue'
import Star from './components/star/star.vue'
import store from './store'
import './mock/mockServer'



Vue.component('Header',Header)
Vue.component('Star',Star)
Vue.component(Button.name,Button)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App },
  template: '<App/>',
  router,
  store
})
