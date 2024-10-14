<template>
  <header class="header">
    <nav class="navbar">
      <div class="logo">

        <router-link to="/"><img src="@/assets/webwares.png" alt="logo" style="width: 200px ;height: 160px;"></router-link>
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
        <!-- Bouton Connexion qui ouvre le formulaire -->
          <button v-if="!isLoggedIn" @click="$emit('toggleLogin')">Connexion</button>
          <button @click="$emit('toggleSignup')" v-if="!isLoggedIn">S'inscrire</button>        

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

  }

};

</script>

<style scoped>
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
  background-color: #3f4666;
  color: #e6edeb;
  text-decoration: none;
  border-radius: 5px;
  border: none;
  cursor: pointer;
  padding: 10px;
  margin-left: 10px;
  font-size: 15px;
}

.auth-buttons a:hover,
.auth-buttons button:hover {
  background-color: #4280b8;
}


.dropdown {
  position: relative;
  display: inline-block;
}

.dropbtn {
  background-color: #3f4666;
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
  display: none;
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

.dropdown:hover .dropdown-content {
  display: block;
}


.cart-btn {
  display: inline-flex;
   background-color: #3498db;
  color: rgb(255, 255, 255);
  margin: 10px;
  padding: 10px;
  border: none;
  cursor: pointer;
  border-radius: 5px;
}

.cart-btn:hover {
  background-color: #4280b8;
}


.icon {
  display: flex;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  object-fit: cover;
  cursor: pointer;
  
  
}

.icon-panier {
  width: 40px;
  height: 40px;
  border-radius: 0%;
  cursor: pointer;

}

</style>