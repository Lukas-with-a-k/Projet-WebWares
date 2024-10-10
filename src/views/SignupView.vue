<template>
  <div class="signup">
    <h3>Inscription</h3>
    <input id="name" type="text" placeholder="Nom" />
    <input id="name2" type="text" placeholder="Prénom" />
    <input id="username" type="text" placeholder="Nom d'utilisateur" />
    <input id="siret" type="text" placeholder="Numéro de SIRET" />
    <input class="pw" id="password" type="text" placeholder="Mot de passe" />
    <input
      class="pw"
      id="passwordconfirm"
      type="text"
      placeholder="Confirmation du Mot de passe"
    />
    <input
      id="adress"
      type="text"
      placeholder="Adresse (ex : 17 rue Fernand)"
    />
    <input id="postal" type="text" placeholder="Code Postal" />
    <input id="city" type="text" placeholder="Ville" />
    <input id="phone" type="text" placeholder="Numéro de téléphone" />

    <br />
    <button class="connect" @click="checkConfirmPassword">S'inscrire</button>
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
  methods: {
    checkSiret() {
      const siret = document.getElementById("siret").value;
      const siretRegex = /^[0-9]{9}$/;
      if (!siretRegex.test(siret)) {
        console.log("Numéro de SIRET invalide");
        return false;
      }
      console.log("Numéro de SIRET valide");
    },
    checkPhone() {
      const phone = document.getElementById("phone").value;
      const phoneRegex =
        /^(0[1-9]([-. ]?[0-9]{2}){4}|(\+33|0033)[1-9]([-. ]?[0-9]{2}){4})$/;
      if (!phoneRegex.test(phone)) {
        console.log("Numéro de téléphone invalide");
        return false;
      }
      console.log("Numéro de téléphone valide");
    },
    checkPassword() {
      const password = document.getElementById("password").value;
      const passwordRegex = /^(?=.*[a-zA-Z])(?=.*\d).{8,}$/;

      if (!passwordRegex.test(password)) {
        console.log(
          "Mot de passe invalide : il doit contenir au moins 8 caractères et au moins 1 chiffre & 1 lettre."
        );
        return false;
      }
      console.log("Mot de passe valide");
    },
    checkConfirmPassword() {
      const password = document.getElementById("password").value;
      const passwordconfirm = document.getElementById("passwordconfirm").value;

      if (password != passwordconfirm) {
        console.log("Les mots de passe ne sont pas identique.");
        return false;
      }
      console.log("Les deux mots de passes sont identique.");
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
</style>
