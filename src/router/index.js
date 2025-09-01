import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [{path:'/',name:'Home', component:Home},
          {path: '/destination/:id/:slug',
          name: 'destination.show',
          component: () => import('@/views/DestinationShow.vue'),
          props: route=>({id:parseInt(route.params.id)}),
          children: [
            {
              path: ':experienceSlug',
              name: 'experience.show',
              component: () => import('@/views/ExperienceShow.vue'),
              props: route=> ({...route.params, id: parseInt(route.params.id)})
            }
          ]
         },

  ],
})

export default router
