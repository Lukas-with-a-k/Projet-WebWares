<template>
  <h1>Mon panier</h1>
<div class="container">
  <div class="container1">
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
      <td> <ButtonComponent label="Supprimer" @click="supprimeProduit(produit)" color="darkgray" hcolor="gray"/></td>
   </tr>
</tbody>
</table>
</div>
<div class="container2">
  <div class="prix">
   <p> Total HT : {{ htTotal() }}</p>
    <p>TTC : {{ tva() }}</p>
   <p> A payer : {{ prixTotal() }} </p>
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
produitsInPanier: [
{
id: 1,
image: "mobilier-5.jpg",
titre: 'Table à manger en bois',
description: 'Table à manger en bois massif avec finition élégante.',
prix: 299.99,
moq: 5,
count: 5,
categorieId: 1
},
{
id: 2,
image: 'luminaire-1.jpg',
titre: 'Lampe moderne',
description: 'Lampe avec un design moderne et éclairage ajustable.',
prix: 129.99,
moq: 10,
count:10,
categorieId: 2
},
{
id: 3,
image: 'tapis-2.jpg',
titre: 'Tapis en laine',
description: 'Tapis doux en laine avec motif géométrique.',
prix: 89.99,
moq: 20,
count: 20,
categorieId: 3
},
{
id: 4,
image: 'deco-3.jpg',
titre: 'Vase éthnique en argile',
description: 'Vase éthnique en argile avec motifs gravés à la main.',
prix: 49.99,
moq: 20,
count: 20,
categorieId: 4
},
],
userCommands:[],
prix: {},
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
        priTotal: this.prixTotal()};
      this.saveToStorage();
    },
    checkPanier(){
      if (this.produitsInPanier.length <= 0){
        alert("Votre panier est vide") 
      }
    }
},
watch: {
    produitsInPanier: {
        deep: true,
        handler() {
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
      }else {
    alert("Votre panier est vide")
    }
this.userId = localStorage.getItem("userId");
    },
    computed: {
      
    }
  
}
</script>

<style scoped>

template {
  height: 100%;
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