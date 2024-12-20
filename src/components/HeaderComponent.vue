<template>
  <header class="header">
    <nav class="navbar" style="font-size: 26px">
      <div class="logo">
        <router-link to="/"><img src="@/assets/webwares.png" alt="logo" /></router-link>
      </div>

      <!-- Barre de navigation dynamique -->
      <ul class="nav-links">
        <router-link to="/">Accueil</router-link>
        <li>
          <router-link to="/ProductList">Nos produits</router-link>
        </li>
        <!-- Menu déroulant pour les catégories -->
        <li>
          <button @click="toggleCategoryDropdown" class="dropdown-btn" ref="categoryDropdown">
            Catégories
          </button>
          <ul class="dropdown-cat" v-if="isCategoryDropdownOpen">
            <li v-for="category in categories" :key="category.id">
              <router-link :to="`/category/${category.id}`">{{
                category.name
              }}</router-link>
            </li>
          </ul>
        </li>
      </ul>
      <div class="buttons">
        <!-- Bouton Connexion qui ouvre le formulaire -->
        <button class="btn" v-if="!isLoggedIn" @click="$emit('toggleLogin')">
          Connexion
        </button>
        <button class="btn" v-if="!isLoggedIn" @click="$emit('toggleSignup')">
          S'inscrire
        </button>

        <!-- Menu déroulant qui s'affiche quand l'utilisateur est connecté -->
        <div class="dropdown" v-if="isLoggedIn">
          <button class="dropbtn" @click="toggleDropdown">
            <img src="@/assets/profil.png" alt="user" class="icon" ref="dropdownMenu" />
          </button>
          <ul class="dropdown-content" v-if="isOpen">
            <li @:click="toggleDropdown">Bienvenue {{ userName }}</li>
            <li class="logout-btn" v-if="isLoggedIn" @click="logout">
              Déconnexion
            </li>
          </ul>
          <router-link to="/PanierUser" class="cart-btn" v-if="isLoggedIn"><img src="@/assets/panier.png" alt="panier"
              class="icon-panier" /><span v-if="cartCount > 0" class="cart-count">{{ cartCount }}</span></router-link>
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
    name: {
      type: String,
      default: "",
    },
  },
  data() {
    return {
      isOpen: false,
      isCategoryDropdownOpen: false,
      isAdmin: false,
      userId: "",
      categories: [
        { id: 1, name: "Mobilier" },
        { id: 2, name: "Luminaires" },
        { id: 3, name: "Tapis" },
        { id: 4, name: "Déco" },
      ],
      produitsInPanier: [],
    };
  },
  computed: {
    // Calculer le nombre de produit dans le panier 
    cartCount() {
      return this.produitsInPanier.length;
    },
  },
  methods: {
    loadCart() {
      // Charger les produits depuis localStorage
      const produits = JSON.parse(localStorage.getItem('produitsInPanier')) || [];
      console.log("Produits chargés depuis localStorage :", produits);
      this.produitsInPanier = produits;
      this.cartCount = produits.length;
    },
    addProductToCart(product) {
      this.produitsInPanier.push(product);
    },
    logout() {
      this.$emit("logout");
      this.isOpen = false;
      localStorage.removeItem("userId");
      localStorage.removeItem("userType");
      localStorage.removeItem("produitsInPanier");// Ajoute ça dans ton code !!!
    },

    // Fonction pour afficher le menu déroulant
    toggleDropdown() {
      this.isOpen = !this.isOpen;
    },
    closeDropdown(event) {
      // Vérifier si le clic est à l'extérieur du dropdown
      if (
        this.isOpen &&
        this.$refs.dropdownMenu &&
        !this.$refs.dropdownMenu.contains(event.target)
      ) {
        this.isOpen = false;
      }
    },
    // Fonction pour afficher le dropdown des catégories
    toggleCategoryDropdown() {
      this.isCategoryDropdownOpen = !this.isCategoryDropdownOpen;
    },
    closeCategoryDropdown(event) {
      // Vérifier si le clic est à l'extérieur du dropdown des catégories
      if (this.isCategoryDropdownOpen && this.$refs.categoryDropdown && !this.$refs.categoryDropdown.contains(event.target)) {
        this.isCategoryDropdownOpen = false;
      }
    },
    checkUserType() {
      const userType = localStorage.getItem("userType");
      this.isAdmin = userType === "admin";
    },
  },

  created() {
    const storedUserId = localStorage.getItem("userId");
    if (storedUserId) {
      this.userId = storedUserId;
    }
    const storedName = localStorage.getItem("userName");
    if (storedName) {
      this.userName = storedName;
    }
    this.loadCart();

  },
  mounted() {
    document.addEventListener("click", this.closeDropdown);
    document.addEventListener('click', this.closeCategoryDropdown);
    this.checkUserType();
  },

  beforeUnmount() {
    document.removeEventListener("click", this.closeDropdown);
    document.removeEventListener('click', this.closeCategoryDropdown);
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
.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
}

