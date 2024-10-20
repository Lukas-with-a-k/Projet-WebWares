<template>
  <div class="bkg">
    <div class="banner">
      <video src="@/assets/wewa.mp4" frameborder="0" autoplay loop>
      </video>
    </div>
    <div class="action">
      <h1 v-if="!userType">Pas encore membre?</h1>
      <SignupComp v-if="showSignup" @toggleLogin="toggleLogin" @accountCreated="accountCreated" />
      <button v-if="!userType" @click="toggleSignup" class="button">Inscrivez-vous!</button>
      <h1>Voulez-vous en savoir plus?</h1>
      <button @click="contact" class="button">Nous contacter</button>
    </div>
  </div>

</template>

<script>
import SignupComp from '@/components/SignupComp.vue';

export default {
  name: "LandingPage",
  data() {
    return {
      showSignup: false,
      userType: null,
    };
  },
  components: {
    SignupComp,

  },

  methods: {
    contact() {
      this.$router.push({ name: "ContactPage" });
    },
    toggleSignup() {
      this.showSignup = !this.showSignup;
    },
    getUserType() {
      const userType = localStorage.getItem('userType');
      if (userType) {
        this.userType = userType;
      }
    }
  },
  mounted() {
    this.getUserType();
  },

  watch: {
    userType(newValue, oldValue) {
      if (newValue !== oldValue) {
        console.log('User type changed:', newValue);
      }

    }
  }
};
</script>





<style scoped>
.action {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 25vh;
  color: #2a2a2a;
}

.bkg {
  background: linear-gradient(rgba(230, 237, 235, 1) 0%, rgba(63, 70, 102, 1) 60%, rgba(116, 130, 132, 1) 99%);
}

.banner {
  width: 100%;
}

video {
  width: 100%;
  height: 700px;
  object-fit: cover;
  object-position: center 30%;

}

.button {
  background-color: #3f4666;
  color: #e6edeb;
  font-size: 28px;
  margin: 10px;
  padding: 15px;
  border: none;
  cursor: pointer;
  border-radius: 5px;
}

.button:hover {
  background-color: #4280b8;
  transition: all 0.3s ease-in-out;
}

@media (max-width: 768px) {
  .banner {
    display: none;
  }

  .action {
    height: 50vh;
  }
}

@media (max-width: 480px) {
  .bkg {
    min-height: 7vh;
  }
}
</style>
