<template>
    <header class="header">
      <nav class="navbar">
        <div class="logo">
          
          <router-link to="/">WebWares</router-link> 
        </div>
        <ul class="nav-links">
          <li>
            <router-link to="/">Accueil</router-link>
          </li>
          <li>
            <router-link to="/deco">Déco</router-link>
          </li>
          <li>
            <router-link to="/luminaires">Luminaires</router-link>
          </li>
          <li>
            <router-link to="/mobilier">Mobilier</router-link>
          </li>
          <li>
            <router-link to="/tapis">Tapis</router-link>
          </li>
          <li>
            <router-link to="/ProductList">Liste des produits</router-link>
          </li>
        </ul>
        <div class="auth-buttons">
          <!-- bouton temporaire qui permet de tester la connexion -->
          <button class="login-btn" v-if="!isLoggedIn" @click="login">test connexion</button>
          
          <router-link to="/login" class="login-btn" v-if="!isLoggedIn">Connexion</router-link>
          <router-link to="/signup" class="signup-btn" v-if="!isLoggedIn">S'inscrire</router-link>
          
          <!-- Menu déroulant qui s'affiche quand l'utilisateur est connecté -->
          <div class="dropdown" v-if="isLoggedIn">
            <button class="dropbtn" @click="toggleDropdown"><img src="@\assets\profil.png" alt="user" class="icon"></button>
            <ul class="dropdown-content" v-if="isOpen">
              <li>Bienvenue[Raison sociale]</li>
              <li class="logout-btn" v-if="isLoggedIn" @click="logout">Déconnexion</li>
            </ul>
          </div>
          
          <!-- le panier et le bouton de deconnexion qui s'affichent quand l'utilisateur est connecté -->
          <router-link to="/panier" class="cart-btn" v-if="isLoggedIn">Panier</router-link>

        
        </div>
      </nav>
    </header>
  </template>
  
  <script>

  export default {
    name: "HeaderComponent",
    data() {
      return {
        isLoggedIn: false,
        isOpen: false,
      };
    },
    methods: {
      // fonction qui permet d'afficher le menu déroulant
      toggleDropdown() {
        this.isOpen = !this.isOpen;
        
      },
      // fonction qui permet de se deconnecter
      logout() {
        localStorage.setItem("isLoggedIn", false);
        this.isLoggedIn = false;
        this.$router.push("/login");
        this.isOpen = false;
      },
      login() {
        this.isLoggedIn = true;
      },
      // fonction qui permet de vérifier si l'utilisateur est connecté
      checkLogin() {
        this.isLoggedIn = localStorage.getItem("isLoggedIn") === "true";
      },
    },
    // fonction qui permet de vérifier si l'utilisateur est connecté au chargement de la page
    mounted() {
      this.checkLogin();
    },
  // watcher qui permet de vérifier si l'utilisateur est connecté au changement de page
    watch: {
      $route() {
        this.checkLogin();
      },
    },
   
  };
  </script>
  
  <style scoped>
  .header {
    background-color: #748284;
    padding: 20px;
  }
  
  .navbar {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  
  .logo a {
    color: #e6edeb;
    font-size: 24px;
    text-decoration: none;
  }
  
  .nav-links {
    list-style: none;
    display: flex;
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
    margin-left: 15px;
    padding: 10px 20px;
    background-color: #3f4666;
    color: #e6edeb;
    text-decoration: none;
    border-radius: 5px;
    border: none;
    cursor: pointer;
    width: 100px;
   
  }
  
  .auth-buttons a:hover,
  .auth-buttons button:hover {
    background-color: #4280b8;
  }

  .logout-btn {
  border: none;
  background-color: #3f4666;
  color: #e6edeb;
  border-radius: 5px;
}

.dropdown {
  position: relative;
  display: inline-block;
}
.dropbtn {
  background-color: #3498db;
  color: white;
  padding: 10px;
  border: none;
  cursor: pointer;
  border-radius: 5px;
  
}

.dropdown-content {
  position: absolute;
  background-color: #3f4666;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  border-radius: 5px;
  list-style: none;
  margin: 0;
  padding: 0;
  width: 150px;
}

.dropdown-content li {
  padding: 10px;
  cursor: pointer;
  border-radius: 5px;

}

.dropdown-content li:hover {
  background-color: #3498db;
}

.icon {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  object-fit: cover;
  cursor: pointer;
  background-color: #ffffff;
  
  
}

  
  </style>
  