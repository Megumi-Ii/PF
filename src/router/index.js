import CameraViewVue from '@/CameraView.vue'
import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import HandMadeVue from '@/components/HandMade.vue'


const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
    {
      path: '/',
      name: 'Camera',
      component: CameraViewVue
    },
    {
      path: '/',
      name: 'HandMade',
      component: HandMadeVue
    },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
