<template>
    <div>
        <h3>Prix total pour payer  {{ total }}</h3><br>
       <h4>Information pour livrason</h4> 
       <UserForm :user="user" @userdata="user = $event"/>
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
       </div>
 
       <button class="changer" @click="verifier()">Confirmer l'information</button>
   

    <ButtonComponent label="Commander" @click="commander()" color="green"/>

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
  userId: "",
    total: "",
    errorMessage:'',
    isError:false
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
                localStorage.setItem(`user_${this.user.id}`, JSON.stringify(this.userData));
                // faire une redirection après mise à jour
                this.isError=false;
                this.showModalConfirmation=true;
             
                this.user = {};
            },
        
    
    commander(){

    }
 },
 mounted(){
    
            // récupérer les paramètre passé depuis le composant userList
            this.userId = localStorage.getItem("userId");
            // this.user = JSON.parse(localStorage.getItem(`user_${userId}`));
          

        this.total = JSON.parse(localStorage.getItem("total"));
        this.usersData = JSON.parse(localStorage.getItem("accounts"));
       this.userData()
        
        }
    }

</script>

<style scoped>

</style>