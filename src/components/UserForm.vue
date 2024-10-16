<template>
    <form>
        <label for="name">Raison sociale</label>
        <input name="name" type="text" placeholder="Raison sociale" v-model="localUserData.name" disabled><br>

        <label for="phone">Numéro de téléphone</label>
        <input name="phone" type="text" placeholder="Numéro de téléphone" v-model="localUserData.phone" @input="validatePhone">
        <div class="msgError" v-if="errors.phone">{{ errors.phone }}</div><br>

        <label for="mail">Email</label>
        <input name="mail" type="text" placeholder="Votre Email" v-model="localUserData.username" @input="validateEmail">
        <div class="msgError" v-if="errors.mail">{{ errors.mail }}</div><br>

        <label for="postal">Code Postal</label>
        <input name="postal" type="text" placeholder="Code Postal" v-model="localUserData.postal" @input="validatePostal">
        <div class="msgError" v-if="errors.postal">{{ errors.postal }}</div><br>

        <label for="city">Ville</label>
        <input name="city" type="text" placeholder="Ville" v-model="localUserData.city" @input="validateCity"><br>
        <div class="msgError" v-if="errors.city">{{ errors.city }}</div><br>

        <label for="adress">Adresse</label>
        <input name="adress" type="text" placeholder="Adresse" v-model="localUserData.adress" @input="validateAdress"><br>
        <div class="msgError" v-if="errors.adress">{{ errors.adress }}</div><br>
    </form>
</template>

<script>
export default {
    props: ['user'],
    data() {
      return {
        errors: {
        phone: '',
        mail: '',
        postal: '',
        city: '',
        adress: ''
            }
     };
    },
    computed: {
        localUserData: {
            get() {
                return this.user;
            },
            set(newValue) {
                this.$emit('userData', newValue);
            }
        }
    },
    methods: {
        validPhone() {
          const phoneRegex = /^(0[1-9]([-. ]?[0-9]{2}){4}|(\+33|0033)[1-9]([-. ]?[0-9]{2}){4})$/;
           this.errors.phone = phoneRegex.test(this.user.phone) ? '' : 'Entrez le numéro valide';
          this.emitValidation();
        },
        validEmail() {
          const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
          this.errors.mail = emailRegex.test(this.user.username) ? '' : 'Entrez email valide';
          this.emitValidation();
        },
        validPostal() {
          this.errors.postal = this.user.postal ? '' : 'Entrez code postal';
          this.emitValidation();
        },
        validCity() {
          this.errors.city = this.user.city ? '' : 'Entrez ville';
          this.emitValidation();
        },
        validAdress() {
          this.errors.adress = this.user.adress ? '' : 'Entrez adresse';
          this.emitValidation();
        },
        emitValidation() {
            this.$emit('validationResults', this.errors);
        }
    },
    watch: {
        user: {
            handler() {
              this.validPhone();
              this.validEmail();
              this.validPostal();
              this.validCity();
              this.validAdress();
            },
         deep: true,
         immediate: true
        }
    }
};
</script>
<style  scoped>
label{
    font-size: smaller;
}
input {
    font-size: medium;
    width: 400px;
    max-width: 600px;
}
.msgError{
    color: red
}
/* form {
    display: flex;
    flex-direction: column;
   
    justify-content: center;
    
    padding: 10px;
} */
/* margin:  0 auto; */
 /* max-width: 600px; */ 
</style>
