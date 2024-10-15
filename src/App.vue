<template>
  <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link> |
    <a @click="toggleLogin">Login</a> |
    <LoginComp
      :accounts="accounts"
      v-if="showLogin"
      @toggleSignup="toggleSignup"
      @closeForms="closeForms"
    />
    <a @click="toggleSignup">Signup</a> |
    <SignupComp
      v-if="showSignup"
      @toggleLogin="toggleLogin"
      @accountCreated="accountCreated"
    />
    <div
      v-if="showLogin || showSignup"
      class="dark-overlay"
      @click="closeForms"
    ></div>
  </nav>
  <router-view />
</template>

<script>
import LoginComp from "./components/LoginComp.vue";
import SignupComp from "./components/SignupComp.vue";

export default {
  components: {
    LoginComp,
    SignupComp,
  },
  data() {
    return {
      showLogin: false,
      showSignup: false,
      accounts: [],
    };
  },
  methods: {
    getAccountsFromLocalStorage() {
      const accounts = localStorage.getItem("accounts");
      return accounts ? JSON.parse(accounts) : null;
    },
    defaultAccounts() {
      return [
        {
          username: "paulo@gmail.com",
          password: "paulino27",
          type: "member",
          name: "Paulo industries",
          lastname: "kayou",
          siret: "624455987",
          adress: "19 rue poulet",
          postal: "28117",
          city: "Imagination",
          phone: "0633154875",
        },
        {
          username: "admin@gmail.com",
          password: "admin1234",
          type: "admin",
          name: "Societe de l'admin",
          siret: "123456789",
          adress: "1 rue de l'admin",
          postal: "28000",
          city: "Adminville",
          phone: "0123456789",
        },
      ];
    },
    saveAccountsToLocalStorage(accounts) {
      localStorage.setItem("accounts", JSON.stringify(accounts));
    },
    toggleLogin() {
      this.showLogin = !this.showLogin;
      this.showSignup = false;
    },
    toggleSignup() {
      this.showSignup = !this.showSignup;
      this.showLogin = false;
    },
    closeForms() {
      this.showLogin = false;
      this.showSignup = false;
    },
    accountCreated(newAccount) {
      this.accounts.push(newAccount);
      this.saveAccountsToLocalStorage(this.accounts);
    },
  },
  mounted() {
    const storedAccounts = this.getAccountsFromLocalStorage();
    if (storedAccounts) {
      this.accounts = storedAccounts;
    } else {
      const defaultAccounts = this.defaultAccounts();
      this.saveAccountsToLocalStorage(defaultAccounts);
      this.accounts = defaultAccounts;
    }
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}

.dark-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.7);
  z-index: 99;
}
</style>
