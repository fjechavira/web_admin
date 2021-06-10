import Vue from 'vue'
import VueRouter from 'vue-router'
import { canNavigate } from '@/libs/acl/routeProtection'
import { isUserLoggedIn, getHomeRouteForLoggedInUser } from '@/auth/utils'

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  scrollBehavior() {
    return { x: 0, y: 0 }
  },
  routes: [
    {
      path: '/',
      name: 'login',
      component: () => import('@/views/Login.vue'),
      meta: {
        layout: 'full',
        action: 'read',
        resource: 'Auth',
      },
    },
    {
      path: '/dashboard',
      name: 'dashboard',
      meta: {
        action: 'read',
        resource: 'Auth',
      },
      component: () => import('@/views/dashboard/Dashboard.vue'),
    },
    {
      path: '/crm',
      name: 'crm',
      meta: {
        action: 'manage',
        resource: 'Leads',
      },
      component: () => import('@/views/crm/CRM.vue'),
    },
    {
      path: '/agentes',
      name: 'agentes',
      action: 'read',
      resource: 'Invoice',
      meta: {
        action: 'read',
        resource: 'Auth',
      },
      component: () => import('@/views/agents/Agents.vue'),
    },
    {
      path: '/payment',
      name: 'payment',
      meta: {
        action: 'read',
        resource: 'Auth',
      },
      component: () => import('@/views/payments/Payments.vue'),
    },
    {
      path: '/error-404',
      name: 'error-404',
      component: () => import('@/views/error/Error404.vue'),
    },
    {
      path: '/not-authorized',
      name: 'not-authorized',
      component: () => import('@/views/error/NotAuthorized.vue'),
      meta: {
        layout: 'full',
        action: 'read',
        resource: 'Auth',
      },
    },
    {
      path: '*',
      redirect: 'error-404',
    },
  ],
})

// Router Before Each hook for route protection
router.beforeEach((to, _, next) => {
  const isLoggedIn = isUserLoggedIn()
  if (!canNavigate(to)) {
    if (!isLoggedIn) return next({ name: 'login' })
    return next({ name: 'not-authorized' })
  }
  if (to.meta.redirectIfLoggedIn && isLoggedIn) {
    next(getHomeRouteForLoggedInUser())
  }
  return next()
})

// ? For splash screen
// Remove afterEach hook if you are not using splash screen
router.afterEach(() => {
  // Remove initial loading
  const appLoading = document.getElementById('loading-bg')
  if (appLoading) {
    appLoading.style.display = 'none'
  }
})

export default router
