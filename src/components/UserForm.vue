<template>
    <div>
        <input type="text" placeholder="Raison sociale" v-model="localUserData.name">
        <input type="text" placeholder="Numéro de téléphone" v-model="localUserData.phone">
        <input type="text" placeholder="Votre Email" v-model="localUserData.email">
        <input type="text" placeholder="Code Postal" v-model="localUserData.postal">
        <input type="text" placeholder="Ville" v-model="localUserData.city">
        <input type="text" placeholder="Adresse" v-model="localUserData.adress">
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
    </div>
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

<style>

</style>