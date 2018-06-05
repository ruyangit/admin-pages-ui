// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import store from './store'
import router from './router'
import { sync } from 'vuex-router-sync'

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
// import '@/assets/common.less';

import MainHeader from '@/components/header/index.vue';
import SvgIcon from '@/components/svg-icon/index.vue';


Vue.config.productionTip = false

Vue.use(ElementUI);
Vue.component(MainHeader.name, MainHeader);
Vue.component(SvgIcon.name, SvgIcon);

sync(store, router)

/* eslint-disable no-new */
const app = new Vue({
  router,
  store,
  render: h => h(App)
})

app.$mount('#app')
