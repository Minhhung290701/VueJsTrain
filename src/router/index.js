import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'demo',
      component: () => import('../views/demo.vue')
    },
    {
      path: '/todo',
      name: 'todo',
      component: () => import('../views/todo.vue')
    },
    {
      path: '/calculator',
      name: 'calculator',
      component: () => import('../views/calculator.vue')
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('../views/LoginView.vue')
    },
    {
      path: '/otp',
      name: 'otp',
      component: () => import('../views/otp.vue')
    },
    {
      path: '/forgotpassword',
      name: 'fordotpassword',
      component: () => import('../views/forgotpassword.vue')
    }
  ]
})

export default router
