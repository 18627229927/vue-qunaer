import Vue from 'vue'
import App from './App.vue'
import router from './router'
import fastClick from 'fastclick'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/css/swiper.css'
import './assets/css/reset.css'
import './assets/css/border.css'
import './assets/css/iconfont.css'


Vue.use(VueAwesomeSwiper)

Vue.config.productionTip = false

fastClick.attach(document.body)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
