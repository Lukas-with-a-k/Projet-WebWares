<<<<<<< Updated upstream
import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
=======
import LandingPage from "@/views/LandingPage.vue";
import { createRouter, createWebHistory } from "vue-router";
>>>>>>> Stashed changes

const routes = [
  {
    path: "/",
<<<<<<< Updated upstream
    name: "home",
    component: HomeView,
=======
    name: "LandingPage",
    component: LandingPage,
>>>>>>> Stashed changes
  },
  {
    path: "/about",
    name: "about",
    component: () => import("../views/AboutView.vue"),
  },
  {
    path: "/login",
    name: "login",
    component: () => import("../views/LoginView.vue"),
  },
  {
<<<<<<< Updated upstream
    path: "/signup",
    name: "signup",
    component: () => import("../views/SignupView.vue"),
=======
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
    path: "/category/:id",
    name: "ProductCategory",
    component: () => import("../components/ProductCategory.vue"),
  },
  {
    path: "/contact",
    name: "ContactPage",
    component: () => import("../components/ContactPage.vue"),
  },
  {
    path: "/userlist-admin",
    name: "UserlistAdmin",
    component: () => import("../views/UserlistAdmin.vue"),
>>>>>>> Stashed changes
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
