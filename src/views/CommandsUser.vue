<template>
  <div class="container">
      <div class="container1">
          <h4>Information pour livrason</h4>
          <form>
              <UserForm :user="user" @userdata="user = $event" @validationResults="handlerRes"></UserForm>
          </form>
          <ButtonComponent label="Confirmer l'information" @click="verifier" color="darkgray" hcolor="gray" />
          <p v-if="isError" style="color: red;"> {{ errorMessage }}</p>
      </div>
      <div class="container2">
          <div class="prix">
              <p>HT : {{ prix.ht }} €</p>
              <p>TVA : {{ prix.tva }} €</p>
              <p>A payer : {{ prix.prixTotal }} €</p>
          </div>
          <div class="button">
              <ButtonComponent label="Commander" :isDisabled="isDisabled" @click="commander" color="green" hcolor="darkgreen" />
          </div>
      </div>
  </div>
</template>

<script>
import ButtonComponent from '@/components/ButtonComponent.vue';
import UserForm from '@/components/UserForm.vue';

export default {
  components: { ButtonComponent, UserForm },
  data() {
      return {
          usersData: [],
          user: {},
          userCommand: [],
          userCommands: [],
          userId: "",
          prix: {},
          errorMessage: '',
          isError: false,
          isDisabled: false,
          validationErrors: {}
      };
  },
  methods: {
      userData() {
          let id = this.userId;
          let user = this.usersData.find(user => user.username === id);
          if (user) {
              this.user = user;
          }
      },
      verifier() {
          this.phoneValid = this.checkPhone();
          this.usernameValid = this.checkUsername();

          if (!this.user.name || !this.user.phone || !this.user.postal || !this.user.city || !this.user.adress) {
              this.errorMessage = 'Veuillez remplir tous les champs correctement';
              this.isError = true;
              return;
          }
          this.isError = false;
          this.isDisabled = true;
      },
      handlerRes(errors) {
          this.validationErrors = errors;
          this.isError = Object.values(errors).some(error => error !== '');
      },
      checkPhone() {
          const phoneRegex = /^(0[1-9]([-. ]?[0-9]{2}){4}|(\+33|0033)[1-9]([-. ]?[0-9]{2}){4})$/;
          return !phoneRegex.test(this.user.phone);
      },
      checkUsername() {
          const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
          return !emailRegex.test(this.user.mail);
      },
      commander() {
          let existingCommands = JSON.parse(localStorage.getItem(`user_${this.user.id}`)) || [];
          existingCommands.push(this.userCommand);
          localStorage.setItem(`user_${this.user.id}`, JSON.stringify(existingCommands));
          localStorage.removeItem("produitsInPanier");
      }
  },
  created() {
      this.userId = localStorage.getItem("userId");
      this.userCommand = JSON.parse(localStorage.getItem("produitsInPanier"));
      this.prix = JSON.parse(localStorage.getItem("prix")) || this.prix;
      this.usersData = JSON.parse(localStorage.getItem("accounts")) || [];
      this.userData();
  },
  mounted() {
      if (!localStorage.getItem('produitsInPanier')) {
          alert("Votre panier est vide");
      }
  }
};
</script>







<style scoped>
.container {
display: flex;
justify-content: space-around;
}
.container2{
flex-direction: column;

justify-content: space-around;
}
.prix{
    flex-direction: column;
  padding: 10px;
  justify-content: space-around;
  border: 1px solid black;
  border-radius: 5px;
  margin:20px 0;
}
form {
    display: flex;
    flex-direction: column;
}
/* @media (max-width: 360px) {
  .bkg {
    background-image: none;
  }
  .container {
    display: flex;
    flex-direction: column;
    align-items: center;
    
  }
  .container1, .container2 {
   
    width: auto;
    padding: 15px;
  }} */
</style>