import { createRouter, createWebHistory } from 'vue-router'
import Auth from '../pages/Auth.vue'
import Dashboard from '../pages/Dashboard.vue'
import { useUserStore } from '../store/user'

const routes = [
  {
    path: '/',
    redirect: '/auth',
  },
  {
    path: '/auth',
    component: Auth,
  },
  {
    path: '/dashboard',
    component: Dashboard,
    meta: { requiresAuth: true },
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

// Protección de rutas
router.beforeEach(async (to, from, next) => {
  const userStore = useUserStore()

  if (!userStore.user) {
    await userStore.fetchUser()
  }

  if (to.meta.requiresAuth && !userStore.user) {
    return next('/auth')
  }

  next()
})

export default router
