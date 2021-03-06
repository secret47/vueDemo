import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Register from './views/Register.vue'
import Login from './views/Login.vue'
Vue.use(Router)

export default new Router({
   mode: 'history',
  base: process.env.BASE_URL,
  routes: [{
      path: '/',
      name: 'login',
      redirect: '/login' //重定向
    },
    {
      path: '/register',
      name: 'register',
      component: Register
    },
    {
      path: '/login',
      name: 'login',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import( /* webpackChunkName: "about" */ './views/Login.vue')
    },
    {
      path: '/index',
      name: 'index',
      component: () => import('./views/Index.vue')
    },
    {
      path: '/catalog',
      name: 'catalog',
      meta:{
        requireAuth:true,//
      },
      component: () => import('./views/Catalog.vue')
    },
    {
      path: '/cart',
      name: 'cart',
      meta:{
        requireAuth:true,//
      },
      component: () => import('./views/Cart.vue')
    },
    {
      path: '/mine',
      name: 'mine',
      meta:{
        requireAuth:true,//
      },
      component: () => import('./views/Mine.vue')
    },
  ]
})