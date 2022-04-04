import { createRouter, createWebHashHistory } from 'vue-router'
import checkLogin from '@/methods/checkLogin.js'

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('../views/HomeView.vue'),
    children: [
      {
        path: '/',
        name: 'login',
        component: () => import('../components/HomeLogin.vue')
      },
      {
        path: 'register',
        name: 'register',
        component: () => import('../components/HomeRegister.vue')
      }
    ]
  },
  {
    path: '/todo',
    name: 'todo',
    component: () => import('../views/TodoView.vue'),
    beforeEnter: async () => {
      if (!await checkLogin()) {
        return '/'
      }
    }
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
