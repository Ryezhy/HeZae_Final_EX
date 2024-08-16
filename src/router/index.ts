import { createRouter, createWebHistory } from 'vue-router'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
      {
        path: '/',
        name: '登录',
        component: () => import('../views/LoginView.vue')
      },
      {
        path: '/home',
        name: '首页',
        component: () => import('../views/HomeView.vue')
      }
  ]
})

export default router
