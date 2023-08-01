import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: '/',
    name: 'login',
    component: () => import('@/auth/loginCarsh.vue'),
    redirect: '/',
    // meta: {requiresAuth: true},
    children: [
      {
        path: '/home',
        name: 'home',
        component: () => import('@/views/HomeView.vue'),
      },
      {
        path: '/about',
        name: 'about',
        component: () => import('@/views/AboutView.vue')
      },
    ]
  },
  {
    path: '/not-found',
    name: 'not-found',
    component: () => import('@/error/notFound.vue'),
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

// import Login from '../auth/loginCarsh.vue'
// import Router from 'vue-router'
// import Vue from 'vue'
// import { isLoggedIn } from '@/auth';


// Vue.use(Router)

// const router = new Router({ 
//   mode: 'history',
//   routes:  [
//   {
//     path: "/login",
//     name: "login",
//     component: Login
//   },
//   {
//     path: '/home',
//     name: 'home',
//     component: () => import('@/views/HomeView.vue'),
//     meta: {requiresAuth: true}
//   },
//   {
//     path: '/about',
//     name: 'about',
//     component: () => import('@/views/AboutView.vue')  
//   },
//  ]
// })


// router.beforeEach((to, from, next) => {
//   if (to.meta.requiresAuth && !isLoggedIn()) {
//     if(to.path !== '/login') {
//       next({path: '/login'})
//     }
//   }else {
//     next()
//   }
// })

// export default router
