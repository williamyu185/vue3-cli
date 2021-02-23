import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

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
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
