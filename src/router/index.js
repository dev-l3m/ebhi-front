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

export default router
