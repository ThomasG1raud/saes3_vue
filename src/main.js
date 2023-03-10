import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import L  from 'leaflet'
import vuetify from "@/plugins/vuetify";
Vue.config.productionTip = false

delete L.Icon.Default.prototype._getIconUrl  
// eslint-disable-next-line  
L.Icon.Default.mergeOptions({  
  iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),  
  iconUrl: require('leaflet/dist/images/marker-icon.png'),  
  shadowUrl: require('leaflet/dist/images/marker-shadow.png')  
})

new Vue({
  vuetify,
  router,
  store,
  render: h => h(App)
}).$mount('#app')
