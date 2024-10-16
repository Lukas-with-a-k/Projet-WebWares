<template>
    <div class="container">
        <div class="container1">
        <h4>Information pour livrason</h4> 
       <form><UserForm :user="user" @userdata="user = $event"/></form>
     <!-- <label for="name">Raison sociale</label>
    <input name="name" :value="user.name"/>
    <label for="phone">Numéro de téléphone</label>
    <input name="phone" :value="user.phone"/>
    <label for="postal">Code Postal</label>
    <input name="postal" :value="user.postal"/>
    <label for="city">Ville</label>
    <input name="city" :value="user.city"/>
    <label for="adress">Adresse</label>
    <input name="adress" :value="user.adress"/> -->
       <!-- <button class="verif" >Utiliser cette information</button> -->
    <ButtonComponent label="Confirmer l'information" @click="verifier()" color="darkgray" hcolor="gray"/>
      </div>
       <div class="container2">
        <div class="prix">
   <p>HT : {{ prix.ht }} €</p>
    <p>TTC :  {{ prix.tva }} €</p>
   <p> A payer :  {{ prix.prixTotal }} €</p>
  </div>
    <div class="button">
      <ButtonComponent label="Commander" isDisabled @click="commander()" color="green" hcolor="darkgreen"/>
      <p v-if="isError">erreur : {{ errorMessage }}</p>
    </div>
  </div>
    </div>

</template>

<script>
import ButtonComponent from '@/components/ButtonComponent.vue';
import UserForm from '@/components/UserForm.vue';


    export default {
        components: {
ButtonComponent,
UserForm
        },
        data(){
return {
  usersData: [],
  user: {},
  userCommand:[],
  userCommands: [],
  userId: "",
    prix: {},
    errorMessage:'',
    isError:false,
    isDisabled: false
}

 }, 

 methods: {
    userData(){
        let id = this.userId;
            let user = this.usersData.find((user) => user.username === id);
            if (user) {
                this.user = user;
}
console.log(user);
console.log(id);
    },
    verifier(){
        if(!this.user.name || !this.user.phone || !this.user.postal || !this.user.city || !this.user.adress){
                    this.errorMessage='Veuillez remplir tous les champs';
                    this.isError=true;
                    return;
                }
               
                //  enregistrer les modifs dans le localStorage
                
                // faire une redirection après mise à jour
                this.isError=false;
                this.isDisabled=true;
             
                // this.user = {};
            },
            checkPhone() {
      const phoneRegex =
        /^(0[1-9]([-. ]?[0-9]{2}){4}|(\+33|0033)[1-9]([-. ]?[0-9]{2}){4})$/;
      if (!phoneRegex.test(this.user.phone)) {
        this.errorMessage = "Numéro de téléphone invalide";
        this.invalidFields.phone = true;
        return false;
      }
      this.invalidFields.phone = false;
      console.log("Numéro de téléphone valide");
    },  
    
    commander(){
      // localStorage.setItem(`user_${this.user.id}`, JSON.stringify(...this.userCommands, this.userCommand));
      // localStorage.removeItem("produitsInPanier")
      }
 },
 created(){
   this.userCommands = localStorage.getItem("userCommands")?JSON.parse(localStorage.getItem("userCommands")):this.userCommand
   },
 mounted(){
    
            // récupérer les paramètre passé depuis le composant userList
            this.userId = localStorage.getItem("userId");
            // this.user = JSON.parse(localStorage.getItem(`user_${userId}`));
          
            this.userCommand = JSON.parse(localStorage.getItem("produitsInPanier"));
           
        this.prix = JSON.parse(localStorage.getItem("prix"));
        this.usersData = JSON.parse(localStorage.getItem("accounts"));
       this.userData()
        
        }
    }

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