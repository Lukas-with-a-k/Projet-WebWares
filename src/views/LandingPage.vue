<template>
    <div>
        <div class="banner"> 
            <video 
            ref="backgroundVideo" 
            src="@/assets/wewa.mp4" frameborder="0" 
            autoplay 
            loop>
        </video> 
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
  methods: {
    
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

</style>
