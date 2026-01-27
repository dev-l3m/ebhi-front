import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Services from '../views/Services.vue'
import WhyOutsource from '../views/WhyOutsource.vue'
import About from '../views/About.vue'
import JoinUs from '../views/JoinUs.vue'
import Locations from '../views/Locations.vue'
import Blog from '../views/Blog.vue'
import CookiePolicy from '../views/CookiePolicy.vue'
import CGU from '../views/CGU.vue'
import PrivacyPolicy from '../views/PrivacyPolicy.vue'
import LegalNotice from '../views/LegalNotice.vue'

// Backoffice imports
import AdminLogin from '../views/admin/AdminLogin.vue'
import AdminLayout from '../views/admin/AdminLayout.vue'
import AdminDashboard from '../views/admin/AdminDashboard.vue'
import AdminArticles from '../views/admin/AdminArticles.vue'
import AdminServices from '../views/admin/AdminServices.vue'
import AdminDomains from '../views/admin/AdminDomains.vue'
import AdminJobCategories from '../views/admin/AdminJobCategories.vue'
import AdminJobApplications from '../views/admin/AdminJobApplications.vue'
import AdminTestimonials from '../views/admin/AdminTestimonials.vue'
import AdminStats from '../views/admin/AdminStats.vue'
import AdminContacts from '../views/admin/AdminContacts.vue'
import AdminUsers from '../views/admin/AdminUsers.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/nos-services',
    name: 'Services',
    component: Services
  },
  {
    path: '/pourquoi-externaliser',
    name: 'WhyOutsource',
    component: WhyOutsource
  },
  {
    path: '/a-propos',
    name: 'About',
    component: About
  },
  {
    path: '/nous-rejoindre',
    name: 'JoinUs',
    component: JoinUs
  },
  {
    path: '/nos-implantations-strategiques',
    name: 'Locations',
    component: Locations
  },
  {
    path: '/blog',
    name: 'Blog',
    component: Blog
  },
  {
    path: '/cookie-policy',
    name: 'CookiePolicy',
    component: CookiePolicy
  },
  {
    path: '/cgu',
    name: 'CGU',
    component: CGU
  },
  {
    path: '/politique-de-confidentialite',
    name: 'PrivacyPolicy',
    component: PrivacyPolicy
  },
  {
    path: '/legal-notice',
    name: 'LegalNotice',
    component: LegalNotice
  },
  // Backoffice routes
  {
    path: '/admin/login',
    name: 'AdminLogin',
    component: AdminLogin,
    meta: { requiresGuest: true }
  },
  {
    path: '/admin',
    component: AdminLayout,
    meta: { requiresAuth: true },
    children: [
      {
        path: '',
        name: 'AdminDashboard',
        component: AdminDashboard
      },
      {
        path: 'articles',
        name: 'AdminArticles',
        component: AdminArticles
      },
      {
        path: 'services',
        name: 'AdminServices',
        component: AdminServices
      },
      {
        path: 'domains',
        name: 'AdminDomains',
        component: AdminDomains
      },
      {
        path: 'job-categories',
        name: 'AdminJobCategories',
        component: AdminJobCategories
      },
      {
        path: 'job-applications',
        name: 'AdminJobApplications',
        component: AdminJobApplications
      },
      {
        path: 'testimonials',
        name: 'AdminTestimonials',
        component: AdminTestimonials
      },
      {
        path: 'stats',
        name: 'AdminStats',
        component: AdminStats
      },
      {
        path: 'contacts',
        name: 'AdminContacts',
        component: AdminContacts
      },
      {
        path: 'users',
        name: 'AdminUsers',
        component: AdminUsers
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { top: 0 }
    }
  }
})

// Navigation guard for authentication
router.beforeEach((to, from, next) => {
  const token = localStorage.getItem('admin_token')
  const isAuthenticated = !!token

  if (to.meta.requiresAuth && !isAuthenticated) {
    next({ name: 'AdminLogin' })
  } else if (to.meta.requiresGuest && isAuthenticated) {
    next({ name: 'AdminDashboard' })
  } else {
    next()
  }
})

export default router
