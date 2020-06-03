import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../pages/home/home.vue'

Vue.use(VueRouter)


// component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
const routes = [{
    path: '/',
    name: 'Home',
    component: Home
}]

const router = new VueRouter({
    routes
})

export default router