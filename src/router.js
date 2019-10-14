import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Farm from './views/Farm.vue';
import Weather from './views/Weather.vue';

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    },
    {
      path: '/login',
      name: 'login',
      component: () => import(/* webpackChunkName: "login" */ './views/Login.vue')
    },
    {
      path: '/farm',
      name: 'farm',
      component: Farm
    },
    {
      path: '/weather',
      name: 'weather',
      component: Weather
    }
  ]
})
