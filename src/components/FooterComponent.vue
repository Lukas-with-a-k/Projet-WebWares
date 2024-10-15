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
  padding: 20px 0;
  text-align: center;
  width: 100%;
  position: fixed;
  bottom: 0;
}

.footer p {
  margin: 5px 0;
}

.footer a {
  color: #e6edeb;
  text-decoration: none;
}

.footer a:hover {
  text-decoration: underline;
}

.social {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 10px;
}

.social a {
  margin: 0 10px;
  text-decoration: none;
}

.social img {
  width: 30px;
  height: 30px;
  filter: invert(90%);
  -webkit-filter: invert(90%);
}

@media (max-width: 768px) {
  .social img {
    width: 25px;
    height: 25px;
  }
}

@media (max-width: 480px) {
  .footer p {
    font-size: 14px;
  }

  .social img {
    width: 20px;
    height: 20px;
  }
}

  
  
  </style>
  