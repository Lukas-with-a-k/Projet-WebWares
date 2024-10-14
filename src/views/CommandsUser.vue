<template>
    <div>
        <h4>Prix total pour payer</h4>
       <h4>Information pour livrason</h4> 

       <button class="verif">Utiliser cette information</button>
       <button class="changer">Changer l'information</button>
<form>

    <div>
        <input
      id="name"
      type="text"
      placeholder="Nom"
     
    />
    <input
      id="name2"
      type="text"
      placeholder="Prénom"
      
    />
    <input
      id="phone"
      type="text"
      placeholder="Numéro de téléphone"
      
    />
       <input
      id="postal"
      type="text"
      placeholder="Code Postal"
     
    />
    <input
      id="city"
      type="text"
      placeholder="Ville"
     
    />
    <input
      id="adress"
      type="text"
      placeholder="Adresse (ex : 17 rue Fernand)"
    
    />
    <input
      id="information"
      type="text"
      placeholder="Information supplementaire"
          />
    </div>
</form>
    </div>
    <ButtonComponent label="Commander" @click="commander()" color="green"/>

</template>

<script>
import ButtonComponent from '@/components/ButtonComponent.vue';


    export default {
        components: {
ButtonComponent
        },
        data(){
return {
  
    total: "",
  
}

 }, 
 mounted(){
           
            this.total = JSON.parse(localStorage.getItem("total"));

        }
    }

</script>

<style scoped>

</style>