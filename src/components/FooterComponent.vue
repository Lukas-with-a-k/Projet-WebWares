<template>
    <footer class="footer">
      <div class="container">
        <div class="social">
          <a href=""><i class="fab fa-facebook-f"></i><img src="@\assets\facebook.png" alt="facebook"></a>
          <a href=""><i class="fab fa-twitter"></i><img src="@\assets\X.png" alt="X"></a>
          <a href=""><i class="fab fa-instagram"></i><img src="@\assets\insta.png" alt="insta"></a>
        </div>
           
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
    background-color: #748284;
    color: #e6edeb;
    padding: 10px 0;
    text-align: center;
    position: fixed;
    bottom: 0;
    width: 100%;
}
  
  .footer p {
    margin: 0;
    position: relative;
    bottom: 20px;
  }
  
  .footer a {
    color: #3f4666;
    text-decoration: none;
  }
  
  .footer a:hover {
    text-decoration: underline;
  }
  
  .social {
    display: flex;
    justify-content: start;
    align-items: center;
   position: relative;
    left: 20px;
    top: 20px;
  }
  
  .social a {
    filter: invert(90%);
    -webkit-filter: invert(90%);
    margin: 0 10px;
    text-decoration: none;
  }
  
  
  </style>
  