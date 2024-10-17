<template>
    <div>
        <table>
            <thead>
                <tr>
                    <th>Raison sociale</th>
                    <th>ID de Command</th>
                    <th>Command</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(user, index) in users " :key="index">
                    <td>{{ user.index.name }}</td>
                    <td>{{ user.index }}</td>
                    <td>{{ user.index }}</td>
                    <td>{{ user.password }}</td>
                    <td>
                        <!-- <ButtonUser label="Modifier" backgroundColor="green" @click="modifyUser(index)"/>

                        <ButtonUser label="Supprimer" backgroundColor="red" @click="deleteUser(index)"/> -->
                        
                        <ButtonUser label="Détails" backgroundColor="blue" @click="showDetail(user)"/>
                  
                    </td>
                </tr>
            </tbody>
        </table>
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
    commandsList: [],
    
}
},

methods: {

},

created() {
    this.username = localStorage.getItem("user_$user.name");
},

        mounted(){
    if(localStorage.getItem('existingCommands')) {this.commandsList = JSON.parse(localStorage.getItem('existingCommands'))
      }
 
    }, 
    }
</script>

<style scoped>

</style>