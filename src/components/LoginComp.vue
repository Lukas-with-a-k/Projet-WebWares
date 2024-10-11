<template>
  <div class="login">
    <h3>Connexion</h3>
    <input id="username" type="text" placeholder="Nom d'utilisateur" />
    <br />
    <input
      class="pw"
      id="password"
      type="password"
      placeholder="Mot de passe"
    />
    <br />
    <button class="connect" @click="loginButton">Se connecter</button>
    <br />

    <span>
      <p class="noacc">
        Pas de compte ?
        <a href="#" class="signup" @click.prevent="toggleSignup">S'inscrire</a>
      </p>
    </span>
  </div>
</template>

<script>
export default {
  props: {
    accounts: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      usernameValue: "",
    };
  },
  methods: {
    toggleSignup() {
      this.$emit("toggleSignup");
    },
    loginButton() {
      const usernameValue = document.getElementById("username").value;
      const userPasswordValue = document.getElementById("password").value;
      const account = this.checkUsername(usernameValue);
      if (account) {
        const passwordValid = this.checkUserPassword(
          account,
          userPasswordValue
        );
        if (passwordValid) {
          console.log("Connexion réussie !");
          localStorage.setItem("userType", account.type);
          localStorage.setItem("userId", usernameValue);
          this.$emit("closeForms");
        } else {
          console.log("Mot de passe incorrect");
        }
      }
    },
    checkUsername(usernameValue) {
      const account = this.accounts.find(
        (account) =>
          account.username.toLowerCase() === usernameValue.toLowerCase()
      );

      if (account) {
        console.log(`Nom d'utilisateur valide. Type: ${account.type}`);
        return account;
      } else {
        console.log("Nom d'utilisateur invalide");
        return null;
      }
    },
    checkUserPassword(account, userPasswordValue) {
      if (account.password === userPasswordValue) {
        return true;
      }
      return false;
    },
  },
};
</script>
<style scoped>
div.login {
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
  margin-top: 10px;
  margin-bottom: 10px;
  width: 80%;
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

p.noacc {
  float: left;
  margin-left: 20px;
  color: #3f4666;
}

h3 {
  font-size: 24px;
  font-weight: 600;
  color: #3f4666;
}
</style>
