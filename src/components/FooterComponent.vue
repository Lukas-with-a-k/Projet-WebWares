<template>
    <footer class="footer">
      <div class="container">
        <p>&copy; 2024 - WebWares inc.</p>
        <p>
          <a href="">Mentions légales</a> |
          <a href="">Politique de confidentialité</a> | 
          <a href="">Conditions d'utilisation</a>
        </p>
      </div>
    </footer>
  </template>
  
  <script>
  export default {
    name: 'FooterComponent',
  };
  </script>
  
  <style scoped>
  .footer {
    background-color: #333;
    color: white;
    padding: 20px 0;
    text-align: center;
    position: fixed;
    bottom: 0;
    width: 100%;
  }
  
  .footer a {
    color: #4CAF50;
    text-decoration: none;
    margin: 0 10px;
  }
  
  .footer a:hover {
    text-decoration: underline;
  }
  </style>
  