<template>
  <h1>Mon panier</h1>
<div class="container bkg">
  <p v-if="isError">{{ errorMessage }}</p><br>
  <div class="container1" v-if="!isError">
  <table>
      <tbody>
        
  <tr v-for="(produit, index) in produitsInPanier" :key="index">
     <td> <img  :src="require(`@/assets/${produit.image}`)"></td>
      <td>{{ produit.titre }}</td>
      <!-- <td> <p>{{ produit.prix }}</p></td> -->
      <td>
        <span> Quantity : </span>
          <button @click="decrease(produit)"> - </button>
          <span> {{ produit.count }} </span>
          <button @click="increase(produit)"> + </button>
      </td>
      <td>Total TH : {{ subTotal(produit) }}</td>
      <td> <ButtonComponent label="Supprimer" @click="supprimeProduit(index)" color="darkgray" hcolor="gray"/></td>
   </tr>
</tbody>
</table>
</div>
<div class="container2" v-if="!isError">
  <div class="prix">
   <p> HT : {{ htTotal() }}</p>
    <p>TVA : {{ tva() }}</p>
   <p> TTC : {{ prixTotal() }} </p>
  </div>
    <div class="button">
      <ButtonComponent label="Passer au command" @click="passerAuCommand()" color="green" hcolor="darkgreen"/>
    </div>
  </div>
</div>
</template>

<script>
// localStorage.clear();
import ButtonComponent from '@/components/ButtonComponent.vue';


export default {
  components:{
      ButtonComponent
  },
data(){
return {
produitsInPanier: [],
userCommands:[],
prix: {},
isError: false,
}

},

methods:{

decrease(prod){
  if (prod.count > prod.moq){
 return prod.count --;
  
}else{
  alert(`Le quantité ne peut pas d'être moins ${prod.moq} pour ce produit`)
}
},
increase(prod){
 return prod.count++
  },

subTotal(item) {
   return (item.prix * item.count).toFixed(2);
      },
htTotal(){
  return this.produitsInPanier.reduce((acc, product) =>{
     return acc + parseFloat(this.subTotal(product), 0)
    }, 0).toFixed(2);
},
tva() {  
    let tvaRate = 5.5; 
    let ht = this.htTotal();
    return (ht * tvaRate / 100).toFixed(2); 
},
prixTotal(){
  let th = parseFloat(this.htTotal());
  let tva = parseFloat(this.tva());
return (th +tva).toFixed(2)
},
supprimeProduit(ind){
  if(confirm("Etes vous sur devouloir supprimer ce produit ?")){
      this.produitsInPanier.splice(ind, 1);
  }
  },
  passerAuCommand(){
      this.$router.push({name:'commands'});
         }, 
saveToStorage(){
      localStorage.setItem("produitsInPanier", JSON.stringify(this.produitsInPanier));
      localStorage.setItem("prix", JSON.stringify(this.prix));
  },
updateTotal() {
      this.prix = {ht:this.htTotal(), 
        tva: this.tva(), 
        prixTotal: this.prixTotal()};
      this.saveToStorage();
    },
    checkPanier(){
      if (this.produitsInPanier.length === 0){
        this.isError = true;
        this.errorMessage = ("Votre panier est vide") 
      }
    }
},
watch: {
    produitsInPanier: {
        deep: true,
        handler() {
          this.checkPanier();
          this.updateTotal();
    },
    // prix: {
    //     deep: true,
    //     handler() {
    //         this.updateTotal();
    //     }
    }
},
created(){
       this.prix = localStorage.getItem("prix")?JSON.parse(localStorage.getItem("prix")):this.prix
   },
mounted(){
    if(localStorage.getItem('produitsInPanier')) {this.produitsInPanier = JSON.parse(localStorage.getItem('produitsInPanier'))
      }
    // else {
    // alert("Votre panier est vide");
    //     }
this.userId = localStorage.getItem("userId");
    },
    computed: {
      
    }
  
}
</script>

<style scoped>

.bkg {
  background: linear-gradient( rgba(230,237,235,1) 0%, rgba(63,70,102,1) 60%, rgba(116,130,132,1) 84%);
}
.bkg p {
margin: 0 auto;
font-size: large;
}
.container {
  height: 72vh;
display: flex;
justify-content: space-around;
min-width: 100px;
flex-wrap: wrap;
}
.container2{
/* flex-direction: column; */
position: sticky;
top:0;
margin: 10px;
/* justify-content: space-around; */
}
.prix{
  flex-direction: column;
  margin: 5px;
  justify-content: space-around;
  border: 1px solid black;
  border-radius: 5px;
  margin-bottom: 10px;
}
/* align-items: center;
/* flex-direction: column; */
/* width: 50%; */
/* margin: 50px auto; */

tr img{
height: 50px;
width: 50px;
}
span{
margin: 7px 7px;
}
</style>