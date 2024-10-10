<template>
  <div class="login">
    <h3>Connexion</h3>
    <input id="username" type="text" placeholder="Nom d'utilisateur" />
    <br />
    <input class="pw" id="password" type="text" placeholder="Mot de passe" />
    <br />
    <button class="connect">Se connecter</button>
    <br />

    <span>
      <a href="" class="lost">Mot de passe oublié</a>
      <p class="signup">
        Pas de compte ? <router-link to="/signup">S'inscire</router-link>
      </p>
    </span>
  </div>
</template>

<style scoped>
div.login {
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
