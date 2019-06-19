import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

let store = new Vuex.Store({
	state: {
		token: '',
		cartArr: JSON.parse(localStorage.getItem('cartArr')) || [] //购物车,localstorage有就拿里面的，没有就为空
	},
	mutations: {
		//设置vuex的token
		setToken(state, token) {
			state.token = token
		},
		//分类页面添加购物车
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
		},
		//购物车数目增加
		addGoods(state, index) {
			state.cartArr[index].cartCount++
		},
		//购物车数目减少
		removeGoods(state, index) {
			if (state.cartArr[index].cartCount > 1) {
				state.cartArr[index].cartCount--;
			} else {
				if (window.confirm('确定从购物车移除上品吗？')) {
					state.cartArr.splice(index, 1)
				}

			}
		},
		//清空购物车
		clearCarts(state) {
			state.cartArr = []
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

store.subscribe((mutations, state) => {
	//存数据
	localStorage.setItem('cartArr', JSON.stringify(state.cartArr))
})

export default store;