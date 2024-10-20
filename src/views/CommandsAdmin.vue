<template>
    <div class="command-list">
        <h1>Liste des commandes</h1>
        <table>
            <thead>
                <tr>
                    <th>ID de Commande</th>
                    <th>Nom du produit</th>
                    <th>Prix</th>
                    <th>Quantité</th>
                    <th>Coût total</th>
                    <th>Raison sociale</th>
                    <th>Status</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(command, index) in userCommand" :key="index" :style="changeBackground(command.status)">
                    <td>{{ command.id }}</td>
                    <td>
                        <div v-for="(detail, detailIndex) in showDetails(command.id)" :key="detailIndex">{{ detail.titre }}</div>
                    </td>
                    <td>
                        <div v-for="(detail, detailIndex) in showDetails(command.id)" :key="detailIndex">{{ detail.prix }}</div>
                    </td>
                    <td>
                        <div v-for="(detail, detailIndex) in showDetails(command.id)" :key="detailIndex">{{ detail.count }}</div>
                    </td>
                    <td>{{ command.ttc }}</td>
                    <td>{{ command.user }}</td>
                    <td>
                        <p v-if="command.status === 'nouveau'"> Nouveau !</p>
                        <select v-model="command.status" @change="updateStatus(command)" >
                            <option value="nouveau">Nouveau</option>
                            <option value="enCour">En cour</option>
                            <option value="envoyé">Envoyé</option>
                            <option value="livré">Livré</option>
                        </select>
                    </td>
                    <td> <ButtonComponent label="Supprimer / Annuler" @click="supprimeCommmand(index)" bcolor="#3f4666" hcolor="#4280b8"/></td>
                </tr>
            </tbody>
        </table>
    </div>
</template>






<script>
import ButtonComponent from '@/components/ButtonComponent.vue';

export default {
    components:{
      ButtonComponent
  },
    data() {
        return {
            userCommand: [],
            commandDetails: []
        };
    },
    methods: {
        convertProxyToObject(proxyObject) {
            return JSON.parse(JSON.stringify(proxyObject));
        },
        showDetails(commandId) {
            let allDetails = this.commandDetails.filter(detail => detail.id === commandId);
            let convertedDetails = allDetails.map(this.convertProxyToObject);
            return convertedDetails;
        },
        updateStatus(command) {
            let commands = JSON.parse(localStorage.getItem('userCommand')) || [];
            let index = commands.findIndex(cmd => cmd.id === command.id);
            if (index !== -1) {
                commands[index].status = command.status;
                localStorage.setItem('userCommand', JSON.stringify(commands));
            }
           
        },
        changeBackground(status) {
            
            return status === "enCour" ? "background-color: #edd1d1;" : status === "nouveau" ? "background-color: #cfeacf;" : status === "livré" ? "background-color: #c2c2c2;": "";
        },
        supprimeCommmand(ind){
            let commandId = this.userCommand[ind].id;
            this.commandDetails = this.commandDetails.filter(command => command.id !== commandId);

            localStorage.setItem("commandDetails", JSON.stringify(this.commandDetails));

            this.userCommand.splice(ind, 1);
            localStorage.setItem("userCommand", JSON.stringify(this.userCommand));
         },
    },
    created() {
        this.userCommand = JSON.parse(localStorage.getItem('userCommand')) || [];
        this.commandDetails = JSON.parse(localStorage.getItem('commandDetails')) || [];
    }
};
</script>

<style scoped>
.command-list {
    height: 90vh;
    overflow: auto;
}
table {
  width: 100%;
  border-collapse: collapse;
  
}

th,
td, select {
  border: 1px solid #ddd;
  padding: 8px;
  font-size: 24px;
  
  }

th {
  background-color: #f2f2f2;

}
td p{
    color: white;
    background-color: green;
    padding: 7px;
}
.encour{
    background-color: #edd1d1;
}
</style>