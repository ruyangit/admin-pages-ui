// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'

import ElementUI from 'element-ui';
// import 'element-ui/lib/theme-chalk/index.css';
import '@/styles/default.less';

import SvgIcon from '@/components/svg-icon/index.vue';
import RuLayout from '@/components/layout/index.vue';

Vue.config.productionTip = false

Vue.use(ElementUI);
Vue.component(SvgIcon.name, SvgIcon);
Vue.component(RuLayout.name, RuLayout);

/* eslint-disable no-new */
const app = new Vue({
 
  render: h => h(App)
})

app.$mount('#app')
