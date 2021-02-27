import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
  {
      path: '/',
      redirect: {
          name: 'index'
      },
  },
  {
      name: 'index',
      path: '/index',
      component: () => import('../components/index.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(process.env.BASE_URL),
  routes
})

export default router
