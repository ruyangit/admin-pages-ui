// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'

import ElementUI from 'element-ui';
// import 'element-ui/lib/theme-chalk/index.css';
import '@/styles/default.less';

Vue.config.productionTip = false

/* eslint-disable no-new */
const app = new Vue({
 
  render: h => h(App)
})

app.$mount('#app')
