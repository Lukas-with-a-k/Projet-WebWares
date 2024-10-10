<template>
  <div class="signup">
    <h3>Inscription</h3>
    <input id="name" type="text" placeholder="Nom" />
    <input id="name2" type="text" placeholder="Prénom" />
    <input id="username" type="text" placeholder="Nom d'utilisateur" />
    <input
      id="siret"
      type="text"
      placeholder="Numéro de SIRET"
      :class="{ 'input-error': invalidFields.siret }"
      :title="getErrorMessage('siret')"
    />
    <input
      class="pw"
      id="password"
      type="text"
      placeholder="Mot de passe"
      :class="{ 'input-error': invalidFields.password }"
      :title="getErrorMessage('password')"
    />
    <input
      class="pw"
      id="passwordconfirm"
      type="text"
      placeholder="Confirmation du Mot de passe"
      :class="{ 'input-error': invalidFields.passwordConfirm }"
      :title="getErrorMessage('passwordConfirm')"
    />
    <input
      id="adress"
      type="text"
      placeholder="Adresse (ex : 17 rue Fernand)"
    />
    <input id="postal" type="text" placeholder="Code Postal" />
    <input id="city" type="text" placeholder="Ville" />
    <input
      id="phone"
      type="text"
      placeholder="Numéro de téléphone"
      :class="{ 'input-error': invalidFields.phone }"
      :title="getErrorMessage('phone')"
    />

    <br />
    <button class="connect" @click="checkSignUp">S'inscrire</button>
    <p class="infos" v-if="errorMessage">
      {{ errorMessage }}
    </p>
    <br />

    <span>
      <p class="signup">
        Deja membre ? <router-link to="/login">Connexion</router-link>
      </p>
    </span>
  </div>
</template>

<script>
export default {
  data() {
    return {
      errorMessage: "",
      invalidFields: {
        siret: false,
        phone: false,
        password: false,
        passwordConfirm: false,
      },
    };
  },
  methods: {
    checkSignUp() {
      this.checkSiret();
      this.checkPhone();
      this.checkPassword();
      this.checkConfirmPassword();
      if (
        this.checkSiret() != false &&
        this.checkPhone() != false &&
        this.checkPassword() != false &&
        this.checkConfirmPassword() != false
      ) {
        this.errorMessage = "";
      }
    },
    checkSiret() {
      const siret = document.getElementById("siret").value;
      const siretRegex = /^[0-9]{9}$/;
      if (!siretRegex.test(siret)) {
        this.errorMessage = "Numéro de SIRET invalide";
        this.invalidFields.siret = true;
        return false;
      }
      this.invalidFields.siret = false;
      console.log("Numéro de SIRET valide");
    },

    checkPhone() {
      const phone = document.getElementById("phone").value;
      const phoneRegex =
        /^(0[1-9]([-. ]?[0-9]{2}){4}|(\+33|0033)[1-9]([-. ]?[0-9]{2}){4})$/;
      if (!phoneRegex.test(phone)) {
        this.errorMessage = "Numéro de téléphone invalide";
        this.invalidFields.phone = true;
        return false;
      }
      this.invalidFields.phone = false;
      console.log("Numéro de téléphone valide");
    },

    checkPassword() {
      const password = document.getElementById("password").value;
      const passwordRegex = /^(?=.*[a-zA-Z])(?=.*\d).{8,}$/;

      if (!passwordRegex.test(password)) {
        this.errorMessage =
          "Mot de passe invalide : il doit contenir au moins 8 caractères et au moins 1 chiffre & 1 lettre.";
        this.invalidFields.password = true;
        return false;
      }
      this.invalidFields.password = false;
      console.log("Mot de passe valide");
    },

    checkConfirmPassword() {
      const password = document.getElementById("password").value;
      const passwordconfirm = document.getElementById("passwordconfirm").value;

      if (password !== passwordconfirm) {
        this.errorMessage = "Les mots de passe ne sont pas identiques.";
        this.invalidFields.passwordConfirm = true;
        return false;
      }
      this.invalidFields.passwordConfirm = false;
      console.log("Les deux mots de passe sont identiques.");
    },
    getErrorMessage(field) {
      switch (field) {
        case "siret":
          return this.invalidFields.siret ? "Numéro de SIRET invalide" : "";
        case "phone":
          return this.invalidFields.phone ? "Numéro de téléphone invalide" : "";
        case "password":
          return this.invalidFields.password ? "Mot de passe invalide" : "";
        case "passwordConfirm":
          return this.invalidFields.passwordConfirm
            ? "Les mots de passe ne sont pas identiques"
            : "";
        default:
          return "";
      }
    },
  },
};
</script>

<style scoped>
div.signup {
  position: absolute;
  left: 50%;
  top: 20%;
  transform: translate(-50%, 0);
  border-radius: 10px;
  font-family: sans-serif;
  padding-top: 10px;
  background-color: #e6edeb;
  width: 40%;
  height: auto;
  box-shadow: 0px 0px 6px 2px #3f4666;
}

input {
  padding-left: 10px;
  margin-top: 10px;
  margin-left: 5px;
  margin-right: 5px;
  margin-bottom: 10px;
  width: 38%;
  height: 40px;
  font-size: 18px;
  border-radius: 15px;
  border: 2px solid #3f4666;
  color: #3f4666;
  background-color: #e6edeb;
}

input:focus {
  outline: none;
  background-color: #d0d6d5;
}

input::placeholder {
  opacity: 0.8;
}

input.pw {
  text-security: disc;
  -webkit-text-security: disc;
}

.input-error {
  border-color: red;
}

button {
  margin-top: 10px;
  margin-bottom: 50px;
  width: 82%;
  height: 40px;
  font-size: 18px;
  border-radius: 15px;
  border: 2px solid #3f4666;
  color: #e6edeb;
  background-color: #3f4666;
}

button:hover {
  color: #3f4666;
  background-color: #e6edeb;
  transition-duration: 1s;
}

p.signup {
  float: left;
  margin-left: 20px;
  color: #3f4666;
}
a.lost {
  margin-top: 16px;
  margin-right: 20px;
  float: right;
}
h3 {
  font-size: 24px;
  font-weight: 600;
  color: #3f4666;
}

p.infos {
  opacity: 1;
  font-size: 12px;
  position: absolute;
  color: red;
  top: 81%;
  left: 50%;
  transform: translate(-50%, 0);
  width: 80%;
}

p.infos:hover {
  cursor: default;
}
</style>
