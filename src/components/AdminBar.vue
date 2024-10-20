<template>
    <div class="admin-bar" v-if="isAdmin">
        <ul class="admin-links">
            <h4>Administration</h4>
            <li><router-link to="/GestionProduits">Produits</router-link></li>
            <li><router-link to="/commands-admin">Commandes</router-link></li>
            <li><router-link to="/userlist-admin">Utilisateurs</router-link></li>
        </ul>

    </div>
</template>

<script>
    export default {
        name: "AdminBar",
        data() {
            return {
                isAdmin: false
            }
        },
        methods: {
            checkUserType() {
                const userType = localStorage.getItem("userType");
                this.isAdmin = userType === "admin";
            }
        },
        created() {
            this.checkUserType()
        }   


                 
        
    }
</script>

<style scoped>
.admin-bar {
    position: fixed;
    top: 0;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #3F4666;
    color: white;
    text-decoration: none;
    font-weight: bold;
    padding: 0px;
    z-index: 0;
}

.color {
    background-color: blue;
}

.admin-links {
    position: relative;
    top: 150px;
    list-style: none;
    display: flex;
    flex-direction: column;
    gap: 170px;
   font-size: 20px;
    font-weight: bold;
}

.admin-links a {
    color: white;
    text-decoration: none;
}

.admin-links a:hover {
    text-decoration: underline;
}

h4 {
    background-color: #4280b8;
    padding: 7px;
    
    color: white;
}

@media (max-width: 768px) {
    .admin-bar {
    position: absolute;
    top: 470px;
    height: 80px;
    width: 100%;
    background-color: #3F4666;
    color: white;
    font-weight: bold;
    align-items: center;
    z-index: 99999;  
}

    .admin-links {
        position: relative;
        top: 30px;
        left: 0px;
        list-style: none;
        display: flex;
        flex-direction: row;
        gap: 20px;
    }

    h4 {
        position: relative;
        top: -35px;
        left: 0px;
        font-size: 20px;
        border-radius: 10px;
    }
}
</style>