import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Farm from './views/Farm.vue';
import Weather from './views/Weather.vue';
import Wevebeen from './views/Wevebeen.vue';

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
    },
    {
      path: '/wevebeen',
      name: 'wevebeen',
      component: Wevebeen
    },
    
    {
      path: '/special',
      name: 'special',
      component: () => import(/* webpackChunkName: "hb2019" */ './views/SpecialDays.vue')
    },
    {
      path: '/happybirthday',
      name: 'happybirthday',
      component: () => import(/* webpackChunkName: "hb2019" */ './views/Specials/HB2019.vue')
    },
    {
      path: '/wishes',
      name: 'wishes',
      component: () => import(/* webpackChunkName: "hb2019" */ './views/Specials/Wishes.vue')
    }
  ]
})
