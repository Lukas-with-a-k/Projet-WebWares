import LandingPage from '@/views/LandingPage.vue';
import { createRouter, createWebHistory } from 'vue-router';


const routes = [
  { 
    path: '/',
    name: 'LandingPage',
    component: LandingPage,
    
  },
  {
    path: "/userlist-admin",
    name: "UserlistAdmin",
    component: () => import("../views/UserlistAdmin.vue"),
  },
  {//ajoute dans ton fichier !!!
    path: "/commands-admin",
    name: "CommandstAdmin",
    component: () => import("../views/CommandsAdmin.vue"),
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
{
  // ici on récupère l'id de la catégorie dans l'url
  path: '/category/:id',
  name: 'ProductCategory',
  component: () => import("../components/ProductCategory.vue"),
},
{
  path: '/contact'
  , name: 'ContactPage'
  , component: () => import("../components/ContactPage.vue")
}
];
const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router