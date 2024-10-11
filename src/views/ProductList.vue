<template>
    <h1>Product List</h1>
    <div class="produit">
        <h4></h4>
        <p>€</p>
    <ButtonComponent label="Ajouter au panier" color="grey"/>
    </div>
</template>

<script>
import ButtonComponent from '@/components/ButtonComponent.vue';
export default {
    components: {
        ButtonComponent,
    },       
    }
</script>

<style scoped>
h1 {
    font-family: sans-serif;
    color: #4280b8;
}
.produit {
    display: flex;
    justify-content: center;
}
</style>