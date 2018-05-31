import Vue from 'vue'
import VueRouter from 'vue-router'
import store from '@/store'

const Layout = r => require.ensure([], () => r(require('@/views/layout/index')), 'layout')
const Console = r => require.ensure([], () => r(require('@/views/console/index')), 'console')
const Login = r => require.ensure([], () => r(require('@/views/login/index')), 'login')
const Apps = r => require.ensure([], () => r(require('@/views/apps/index')), 'apps')
const AppsCreate = r => require.ensure([], () => r(require('@/views/apps/create')), 'apps')
const AppsInfo = r => require.ensure([], () => r(require('@/views/apps/info')), 'apps')
const Notification = r => require.ensure([], () => r(require('@/views/notification/index')), 'notification')

Vue.use(VueRouter)

const router = new VueRouter({
  // mode: 'history',
  base: __dirname,
  routes: [
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '',
      component: Layout,
      children: [
        {
          path: '/',
          name: 'Console',
          component: Console,
          meta: { title: '工作台', auth: true },
        },
        {
          path: '/notification',
          name: 'Notification',
          component: Notification
        },
        {
          path: '/apps',
          name: 'Apps',
          component: Apps
        },
        {
          path: '/apps/create',
          name: 'AppsCreate',
          component: AppsCreate
        },
        {
          path: '/apps/:id/info',
          name: 'AppsInfo',
          component: AppsInfo
        }
      ]
    },


  ]
})

router.beforeEach(({ meta, name, path }, from, next) => {
  let { title, auth = false } = meta
  if(title)
    document.title = title +' - '+ '复星金服' || '复星金服'
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