<template>
  <HeaderComponent :isLoggedIn="isLoggedIn" @toggleLogin="toggleLogin" @toggleSignup="toggleSignup" @logout="logout" />
  <nav>
    <LoginComp :accounts="accounts" v-if="showLogin" @toggleSignup="toggleSignup" @closeForms="closeForms"
      @loginSuccess="loginSuccess" />
    <SignupComp v-if="showSignup" @toggleLogin="toggleLogin" @accountCreated="accountCreated" />
    <div v-if="showLogin || showSignup" class="dark-overlay" @click="closeForms"></div>
  </nav>
  <router-view />
  <AdminBar />
  <FooterComponent />
</template>
<script>
import HeaderComponent from './components/HeaderComponent.vue';
import FooterComponent from './components/FooterComponent.vue';
import LoginComp from "./components/LoginComp.vue";
import SignupComp from "./components/SignupComp.vue";
import AdminBar from './components/AdminBar.vue';
export default {
  name: 'App',
  components: {
    HeaderComponent,
    FooterComponent,
    AdminBar,
    LoginComp,
    SignupComp,
  },
  data() {
    return {
      userType: null,
      showLogin: false,
      showSignup: false,
      userName: "",
      accounts: [],
      isLoggedIn: false,
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
          name: "Administrateur",
          siret: "123456789",
          adress: "1 rue de l'admin",
          postal: "28000",
          city: "Adminville",
          phone: "0123456789",
        },
      ];
    },
    loginSuccess(user) {
      this.isLoggedIn = true;
      this.userType = user.type;
      this.userName = user.name;
      localStorage.setItem('userType', user.type);
      localStorage.setItem('userName', user.name);
      this.$root.$emit('userTypeChanged');
      window.location.reload();
      this.closeForms();
    },
    checkIfLoggedIn() {
      const userType = localStorage.getItem("userType");
      const userName = localStorage.getItem("userName");
      if (userType) {
        this.isLoggedIn = true;
        this.userType = userType;
        this.userName = userName || "";
      } else {
        this.isLoggedIn = false;
        this.userType = null;
        this.userName = "";
      }
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
    logout() {
      this.isLoggedIn = false;
      this.userType = null;
      this.userName = "";
      localStorage.removeItem("userType");
      localStorage.removeItem("userName");
      window.location.reload();
      this.$root.$emit('userTypeChanged');
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
    this.checkIfLoggedIn();
  },
};
</script>

<style>
html {
  overflow-y: scroll;
}

body {
  margin: 0;
  padding: 0;
  background-color: #E6EDEB;
  box-sizing: border-box;

}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #515151;
}


nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #282828;
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
