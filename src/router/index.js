import LandingPage from '@/views/LandingPage.vue'
import { createRouter, createWebHistory } from 'vue-router'


const routes = [
  { 
    path: '/',
    name: 'LandingPage',
    component: LandingPage,
    
  },
  {
   
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