.dropdown {
  display: flex;
}

.dropdown-btn {

  background-color: #3f4666;
  color: white;
  border: none;
  padding: 10px;
  cursor: pointer;
  border-radius: 5px;
  font-size: 24px;
  font-weight: bold;
}

.dropdown-btn:hover {
  background-color: #f2f2f2;
  color: #3f4666;
}

.dropdown-content {
  position: absolute;
  top: 125px;
  right: 120px;
  background-color: #3f4666;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  border-radius: 5px;
  list-style: none;
  padding: 10px;
  z-index: 1000;
  font-size: medium;
  animation: fade-in 0.2s ease-in-out;
}

.cart-count {
  position: absolute;
  top: 4px;
  color: #f5fc2aa0;
  font-size: 22px;
}

.dropdown-cat {
  position: absolute;
  background-color: #3f4666;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  border-radius: 5px;
  list-style: none;
  padding: 10px;
  z-index: 1000;
  font-size: medium;
  animation: fade-in 0.2s ease-in-out;
}

.dropdown-content li {
  padding: 10px;
  color: white;
  cursor: pointer;
}

.dropdown-content li:hover {
  background-color: #3498db;
  border-radius: 5px;
  padding: 10px;
}

.dropdown-content a {
  text-decoration: none;
  color: white;
}

.is-open {
  display: block;
}

.header {
  background-color: #748284;
  position: relative;
  z-index: 9;
}

.btn {
  background-color: #3f4666;
  color: #e6edeb;
  border-radius: 5px;
  border: none;
  cursor: pointer;
  padding: 20px;
  margin: 10px;
  font-size: 18px;
}

.logo img {
  height: 150px;
  width: 170px;
  margin-right: 100px;
}

.nav-links {
  list-style: none;
  display: flex;
  align-items: center;
  margin: 0;
  padding: 0;
}

.nav-links a {
  color: #e6edeb;
  text-decoration: none;
  padding: 10px;
}

.nav-links li {
  padding: 10px;
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
  padding: 20px;
  margin: 10px;

}

.dropbtn:hover {
  background-color: #4280b8;
  transition: all 0.3s ease-in-out;
}

.cart-btn {
  position: relative;
  background-color: #3f4666;
  color: #e6edeb;
  border-radius: 5px;
  border: none;
  cursor: pointer;
  padding: 20px;
  margin: 10px;
}

ul {
  margin: 0;
  padding: 0;
}

.cart-btn:hover {
  background-color: #4280b8;
  transition: all 0.3s ease-in-out;
}

.icon {
  width: 40px;
  height: 40px;
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
  .container {
    width: 100%;
    display: flex;
    justify-content: space-between;
  }

  .navbar {
    flex-direction: column;
    padding: 20px;
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

  .nav-links {
    flex-direction: column;
    width: 100%;
    margin: 10px;
  }

  .dropdown {
    position: relative;
  }

  .dropdown-content {
    position: absolute;
    top: 95px;
    right: 110px;
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

}

@keyframes fade-in {
  0% {
    opacity: 0;
  }

  100% {
    opacity: 1;
  }
}
</style>
