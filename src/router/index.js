import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  // Page d'accueil -> Login
  {
    path: '/',
    name: 'login',
    component: () => import('@/views/Login.vue'),
  },

  // Route d'inscription
  {
    path: '/register',
    name: 'register',
    component: () => import('@/views/Register.vue'),
  },

  // Tableau de bord sécurisé
  {
    path: '/dashboard',
    name: 'dashboard',
    component: () => import('@/views/Dashboard.vue'),
    children: [
      {
        path: '',
        component: () => import('@/views/dashboard/Home.vue'),
      },
      // {
      //   path: 'users',
      //   name: 'user-list',
      //   component: () => import('@/views/dashboard/users/UserList.vue'),
      // },
      {
        path: 'card',
        name: 'card',
        component: () => import('@/views/Card.vue'),
      },
    ],
  },
]

const router = createRouter({
  history: createWebHistory(),
  scrollBehavior() {
    return { top: 0 }
  },
  routes,
})

export default router
