<template>
  <header class="header">
    <nav class="navbar">
      <div class="logo">

        <router-link to="/"><img src="@/assets/webwares.png" alt="logo" style="width: 200px ;height: 160px;"></router-link>
      </div>
      <ul class="nav-links">
        <router-link to="/">Accueil</router-link>
        <li>
          <router-link to="/ProductList">Tous les produits</router-link>
        </li>
         <!-- Affichage dynamique des catégories -->
         <li v-for="category in categories" :key="category.id">
          <router-link :to="`/category/${category.id}`">{{ category.name }}</router-link>
        </li>
      </ul>
      <div class="auth-buttons">
        <!-- Bouton Connexion qui ouvre le formulaire -->
          <button v-if="!isLoggedIn" @click="$emit('toggleLogin')">Connexion</button>
          <button v-if="!isLoggedIn" @click="$emit('toggleSignup')">S'inscrire</button>        

        <!-- Menu déroulant qui s'affiche quand l'utilisateur est connecté -->
        <div class="dropdown" v-if="isLoggedIn">
          <button class="dropbtn" @click="toggleDropdown"><img src="@\assets\profil.png" alt="user"
              class="icon"></button>
          <ul class="dropdown-content" v-if="isOpen">
            <li>Bienvenue {{ userId }}</li>
            <li class="logout-btn" v-if="isLoggedIn" @click="logout">Déconnexion</li>
          </ul>
        </div>

        <!-- le panier qui s'affiche quand l'utilisateur est connecté -->
        <router-link to="/PanierUser" class="cart-btn" v-if="isLoggedIn"><img src="@\assets\panier.png" alt="panier"
            class="icon-panier"></router-link>

      </div>
    </nav>
  </header>
</template>

<script>

export default {
  name: "HeaderComponent", 
  props: {
    isLoggedIn: {
      type: Boolean,
      userType: String,
    },
  },
  data() {
    return {
      isOpen: false,
      userId: "",
      categories: [
        { id: 1, name: 'Mobilier' },
        { id: 2, name: 'Luminaires' },
        { id: 3, name: 'Tapis' },
        { id: 4, name: 'Déco'  },
      ],
    }; 
  },
  
  methods: {
   
    logout() {
      this.$emit("logout");
      this.isOpen = false;
      localStorage.removeItem("userId");
      localStorage.removeItem("userType");
    },
    
    // fonction qui permet d'afficher le menu déroulant
    toggleDropdown() {
      this.isOpen = !this.isOpen;
    },
  },
  created() {
    const storedUserId = localStorage.getItem("userId");
    if (storedUserId) {
      this.userId = storedUserId;
  }

  },
  watch: {
    isLoggedIn() {
      const storedUserId = localStorage.getItem("userId");
      if (storedUserId) {
        this.userId = storedUserId;
      }
    },
  },

};
</script>
<style>


.header {
  background-color: #748284;
  padding: 0px;
  font-size: 24px;
}

.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 30px; 
}

.nav-links {
  list-style: none;
  display: flex;
  align-items: center;
  margin: 0;
  padding: 0;
}

.nav-links li {
  margin-left: 20px;
}

.nav-links a {
  color: #e6edeb;
  text-decoration: none;
}

.auth-buttons a,
.auth-buttons button {
  background-color: #3f4666;
  color: #e6edeb;
  text-decoration: none;
  border-radius: 5px;
  border: none;
  cursor: pointer;
  padding: 10px;
  margin-right: 20px;
  font-size: 15px;
  font-weight: bold;
}

.auth-buttons a:hover,
.auth-buttons button:hover {
  background-color: #4280b8;
}

.dropdown-content {
  position: absolute;
  background-color: #3f4666;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  border-radius: 5px;
  z-index: 1;
  list-style: none;
  margin: 0;
  padding: 0;
  width: 150px;
  font-size: 16px;
}

.dropdown-content li {
  padding: 10px;
  cursor: pointer;
  border-radius: 5px;
  color: white;
}

.dropdown-content li:hover {
  background-color: #4280b8;
}

.cart-btn {
  display: inline-flex;
  background-color: #3498db;
  color: rgb(255, 255, 255);
  border: none;
  cursor: pointer;
  border-radius: 5px;
  margin-right: 10px;
}

.icon {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  object-fit: cover;
  cursor: pointer;
  filter: invert(90%);
}

.icon-panier {
  width: 40px;
  height: 40px;
  object-fit: cover;
  cursor: pointer;
  filter: invert(90%);
}

@media (max-width: 768px) {
  .navbar {
    flex-direction: column;
    align-items: flex-start;
  }

  .nav-links {
    flex-direction: column;
    align-items: flex-start;
    width: 100%;
  }

  .nav-links li {
    margin-left: 0;
    margin-bottom: 10px;
  }

  .auth-buttons {
    display: flex;
    flex-direction: column;
    width: 100%;
    margin-top: 10px;
  }

  .auth-buttons a,
  .auth-buttons button {
    width: 100%;
    text-align: center;
    margin-right: 0;
    margin-bottom: 10px;
  }
}

@media (max-width: 480px) {
  .navbar {
    padding: 10px;
  }

  .logo img {
    width: 150px;
    height: auto;
  }

  .auth-buttons {
    flex-direction: column;
    align-items: stretch;
  }

  .auth-buttons a,
  .auth-buttons button {
    padding: 8px;
    font-size: 14px;
  }

  .nav-links a {
    font-size: 16px;
  }

  .icon,
  .icon-panier {
    width: 30px;
    height: 30px;
  }
  /* Couleur du lien actif */
.nav-links .router-link-active {
  color: rgb(209, 10, 10) !important;
}

/* Couleur du lien actif au survol */
.router-link-active:hover {
  color: rgb(161, 169, 50) !important;
}
}
</style>