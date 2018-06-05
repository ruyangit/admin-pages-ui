import Vue from 'vue'
import VueRouter from 'vue-router'
import store from '@/store'

// const Login = r => require.ensure([], () => r(require('@/views/login/index')), 'login')
// 懒加载 - 按组 import
// const Login = () => import(/* webpackChunkName: "user-group" */ '../views/login/index.vue')
// const Layout = () => import(/* webpackChunkName: "user-group" */ '../views/layout/index.vue')
// const Profile = () => import(/* webpackChunkName: "user-group" */ '../views/profile/index.vue')
// const Key = () => import(/* webpackChunkName: "user-group" */ '../views/key/index.vue')
// const Security = () => import(/* webpackChunkName: "user-group" */ '../views/security/index.vue')

//为了简单发包
import Login from '../views/login/index.vue'
import Layout from '../views/layout/index.vue'
import Profile from '../views/profile/index.vue'
import Key from '../views/key/index.vue'
import Security from '../views/security/index.vue'

Vue.use(VueRouter)

const router = new VueRouter({
  // mode: 'history',
  base: __dirname,
  routes: [
    { path: '/login', name: 'Login', component: Login },
    {
      path: '', component: Layout, children: [
        { path: '/profile', name: 'Profile', component: Profile, meta: { title: '个人信息' } },
        { path: '/key', name: 'Key', component: Key, meta: { title: '密钥管理' } },
        { path: '/security', name: 'Security', component: Security, meta: { title: '安全设置' } },
      ]
    },

  ]
})

router.beforeEach(({ meta, name, path }, from, next) => {
  let { title, auth = false } = meta
  if (title)
    document.title = '用户中心' + ' - ' + title || 'SKYES'
  if (auth) {
    if (store.getters["user/getToken"]) {
      next()
    } else if (name !== 'Login') {
      next({
        name: 'Login',
        query: { redirect: path }
      })
    }
  }
  next()
})

export default router