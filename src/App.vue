<template>
  <HeaderComponent />
  <router-view />
  <FooterComponent />
</template>
<script>
import HeaderComponent from './components/HeaderComponent.vue';
import FooterComponent from './components/FooterComponent.vue';
import Buttons from './components/Buttons.vue';

export default {
  name: 'App',
  components: {
    HeaderComponent,
    FooterComponent,
    Buttons
  }
};
</script>
<style>
body {
  margin: 0;
  padding: 0;
  background-color: #E6EDEB;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #fafafa;
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
</style>
