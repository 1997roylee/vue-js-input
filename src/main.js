import Vue from 'vue'
import App from './App.vue'
import VInputComponent from '../projects/InputComponent/index.js'
Vue.use(VInputComponent)

Vue.config.productionTip = false


new Vue({
  render: h => h(App),
}).$mount('#app')
