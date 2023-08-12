import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import loginCarsh from '@/auth/loginCarsh.vue'
import notFound from '@/error/notFound.vue'
import howRew from '@/views/howRew.vue'

const routes = [
  {
    path: '/',
    name: 'login',
    component: loginCarsh
  },
  {
    path: '/howRew',
    name: 'howRew',
    component: howRew
  },
  {
    path: '/home',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    component: AboutView  
  },
  {
    path: '/not-found',
    name: 'not-found',
    component: notFound
  },
  { 
    path: '/:catchAll(.*)',
    redirect: '/not-found' 
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router