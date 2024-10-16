<template>
    <div class="produit">
    <h1>Product Details</h1>
    <img :src="product.image" alt="" />
    <h4>{{ product.title }}</h4>
    <p>{{ prod.description }}</p>
    <p v-if="isMember">{{ prod.prix }} € | MOQ: {{prod.moq}}</p> 
    <ButtonComponent label="retour" color="grey" @click="Retour" />    
    </div>
</template>

<script>
import ButtonComponent
from '@/components/ButtonComponent.vue';
export default {
    components: {
       ButtonComponent,
    },
}
</script>

<style scoped>

</style>