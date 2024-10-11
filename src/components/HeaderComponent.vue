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
          
          <router-link to="/login" class="login-btn">Connexion</router-link>
          <router-link to="/signup" class="signup-btn">S'inscrire</router-link>
        </div>
      </nav>
    </header>
  </template>
  
  <script>
  export default {
    name: "HeaderComponent",
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
  
  .auth-buttons a {
    margin-left: 15px;
    padding: 10px 20px;
    background-color: #3f4666;
    color: #e6edeb;
    text-decoration: none;
    border-radius: 5px;
  }
  
  .auth-buttons a:hover {
    background-color: #4280b8;
  }
  </style>
  