import Vue from 'vue'
import App from './App'
//引入公共接口
import {myRequest} from './util/request.js'
import store from 'util/store.js'
//挂载全局
Vue.prototype.$myRequest = myRequest
Vue.prototype.$store=store

// main.js
import uView from "uview-ui";
Vue.use(uView);
Vue.config.productionTip = false

App.mpType = 'app'

const app = new Vue({
    ...App
})
app.$mount()
