<template>
    <div>
        <div class="banner"> 
            <video  
            src="@/assets/wewa.mp4" frameborder="0" 
            autoplay 
            loop>
        </video>
        <div class="action">
        <h1>Pas encore membre?</h1>
        <button @click="toggleSignup" class="button">Inscrivez-vous!</button>
        <h1 >Voulez-vous en savoir plus?</h1> 
        <button @click="contact" class="button">Nous contacter</button>
    </div>
    </div>

    </div>
</template>

<script>

export default {
  name: "LandingPage",
  data() {
    return {

    };
  },
  components: {

    
  },
 
  methods: {
    contact() {
      this.$router.push({ name: "ContactPage" });
    },
    toggleSignup() {
      this.$emit("toggleSignup");
      console.log("toggleSignup");
      
    }
  },

};
</script>





<style scoped>
body {
  margin: 0;
  box-sizing: border-box;
}
.banner {
  width: 100%;
  height: 700px;
  background-color: #3f4666;
  }

.action {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 77%;
  left: 50%;
  transform: translate(-50%, -50%);
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

</style>
