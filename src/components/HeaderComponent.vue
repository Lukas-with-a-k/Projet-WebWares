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
            <!-- le panier qui s'affiche quand l'utilisateur est connecté -->
            <router-link to="/PanierUser" class="cart-btn" v-if="isLoggedIn"><img src="@\assets\panier.png" alt="panier"
                class="icon-panier"></router-link>
            <ul class="dropdown-content" v-if="isOpen">
            <li v-on:click="toggleDropdown">Bienvenue {{ userId }}</li>
            <li class="logout-btn" v-if="isLoggedIn" @click="logout">Déconnexion</li>
          </ul>
        </div>
        
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

.nav-links a:hover {
  color: #4280b8;
}


.auth-buttons button {
  background-color: #3f4666;
  color: #e6edeb;
  text-decoration: none;
  border-radius: 5px;
  border: none;
  cursor: pointer;
  padding: 10px 20px;
  margin-right: 20px;
  font-size: 16px;
  transition: background-color 0.3s ease;
}

.auth-buttons button:hover {
  background-color: #4280b8;
}

.dropdown {
  position: relative;
}

.dropdown-content {
  position: absolute;
  top: 65px;
  right: 110px;
  background-color: #3f4666;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  border-radius: 5px;
  list-style: none;
  z-index: 1000;
  margin: 0;
  padding: 0;
  font-size: 16px;
  width: 150px;
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

.dropbtn {
  background-color: #3f4666;
  color: rgb(255, 255, 255);
  border: none;
  cursor: pointer;
  border-radius: 5px;
  min-width: 40px; 
}

.cart-btn {
 background-color: #3f4666;
  border: none;
  cursor: pointer;
  border-radius: 5px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 75px;
  height: 63px;
  padding-top: 1px;
  padding-bottom: 1px;
  margin-right: 20px;
 }

.cart-btn:hover {
  background-color: #4280b8;
  transition: all 0.3s ease-in-out;
}

.icon {
  width: 40px;
  height: 40px;
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
    width: 100%;
    margin-top: 10px;
    flex-direction: row;
    justify-content: space-between;
  }

  .auth-buttons a,
  .auth-buttons button {
    width: 100%;
    text-align: center;
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
}

</style>