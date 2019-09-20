import Vue from 'vue'
import Router from 'vue-router'
import routes from './router.config'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
  scrollBehavior: () => ({ y: 0 })
})

router.beforeEach((to, from, next) => {
  if (to.name === 'Login') {
    next()
  } else {
    // sessionStorage.userInfo ? next() : next('/login')
    next()
  }
})

export default router
