import Vue from 'vue'

import VueApollo from 'vue-apollo'
Vue.use(VueApollo)

import { apolloClient } from './apollo'

const apolloProvider = new VueApollo({
  defaultClient: apolloClient,
})

import router from './router'

import App from './App.vue'

new Vue({
  el: '#app',
  router,
  apolloProvider,
  render: h => h(App),
})
