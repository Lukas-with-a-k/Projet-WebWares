<template>
  <div class="signup">
    <h3>Inscription</h3>
    <input
      id="name"
      type="text"
      placeholder="Raison sociale"
      :class="{ 'input-error': invalidFields.name }"
    />
    <input
      id="siret"
      type="text"
      placeholder="Numéro de SIRET"
      :class="{ 'input-error': invalidFields.siret }"
      :title="getErrorMessage('siret')"
    />
    <input
      id="username"
      type="text"
      placeholder="Adresse e-mail"
      :class="{ 'input-error': invalidFields.username }"
    />
    <input
      id="phone"
      type="text"
      placeholder="Numéro de téléphone"
      :class="{ 'input-error': invalidFields.phone }"
      :title="getErrorMessage('phone')"
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
      :class="{ 'input-error': invalidFields.adress }"
    />
    <input
      id="city"
      type="text"
      placeholder="Ville"
      :class="{ 'input-error': invalidFields.city }"
    />
    <input
      class="postal"
      id="postal"
      type="text"
      placeholder="Code Postal"
      :class="{ 'input-error': invalidFields.postal }"
    />

    <br />
    <button class="connect" @click="checkSignUp">S'inscrire</button>
    <p class="infos" v-if="errorMessage">
      {{ errorMessage }}
    </p>
    <br />

    <span>
      <p class="signup">
        Deja membre ?
        <a href="#" class="login" @click.prevent="toggleLogin">Se connecter</a>
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
    toggleLogin() {
      console.log("test");
      this.$emit("toggleLogin");
    },
    checkSignUp() {
      this.errorMessage = "";
      this.invalidFields = {
        siret: false,
        phone: false,
        password: false,
        passwordConfirm: false,
      };

      const siretValid = this.checkSiret();
      const phoneValid = this.checkPhone();
      const passwordValid = this.checkPassword();
      const passwordConfirmValid = this.checkConfirmPassword();
      const usernameValid = this.checkUsername();

      const requiredFields = [
        "name",
        "username",
        "siret",
        "password",
        "passwordconfirm",
        "adress",
        "postal",
        "city",
        "phone",
      ];

      let allFieldsFilled = true;

      for (const field of requiredFields) {
        const value = document.getElementById(field).value;
        if (!value) {
          this.invalidFields[field] = true;
          allFieldsFilled = false;
        } else {
          this.invalidFields[field] = false;
        }
      }

      if (
        allFieldsFilled &&
        siretValid !== false &&
        phoneValid !== false &&
        passwordValid !== false &&
        passwordConfirmValid !== false &&
        usernameValid !== false
      ) {
        this.errorMessage = "";
        const newUser = {
          username: document.getElementById("username").value,
          password: document.getElementById("password").value,
          type: "member",
          name: document.getElementById("name").value,
          siret: document.getElementById("siret").value,
          adress: document.getElementById("adress").value,
          postal: document.getElementById("postal").value,
          city: document.getElementById("city").value,
          phone: document.getElementById("phone").value,
        };

        const accounts = JSON.parse(localStorage.getItem("accounts")) || [];
        accounts.push(newUser);
        localStorage.setItem("accounts", JSON.stringify(accounts));
        console.log(
          "Compte crée avec succès, utilisateur : " + newUser.username
        );
      }
    },

    checkUsername() {
      const username = document.getElementById("username").value;
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      const accounts = JSON.parse(localStorage.getItem("accounts")) || [];
      const usernameExists = accounts.some(
        (account) => account.username === username
      );

      if (!emailRegex.test(username)) {
        this.errorMessage = "Adresse e-mail invalide.";
        this.invalidFields.username = true;
        document.getElementById("username").classList.add("input-error");
        return false;
      } else {
        document.getElementById("username").classList.remove("input-error");
      }

      if (usernameExists) {
        this.errorMessage = "Un compte avec cette adresse e-mail existe déjà.";
        this.invalidFields.username = true;
        document.getElementById("username").classList.add("input-error");
        return false;
      } else {
        document.getElementById("username").classList.remove("input-error");
      }

      this.invalidFields.username = false;
      return true;
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
  z-index: 100;
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
  margin-top: 20px;
  margin-left: 10px;
  margin-right: 10px;
  margin-bottom: 20px;
  width: 35%;
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

input#postal {
  width: 15%;
}

input#city {
  width: 26%;
}

input#adress {
  width: 26%;
}

.input-error {
  border-color: red;
}

button {
  margin-top: 20px;
  margin-bottom: 50px;
  width: 75%;
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
