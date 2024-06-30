import { createRouter, createWebHistory } from 'vue-router'
import register from '../views/Register.vue'
import login from '../views/Login.vue'
import homepage from '../views/Homepage.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'homepage',
      component: homepage
    },
    {
      path: '/register',
      name: 'register',
      component: register
    },
    {
      path: '/login',
      name: 'login',
      component: login
    }
  ]
})

export default router
