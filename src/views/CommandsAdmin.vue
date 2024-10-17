<template>
    <div>

    </div>
</template>

<script>
import ButtonComponent from '@/components/ButtonComponent.vue';

    export default {
components: {
    ButtonComponent
},

data() {
return {
    commandsList: []
}
},

methods: {

},



        mounted(){
    if(localStorage.getItem('existingCommands')) {this.commandsList = JSON.parse(localStorage.getItem('existingCommands'))
      }
 
    }, 
    }
</script>

<style scoped>

</style>