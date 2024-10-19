<template>
  <h1>Mon panier</h1>
<div class="container bkg">
  <p v-if="isError">{{ errorMessage }}</p><br>
  <div class="container1" v-if="!isError">
  <table>
      <tbody>
        
  <tr v-for="(produit, index) in produitsInPanier" :key="index">
     <td> <img  :src="require(`@/assets/${produit.image}`)"></td>
      <td> {{ produit.titre }} </td>
      <!-- <td> <p>{{ produit.prix }}</p></td> -->
      <td>
        <span> Quantity : </span>
          <button @click="decrease(produit)">  -  </button>
          <span> {{ produit.count }} </span>
          <button @click="increase(produit)"> + </button>
      </td>
      <td>Total TH : {{ subTotal(produit) }}</td>
      <td> <ButtonComponent label="Supprimer" @click="supprimeProduit(index)" bcolor="#3f4666" hcolor="#4280b8"/></td>
   </tr>
</tbody>
</table>
</div>
<div class="container2" v-if="!isError">
  <div class="prix">
   <p> HT : {{ htTotal() }}</p>
    <p>TVA : {{ tva() }}</p>
   <p> TTC :<span> {{ prixTotal() }} </span></p>
  </div>
    <div class="button">
      <ButtonComponent label="Passer au command" @click="passerAuCommand()" bcolor="#3f4666" hcolor="#4280b8"/>
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
  // alert(`Le quantité ne peut pas d'être moins ${prod.moq} pour ce produit`)
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
  this.produitsInPanier.splice(ind, 1)
  },
  passerAuCommand(){
      this.$router.push({name:'commands'})
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
  
    }
},
created(){
       this.prix = localStorage.getItem("prix")?JSON.parse(localStorage.getItem("prix")):this.prix
   },
mounted(){
    if(localStorage.getItem('produitsInPanier')) {this.produitsInPanier = JSON.parse(localStorage.getItem('produitsInPanier'))
      }else{
   this.isError = true;
   this.errorMessage = "Votre panier est vide";
        }
this.userId = localStorage.getItem("userId");
    },
    computed: {
      
    }
  
}
</script>
<style scoped>
.bkg {
    background: linear-gradient(rgba(230,237,235,1) 0%, rgba(63,70,102,1) 60%, rgba(116,130,132,1) 84%);
    padding: 20px;
}

.container {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-around;
    height: auto;
    padding: 20px;
}

table .container2 {
    width: 100%;
    max-width: 600px;
    margin-bottom: 20px;
}


.bkg p {
    margin: 0 auto;
    font-size: 30px;
    margin-top: 10%;
}

.prix {
    flex-direction: column;
    padding: 10px;
    justify-content: space-around;
    border: 1px solid black;
    border-radius: 5px;
    margin: 20px 0;
    font-size: 20px;
   
}

.prix span {
    font-size: 30px;
    font-weight: 700;
}

tr img {
    height: 70px;
    width: 70px;
}

@media only screen and (max-width: 600px) {
    .bkg {
        background-image: none;
    }
    .container {
    padding: 15px;
    /* flex-direction: column;   */
    display: flexbox;
        height: 78vh;
     flex-wrap: wrap;
    align-items: center;
    padding: 20px;
}
table, tbody, tr, td {
    display: block;
      }
   .container1, .container2 {
        width: 100%;
        padding: 15px;
       
    }
    .prix {
        font-size: 16px;
        width: auto;
        height: auto;
    }
    .prix p{
      font-size: 16px;
    }
    .prix span {
        font-size: 20px;
       
    }
    .button {
        text-align: center;
    }
}

@media only screen and (min-width: 768px) {
    .container {
        flex-direction: row;
        justify-content: space-around;
        height: auto;
        width: 100vw;
    }
    .container2 {
        width: 35%;
        max-width: 600px;
        margin-bottom: 20px;
        /* flex-shrink: 2; */
    }
    table{
      width: 100%;
      color: #fff;
      font-size: 24px;
    }
    .prix {
        font-size: 24px;
        color: white;
    }
    .prix span {
        font-size: 25px;
        
    }
}
.modal {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0,0,0,0.5);
    display: flex;
    justify-content: center;
    align-items: center;
}

.modal-contenu {
    background-color: #fff;
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0 0 10px rgba(0,0,0,0.5);
    width: 90%;
    max-width: 500px;
}
</style>

