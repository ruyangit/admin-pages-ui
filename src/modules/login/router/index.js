import Vue from 'vue'
import VueRouter from 'vue-router'


Vue.use(VueRouter)

const router = new VueRouter({
  // mode: 'history',
  base: __dirname,
  routes: [
  ]
})

router.beforeEach(({ meta, name, path }, from, next) => {
  document.title = '登录'
  next()
})

export default router