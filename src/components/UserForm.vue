<template>
    <!-- <div class="data"> -->
        <form>
        <label for="name">Raison sociale</label>
        <input type="text" placeholder="Raison sociale" v-model="localUserData.name" disabled><br>
        <label for="phone">Numéro de téléphone</label>
        <input type="text" placeholder="Numéro de téléphone" v-model="localUserData.phone"><br>
        <label for="postal">Email</label>
        <input type="text" placeholder="Votre Email" v-model="localUserData.mail"><br>
        <label for="postal">Code Postal</label>
        <input type="text" placeholder="Code Postal" v-model="localUserData.postal"><br>
        <label for="city">Ville</label>
        <input type="text" placeholder="Ville" v-model="localUserData.city"><br>
        <label for="adress">Adresse</label>
        <input type="text" placeholder="Adresse" v-model="localUserData.adress"><br>
    </form>
        <!-- <label for="name">Raison sociale</label> -->
    <!-- <input name="name" :value="user.name"/>
    <label for="phone">Numéro de téléphone</label>
    <input name="phone" :value="user.phone"/>
    <label for="postal">Code Postal</label>
    <input name="postal" :value="user.postal"/>
    <label for="city">Ville</label>
    <input name="city" :value="user.city"/>
    <label for="adress">Adresse</label>
    <input name="adress" :value="user.adress"/> -->
    <!-- </div> -->
</template>

<script>
    export default {
        props:['user'], 
        computed:{
            localUserData:{
                get(){
                    return this.user;
                },
                set(newValue){
                    this.$emit('userData', newValue);
                }
            }
        }
    }
</script>

<style  scoped>
label{
    font-size: smaller;
}
input {
    font-size: medium;
    width: 400px;
    max-width: 600px;
}
/* form {
    display: flex;
    flex-direction: column;
   
    justify-content: center;
    
    padding: 10px;
} */
/* margin:  0 auto; */
 /* max-width: 600px; */
</style>