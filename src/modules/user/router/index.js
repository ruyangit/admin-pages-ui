import Vue from 'vue'
import VueRouter from 'vue-router'
import store from '@/store'

// const Login = r => require.ensure([], () => r(require('@/views/login/index')), 'login')
// 懒加载 - 按组 import
const Login = () => import(/* webpackChunkName: "user-login" */ '../views/login/index.vue')
const Layout = () => import(/* webpackChunkName: "user-layout" */ '../views/layout/index.vue')
const Profile = () => import(/* webpackChunkName: "user-profile" */ '../views/profile/index.vue')

Vue.use(VueRouter)

const router = new VueRouter({
  // mode: 'history',
  base: __dirname,
  routes: [
    { path: '/login', name: 'Login', component: Login },
    {
      path: '', component: Layout, children: [
        { path: '/profile', name: 'Profile', component: Profile },
      ]
    },

  ]
})

router.beforeEach(({ meta, name, path }, from, next) => {
  let { title, auth = false } = meta
  if (title)
    document.title = title + ' - ' + '复星金服' || '复星金服'
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