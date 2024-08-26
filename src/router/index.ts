import { createRouter, createWebHistory } from 'vue-router'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
      {
        path: '/',
        name: '登录',
        component: () => import('@/views/LoginView.vue')
      },
      {
        path: '/index',
        name: '首页',
        component: () => import('@/views/IndexView.vue'),
        children: [
            {
                path:'/index/main',
                name: '主页',
                component: () => import('@/components/viewComponents/mainViewComponent.vue'),
                children: [
                    {
                        path:'/index/main/home',
                        name: '主页/首页',
                        component: () => import('@/components/viewComponents/viewLiteComponents/homeLiteViewComponent.vue'),
                    },
                    {
                        path:'/index/main/serverStatus',
                        name: '主页/服务器状态',
                        component: () => import('@/components/viewComponents/viewLiteComponents/serverStatusLiteViewComponent.vue'),
                    },
                    {
                        path:'/index/main/settings',
                        name: '主页/设置',
                        component: () => import('@/components/viewComponents/viewLiteComponents/settingsLiteViewComponent.vue'),
                    },

                ]
            },
        ]
      },
  ]
})

export default router
