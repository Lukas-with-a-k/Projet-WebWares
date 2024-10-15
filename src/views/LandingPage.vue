<template>
    <div>
        <div class="banner"> 
            <video 
            ref="backgroundVideo" 
            src="@/assets/wewa.mp4" frameborder="0" 
            autoplay 
            loop>
        </video>
        <h1>Voulez-vous en savoir plus?</h1> 
        <button @click="contact" class="button">Nous contacter</button>
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
  height: 600px;
  background-color: #3f4666;
  
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

</style>
