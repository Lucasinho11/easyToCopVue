import { createRouter, createWebHistory } from '@ionic/vue-router';
import Tabs from '../views/Tabs.vue'

const routes= [
  {
    path: '/',
    redirect: '/tabs/'
  },
  {
    path: '/tabs/',
    component: Tabs,
    children: [
      {
        path: '',
        redirect: '/tabs/actus'
      },
      {
        path: 'actus',
        component: () => import('@/views/Actus.vue')
      },
      {
        path: 'actus/:id',
        component: () => import('@/views/Actu.vue')
      },
      {
        path: 'drops',
        component: () => import('@/views/Drops.vue')
      },
      {
        path: 'drops/:id',
        component: () => import('@/views/Drop.vue')
      },

      {
        path: 'subs',
        component: () => import('@/views/Subs.vue')
      },
      {
        path: 'infos',
        component: () => import('@/views/Infos.vue')
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
