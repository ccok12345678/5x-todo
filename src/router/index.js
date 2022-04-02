import { createRouter, createWebHashHistory } from 'vue-router'

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
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
