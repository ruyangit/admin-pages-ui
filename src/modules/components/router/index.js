import Vue from 'vue'
import VueRouter from 'vue-router'
// import store from '~user/store'
import { getCookies } from '@/utils/cookies'
import _CONST from '@/utils/globalConfig'

// const Login = r => require.ensure([], () => r(require('@/views/login/index')), 'login')
// 懒加载 - 按组 import
// const Login = () => import(/* webpackChunkName: "user-group" */ '../views/login/index.vue')
// const Layout = () => import(/* webpackChunkName: "user-group" */ '../views/layout/index.vue')
// const Profile = () => import(/* webpackChunkName: "user-group" */ '../views/profile/index.vue')
// const Key = () => import(/* webpackChunkName: "user-group" */ '../views/key/index.vue')
// const Security = () => import(/* webpackChunkName: "user-group" */ '../views/security/index.vue')

//为了简单发包
import Index from '../views/index.vue'
import News from '../views/news/index.vue'
import Novel from '../views/novel/index.vue'
import Meitu from '../views/meitu/index.vue'
import TianQi from '../views/tianqi/index.vue'
// import Address from '../views/address/index.vue'
// import Key from '../views/key/index.vue'
// import Security from '../views/security/index.vue'

Vue.use(VueRouter)

const router = new VueRouter({
  // mode: 'history',
  base: __dirname,
  routes: [
    { path: '/index', name: 'Index', component: Index, meta: { title: '首页' } },
    { path: '/news', name: 'News', component: News, meta: { title: '新闻' } },
    { path: '/novel', name: 'Novel', component: Novel, meta: { title: '小说' } },
    { path: '/meitu/:id', name: 'Meitu', component: Meitu, meta: { title: '美图' } },
    { path: '/tianqi/:city', name: 'TianQi', component: TianQi, meta: { title: '天气' } },
    // { path: '/address', name: 'Address', component: Address, meta: { title: '联系人管理', auth: true } },
    // {
    //   path: '/', component: Layout, children: [
    //     { path: 'profile', name: 'Profile', component: Profile, meta: { title: '个人信息', auth: true } },
    //     { path: 'key', name: 'Key', component: Key, meta: { title: '密钥管理', auth: true } },
    //     { path: 'security', name: 'Security', component: Security, meta: { title: '安全设置', auth: true } },
    //   ], meta: { auth: true }
    // },
    { path: '*', redirect: { path: 'index' } },
  ]
})

router.beforeEach(({ meta, name, path }, from, next) => {
  let { title, auth = false } = meta
  if (title)
    document.title = '组件仓库' + ' - ' + title || 'SKYES'
  // if (auth) {
  //   if (!getCookies(_CONST.TOKEN) && name !== 'Login') {
  //     window.location.href = '/login#/?redirect=' + location.href
  //     return false
  //   }
  // }
  next()
})

export default router