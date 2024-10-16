<template>
  <header class="header">
    <nav class="navbar" style="font-size: 26px;">
      <div class="logo">
        <router-link to="/"><img src="@/assets/webwares.png" alt="logo"></router-link>
      </div>
      <!-- Menu burger responsive -->
      <div class="container" v-if="isMobile">
        <ul class="burger" v-if="isMobile">
          <button class="menubtn" @click="toggleBurger">Menu</button>
          <ul class="burger-links" v-if="showBurger">
            <li>
              <router-link to="/">Accueil</router-link>
            </li>
            <li>
              <router-link to="/ProductList">Tous les produits</router-link>
            </li>
            <li v-for="category in categories" :key="category.id">
              <router-link :to="`/category/${category.id}`">{{ category.name }}</router-link>
            </li>
          </ul>
          <div class="auth-buttons">
            <!-- Bouton Connexion qui ouvre le formulaire -->
            <button v-if="!isLoggedIn" @click="$emit('toggleLogin')" class="bouts">Connexion</button>
            <button v-if="!isLoggedIn" @click="$emit('toggleSignup')" class="bouts">S'inscrire</button>

            <!-- Menu déroulant qui s'affiche quand l'utilisateur est connecté -->
            <div class="dropdown" v-if="isLoggedIn">
              <button class="dropbtn" @click="toggleDropdown"><img src="@\assets\profil.png" alt="user"
                  class="icon"></button>
              <!-- le panier qui s'affiche quand l'utilisateur est connecté -->
              <ul class="dropdown-content" v-if="isOpen">
                <li v-on:click="toggleDropdown">Bienvenue {{ userId }}</li>
                <li class="logout-btn" v-if="isLoggedIn" @click="logout">Déconnexion</li>
              </ul>
              <router-link to="/PanierUser" class="cart-btn" v-if="isLoggedIn"><img src="@\assets\panier.png"
                  alt="panier" class="icon-panier"></router-link>
            </div>
          </div>
        </ul>
      </div>
      <!-- Barre de navigation dynamique -->
      <ul class="nav-links" v-else>
        <router-link to="/">Accueil</router-link>
        <li>
          <router-link to="/ProductList">Tous les produits</router-link>
        </li>
        <!-- Affichage dynamique des catégories -->
        <li v-for="category in categories" :key="category.id">
          <router-link :to="`/category/${category.id}`">{{ category.name }}</router-link>
        </li>
      </ul>
      <div class="auth-buttons" v-if="!isMobile">
        <!-- Bouton Connexion qui ouvre le formulaire -->
        <button v-if="!isLoggedIn" @click="$emit('toggleLogin')">Connexion</button>
        <button v-if="!isLoggedIn" @click="$emit('toggleSignup')">S'inscrire</button>

        <!-- Menu déroulant qui s'affiche quand l'utilisateur est connecté -->
        <div class="dropdown" v-if="isLoggedIn">
          <button class="dropbtn" @click="toggleDropdown"><img src="@\assets\profil.png" alt="user"
              class="icon"></button>
          <!-- le panier qui s'affiche quand l'utilisateur est connecté -->
          <ul class="dropdown-content" v-if="isOpen">
            <li v-on:click="toggleDropdown">Bienvenue {{ userId }}</li>
            <li class="logout-btn" v-if="isLoggedIn" @click="logout">Déconnexion</li>
          </ul>
          <router-link to="/PanierUser" class="cart-btn" v-if="isLoggedIn"><img src="@\assets\panier.png"
              alt="panier" class="icon-panier"></router-link>
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
      showBurger: false,
      isMobile: window.innerWidth <= 768,
      isOpen: false,
      userId: "",
      categories: [
        { id: 1, name: 'Mobilier' },
        { id: 2, name: 'Luminaires' },
        { id: 3, name: 'Tapis' },
        { id: 4, name: 'Déco' },
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
    toggleBurger() {
      this.showBurger = !this.showBurger;
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
}


.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.logo img {
  height: 150px;
  width: 170px;
  margin-left: 20px;
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

.dropbtn {
  background-color: #3f4666;
  color: #e6edeb;
  border-radius: 5px;
  border: none;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.cart-btn {
  display: flex;
  margin: 20px;
  padding: 5px;
  background-color: #3f4666;
  width: 65px;
  height: 55px;
  border-radius: 5px;
  justify-content: center;
  align-items: center;
}

.auth-buttons button {
  background-color: #3f4666;
  color: #e6edeb;
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
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
  margin: 10px;
}

ul {
  margin: 0;
  padding: 0;
}


.dropdown-content {
  position: absolute;
  top: 110px;
  right: 85px;
  background-color: #3f4666;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  border-radius: 5px;
  list-style: none;
  margin: 0;
  padding: 0;
  width: 150px;
  z-index: 10000;
}

.dropdown-content li {
  padding: 10px;
  color: white;
  cursor: pointer;
  border-radius: 5px;
  font-size: 16px;

}

.dropdown-content li:hover {
  background-color: #3498db;
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
  .burger {
    display: flex;
    flex-direction: row;
    align-items: center;
  }

  .cart-btn {
    padding: 15px;
  }
  
  .container {
    width: 100%;
    display: flex;
    justify-content: space-between;
  }
 
  .navbar {
    flex-direction: column;
    padding: 10px;
}

  .logo {
    margin-bottom: 10px;
    border-bottom: #000000 1px solid;
    width: 100%;
  }

  .logo img {
    width: 160px;
    height: 140px;
    margin-right: 0px;

  }

  .menubtn {
  background-color: #3f4666;
  color: #e6edeb;
  border-radius: 5px;
  border: none;
  cursor: pointer;
  padding: 25px 20px;
  transition: background-color 0.3s ease;
}


  .burger-links {
    position: absolute;
    top: 280px;
    left: 10px;
    background-color: #3f4666;
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
    border-radius: 5px;
    list-style: none;
    margin: 0;
    padding: 0;
    width: 150px;
    z-index: 99999;
  }

  .burger-links li {
    text-decoration: none;
    padding: 5px;
    color: white;
    cursor: pointer;
    border-radius: 5px;
    font-size: 16px;
  }

  .burger-links li:hover {
    background-color: #3498db;
  }

  .burger-links a {
    text-decoration: none;
    color: white;
  }

  .nav-links {
    flex-direction: column;
    align-items: flex-start;
    width: 100%;
    margin: 10px;
  }

  .nav-links li {
    margin: 5px;
  }

  .dropdown {
padding: 10px;
    width: 100%;
    text-align: left;
  }

  .dropdown-content {
    position: absolute;
    top: 280px;
    left: 120px;
    background-color: #3f4666;
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
    border-radius: 5px;
    list-style: none;
    margin: 0;
    padding: 0;
    z-index: 10000;
  }
  .cart-btn {
    width: 50px;
    height: 35px;
  }
 


}

@media (max-width: 480px) {
  .navbar {
    padding: 10px;
  }

  .logo {
    margin-bottom: 10px;
    border-bottom: #000000 1px solid;
    width: 100%;
  }

  .logo img {
    width: 90px;
    height: 80px;
    margin-right: 300px;

  }

  .auth-buttons {
    flex-direction: column;
    align-items: stretch;
  }

  .auth-buttons a,
  .auth-buttons button {

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

  .cart-btn {
    width: 50px;
    height: 50px;
  }
}
</style>