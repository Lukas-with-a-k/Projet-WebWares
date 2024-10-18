<template>
    <div class="contact-page">
      <h1>Contactez-nous</h1>
  
      <div class="contact-info">
        <h2>Coordonnées de WebWares</h2>
        <p><strong>Adresse :</strong> 10 rue de la Paix, 75001 Paris</p>
        <p><strong>Téléphone :</strong> 01 23 45 67 89</p>
        <p><strong>Email :</strong> contact@webwares.com</p>
      </div>
  
      <div class="contact-form">
        <h2>Formulaire de contact</h2>
        <form @submit.prevent="submitForm">
          <div class="form-group">
            <label for="name">Nom :</label>
            <input type="text" id="name" v-model="name" required />
          </div>
  
          <div class="form-group">
            <label for="email">Email :</label>
            <input type="email" id="email" v-model="email" required />
          </div>
  
          <div class="form-group">
            <label for="message">Message :</label>
            <textarea id="message" v-model="message" required></textarea>
          </div>
  
          <button type="submit">Envoyer</button>
        </form>
  
        <div v-if="isSubmitted" class="submission-success">
          <p>Merci de nous avoir contactés. Nous vous répondrons dans les plus brefs délais.</p>
        </div>
      </div>
    </div>
  </template>
  <script>
  export default {
    data() {
      return {
        name: "",
        email: "",
        message: "",
        isSubmitted: false,
      };
    },
    methods: {
      submitForm() {
        
        this.isSubmitted = true;
        
  
    
        this.name = "";
        this.email = "";
        this.message = "";
      },
    },
  };
  </script>
  <style scoped>
  .contact-page {
    padding: 20px;
    max-width: 600px;
    height: 74vh;
    margin: 0 auto;
  }
  
  h1,
  h2 {
    color: #3f4666;
  }
  
  .contact-info {
    background-color: #f2f2f2;
    padding: 15px;
    margin-bottom: 20px;
    border-radius: 8px;
  }
  
  .contact-form {
    background-color: #ffffff;
    padding: 40px;
    box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.1);
    border-radius: 8px;
    
  }
  
  
  .form-group {
    margin-bottom: 15px;
    
  }
  
  label {
    font-weight: bold;
    display: block;
    margin-bottom: 5px;
  }
  
  input,
  textarea {
    width: 100%;
    padding: 10px;
    font-size: 16px;
    border: 1px solid #ccc;
    border-radius: 4px;
  }
  
  button {
    background-color: #3f4666;
    color: white;
    border: none;
    padding: 10px 20px;
    font-size: 16px;
    cursor: pointer;
    border-radius: 4px;
  }
  
  button:hover {
    background-color: #4280b8;
  }
  
  .submission-success {
    margin-top: 20px;
    color: green;
  }
  </style>
  