import LandingPage from '@/views/LandingPage.vue'
import { createRouter, createWebHistory } from 'vue-router'



const routes = [
  { 
    path: '/',
    name: 'LandingPage',
    component: LandingPage,
    
  },
  {
    path: "/ProductList",
    name: "ProductList",
    component: () => import("../views/ProductList.vue"),
  },
  {
    path: "/ProductList/ProductDetails",
    name: "ProductDetails",
    component: () => import("../views/ProductDetails.vue"),
  },
  {
  path: "/PanierUser",
  name: "PanierUser",
  component: () => import("../views/PanierUser.vue"),

},
{
  path: "/UserCommands",
  name: "commands",
  component: () => import("../views/CommandsUser.vue"),

},
];
const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
