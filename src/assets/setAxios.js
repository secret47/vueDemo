import axios from 'axios'
import store from '../store'
import router from '../router'


//http全局拦截
//token要放在所有请求的header上



export default function setAxios() {
    //请求拦截
    axios.interceptors.request.use(
        config => {
            if (store.state.token) {
                config.headers.token = store.state.token;
                // config.headers.Authorization = `token ${store.state.token}`
            }
            return config
        }
    )

    //拦截响应期
    axios.interceptors.response.use(
        response => {
            const data = response.data;

            if (data.code == 200) {
                return data
            }
            if (data.cpde == 401) {
                store.commit('setToken', '');
                localStorage.removeItem('token');
                //跳转至login界面
                router.replace({
                    path: '/login'
                })
            }

            return response
        },
        error => {
            if (error.response) {
                switch (error.response.status) {
                    //返回401  清除token信息并跳转到登录页面
                    case 401:
                        store.commit('setToken', '');
                        localStorage.removeItem('token');
                        //跳转至login界面
                        router.replace({
                            path: '/login'
                        })
                }
            }
            return Promise.reject(error)
        }
    )
}