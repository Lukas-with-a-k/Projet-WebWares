import LandingPage from '@/views/LandingPage.vue'
import { createRouter, createWebHistory } from 'vue-router'


const routes = [
  { 
    path: '/',
    name: 'LandingPage',
    component: LandingPage,
    
  },
  {
    path: "/ProductDetails",
    name: "ProductDetails",
    component: () => import("../views/ProductDetails.vue"),
  },
  {
    path: "/ProductList",
    name: "ProductList",
    component: () => import("../views/ProductList.vue"),
  },
];
const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
