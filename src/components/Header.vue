<template>
    <header class="header">
      <nav class="navbar">
        <div class="logo">
          
          <router-link to="/">MonLogo</router-link>
        </div>
        <ul class="nav-links">
          <li>
            <router-link to="/">Accueil</router-link>
          </li>
          <li>
            <router-link to="/about">À propos</router-link>
          </li>
          <li>
            <router-link to="/services">Services</router-link>
          </li>
          <li>
            <router-link to="/contact">Contact</router-link>
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
    name: "Header",
  };
  </script>
  
  <style scoped>
  .header {
    background-color: #333;
    padding: 20px;
  }
  
  .navbar {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  
  .logo a {
    color: white;
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
    color: white;
    text-decoration: none;
  }
  
  .auth-buttons a {
    margin-left: 15px;
    padding: 10px 20px;
    background-color: #f9f9f9;
    color: #333;
    text-decoration: none;
    border-radius: 5px;
  }
  
  .auth-buttons a:hover {
    background-color: #ccc;
  }
  </style>
  