<template>
    <div class="container">
        <div class="container1">
            <h4>Informations pour livraison</h4>
            <form>
                <UserForm :user="user" @userdata="user = $event" @validResults="handlerRes"></UserForm>
            </form>
            <p v-if="isError" style="color: red;"> {{ errorMessage }}</p>
            <ButtonComponent label="Confirmer l'information" @click="verifier" bcolor="#3f4666" hcolor="#4280b8" />

        </div>
        <div class="container2">
            <div class="prix">
                <p>HT : {{ prix.ht }} €</p>
                <p>TVA : {{ prix.tva }} €</p>
                <p>A payer : <span> {{ prix.prixTotal }} </span> €</p>
            </div>
            <div class="button">
                <ButtonComponent label="Commander" v-if="isDisabled" @click="commander" bcolor="green"
                    hcolor="darkgreen" />
            </div>
        </div>
        <div class=modal v-if="showModal">
            <div class="modal-contenu">
                <p>{{ this.message }}</p>
                <ButtonComponent label="Fermer" bcolor="#3f4666" hcolor="#4280b8" @click="closeCommands(user)" />
            </div>
        </div>
    </div>
</template>

<script>
import ButtonComponent from '@/components/ButtonComponent.vue';
import UserForm from '@/components/UserForm.vue';

export default {
    components: { ButtonComponent, UserForm },
    data() {
        return {
            usersData: [],
            user: {},
            userCommand: [],
            userCommands: [],
            commandsList: [],
            userId: "",
            prix: {},
            errorMessage: '',
            isError: false,
            isDisabled: false,
            validationErrors: {},
            showModal: false,
            message: "",
            commande: false,
            accessAuCommand: false
        };
    },
    methods: {
        userData() {
            let id = this.userId;
            let user = this.usersData.find(user => user.username === id);
            if (user) {
                this.user = user;
            }
        },
        verifier() {
            this.phoneValid = this.checkPhone();
            this.usernameValid = this.checkUsername();

            if (!this.user.name || !this.user.phone || !this.user.postal || !this.user.city || !this.user.adress || this.phoneValid || this.usernameValid) {
                this.errorMessage = 'Veuillez remplir tous les champs correctement';
                this.isError = true;
                return;
            }
            this.isError = false;
            this.isDisabled = true;
            this.showModal = true;
            this.message = "Vos informations ont bien été enregistrées !";
            this.accessAuCommand = true;
        },
        handlerRes(errors) {
            this.validationErrors = errors;
            this.isError = Object.values(errors).some(error => error !== '');
        },
        checkPhone() {
            const phoneRegex = /^(0[1-9]([-. ]?[0-9]{2}){4}|(\+33|0033)[1-9]([-. ]?[0-9]{2}){4})$/;
            return !phoneRegex.test(this.user.phone);
        },
        checkUsername() {
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            return !emailRegex.test(this.user.username);
        },

        commander() {
            let user = this.user.name;
            let userCommands = JSON.parse(localStorage.getItem('userCommand')) || [];
            let userCommand = {
                id: userCommands.length + 1,
                status: "nouveau",
                th: this.prix.ht,
                tva: this.prix.tva,
                ttc: this.prix.prixTotal,
                user: user
            };

            userCommands.push(userCommand);
            localStorage.setItem('userCommand', JSON.stringify(userCommands));

            let existCommandDetails = JSON.parse(localStorage.getItem('commandDetails')) || [];

            let commandDetails = this.userCommand.map(produit => ({
                id: userCommand.id,
                titre: produit.titre,
                prix: produit.prix,
                count: produit.count
            }));

            existCommandDetails = [...existCommandDetails, ...commandDetails];
            localStorage.setItem('commandDetails', JSON.stringify(existCommandDetails));
            localStorage.removeItem("produitsInPanier");
            localStorage.removeItem('prix')

            this.showModal = true;
            this.message = "Votre commande a bien été prise en compte !";
            this.commande = true;

        },

        closeCommands() {
            this.showModal = false;
            if (this.accessAuCommand) {
                return this.isDisabled = true
            }
            if (this.commande) {
                this.$router.push({ name: 'ProductList' });
            }
            this.commande = false
        }
    },
    created() {
        this.userId = localStorage.getItem("userId");
        this.userCommand = JSON.parse(localStorage.getItem("produitsInPanier"));
        this.prix = JSON.parse(localStorage.getItem("prix")) || this.prix;
        this.usersData = JSON.parse(localStorage.getItem("accounts")) || [];
        this.userData();
        this.commandList = JSON.parse(localStorage.getItem('commands')) || [];
        this.userCommands = JSON.parse(localStorage.getItem('userCommand')) || [];
        this.commandDetails = JSON.parse(localStorage.getItem('commandDetails')) || [];
    },

};
</script>

<style scoped>
.bkg {
    background: linear-gradient(rgba(230, 237, 235, 1) 0%, rgba(63, 70, 102, 1) 60%, rgba(116, 130, 132, 1) 84%);
}

.container {
    display: flex;
    justify-content: space-around;
    height: 78vh;
    flex-wrap: wrap;
    align-items: center;
    padding: 20px;
}

.container1,
.container2 {
    width: 100%;
    max-width: 600px;
    margin-bottom: 20px;
}

.prix {
    flex-direction: column;
    padding: 10px;
    justify-content: space-around;
    border: 1px solid black;
    border-radius: 5px;
    margin: 20px 0;
    font-size: 20px;
    /* Updated for better scaling */
}

.prix span {
    font-size: 30px;
    /* Updated for better scaling */
    font-weight: 700;
}

@media only screen and (max-width: 600px) {
    .bkg {
        background-image: none;
    }

    .container {
        display: flexbox;
        padding: 15px;
    }

    .container1,
    .container2 {
        width: 100%;
        padding: 15px;
    }

    .prix {
        font-size: 18px;
    }

    .prix span {
        font-size: 25px;
    }

    .button {
        text-align: center;
    }
}

.modal {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
}

.modal-contenu {
    background-color: #fff;
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
    width: 90%;
    max-width: 500px;
}
</style>






<!-- <style scoped>
  .bkg {
    background: linear-gradient( rgba(230,237,235,1) 0%, rgba(63,70,102,1) 60%, rgba(116,130,132,1) 84%);
  }
  .container {
  display: flex;
  justify-content: space-around;
  height: 78vh;
  flex-wrap: wrap;
  
  }
  
  .prix{
    flex-direction: column;
    padding: 10px;
    justify-content: space-around;
    border: 1px solid black;
    border-radius: 5px;
    margin:20px 0;
    font-size: 30px;
  }
  .prix span{
    font-size: 40px;
    font-weight: 700;
  }
 
  @media only screen and (max-width: 360px) {
    .bkg {
      background-image: none;
    }
    .container {
      display: flex;
      flex-direction: column;
      align-items: center;
      
    }
    .container1, .container2 {
     
      width: auto;
      padding: 15px;
    }}
    .modal{
      position:fixed;
      top:0;
      left:0;
      width:100%;
      height:100%;
      background-color:rgba(0,0,0,0.5);
      display:flex;
      justify-content:center;
      align-items:center;
  }
  .modal-contenu{
      background-color: #fff;
      padding:40px;
      border-radius:10px;
      box-shadow: 0 0 10px rgba(0,0,0,0.5);
  }
  </style> -->