import Vue from 'vue'
import 'normalize.css/normalize.css' // A modern alternative to CSS resets
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import '@/styles/index.scss' // global css
import '@/styles/index.css'
import App from './App'
import store from './store'
import router from './router'
import '@/permission' // permission control
import 'font-awesome/css/font-awesome.min.css'
Vue.use(ElementUI)

Vue.config.productionTip = false

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})

import Print from 'vue-print-nb'
Vue.use(Print)

// echarts图表
import * as echarts from 'echarts'
Vue.prototype.$echarts = echarts

