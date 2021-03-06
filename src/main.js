import Vue from 'vue'
import App from './App'
import mpvueToastRegistry from 'mptoast/src/registry'
import '../static/css/common.css'

mpvueToastRegistry(Vue)

Vue.config.productionTip = false
App.mpType = 'app'

const app = new Vue(App)
app.$mount()
Vue.prototype.globalData = getApp().globalData
