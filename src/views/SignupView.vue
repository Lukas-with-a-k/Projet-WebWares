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
      s
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
    <button class="connect">S'inscrire</button>
    <br />

    <span>
      <p class="signup">
        Deja membre ? <router-link to="/login">Connexion</router-link>
      </p>
    </span>
  </div>
</template>

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
