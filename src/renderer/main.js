import Vue from 'vue'
import OfficeUIFabricVue from 'office-ui-fabric-vue'

// import css style
import 'office-ui-fabric-core/dist/css/fabric.min.css'
import 'office-ui-fabric-vue/dist/index.css'

import axios from 'axios'

import App from './App'
import router from './router'
import store from './store'

Vue.use(OfficeUIFabricVue)

if (!process.env.IS_WEB) Vue.use(require('vue-electron'))
Vue.http = Vue.prototype.$http = axios
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  components: { App },
  router,
  store,
  template: '<App/>'
}).$mount('#app')
