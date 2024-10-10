<template>
    <div>
        <h1>Mon panier</h1>
        <div class="produit" v-for="produit in panier" :key="produit.id">
            <img  :src=" produit.image " alt="">
            <h4>{{ produit.title }}</h4>
            <p>{{ produit.description }}</p>
            <p>{{ produit.price }}</p>
            <span>
                <span> Quantity : </span>
                <button @click="decrease(produit)"> - </button>
                <span> {{ produit.qte }} </span>
                <button @click="decrease(produit)"> + </button>
            </span>
            <Buttons label="Supprimer du panier" @click="removeProduct(produit)" color="red"/>
            <span>Total Ligne {{ subTotal(produit.id) }}</span>
        </div>
        <div>
            Grand Total {{ total }}
        </div>
    </div>
</template>

<script>
import Buttons from '@/components/Buttons.vue';

    export default {
        components:{
            Buttons
        },
        data(){
return {
    panier: [],
    count: 0,
    
}
 },
 methods:{
    increase(){
        this.count ++;
    },
    decrease(){
        this.count --;
    },
    }
}
</script>

<style scoped>

</style>