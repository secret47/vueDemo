import Vue from 'vue'
import './cube-ui'
import './cube-ui'
import App from './App.vue'
import router from './router'
import store from './store'
import 'amfe-flexible'
import axios from 'axios'
import setAxios from './assets/setAxios'
import './mock/mock.js'
setAxios();

Vue.config.productionTip = false
Vue.prototype.$http = axios;



//路由守卫
router.beforeEach((to, form, next) => {
  //无论是刷新还是跳转，最开始进入就是这里
  store.commit('setToken',localStorage.getItem("token"));
  if(to.meta.requireAuth){
    if(store.state.token){
      next()
    }else{
      next({
        path:'/login',
        query:{redirect:to.fullPath}
      })
    }
  }else{
    next();
  }
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')