import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    token: '',
    cartArr: [] //购物车
  },
  mutations: {
    //设置vuex的token
    setToken(state, token) {
      state.token = token
    },
    addCart(state, item) {
      let goods = state.cartArr.find(v => v.title == item.name); //查询有没有这个上品
      if (goods) { //有的话，数量+1
        goods.cartCount += 1
      } else { //没有的话，添加新的上去
        state.cartArr.push({
          title: item.name,
          cartCount: 1
        })
      }
    }
  },
  actions: {

  },
  //计算属性
  getters: {
    countSum: state => {
      let num = 0;
      state.cartArr.forEach(v => {
        num += v.cartCount
      })
      return num
    }
  }
})