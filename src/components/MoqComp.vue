<template>
    <div v-if="visible" class="banner-notice">
    <h2>Vous avez ateint le quantité minimum de commande</h2>    
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style lang="scss" scoped>
h2 {
    color: crimson;
    font-weight: bolder;
}
</style>