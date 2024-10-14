<template>
  <h1>Mon panier</h1>
<div class="container">
  <div class="container1">
  <table>
      <tbody>

  <tr class="produit" v-for="(produit, index) in produitsInPanier" :key="index">
     <td> <img  :src=" produit.image " alt=""></td>
      <td>{{ produit.titre }}</td>
      <td>{{ produit.description }}</td>
      <td> <p>{{ produit.prix }}</p></td>
     
  
      <td>
          <span> Quantity : </span>
          <button @click="decrease(produit)"> - </button>
          <span> {{ produit.count }} </span>
          <button @click="increase(produit)"> + </button>
      </td>
     <td> <ButtonComponent label="Supprimer" @click="supprimeProduit(produit)" color="red"/></td>
      <td>Total Ligne : {{ subTotal(produit) }}</td>
  </tr>
</tbody>
</table>
</div>
<div class="container2">
  <div>
      Total : {{ panierTotal() }}
  </div>
  <div>
      <ButtonUser label="Passer au command" @click="passerAuCommand()" color="green"/>
  </div>
</div>
</div>
</template>

<script>
// localStorage.clear();
import ButtonComponent from '@/components/ButtonComponent.vue';

export default {
  components:{
      ButtonComponent,
  },
data(){
return {
produitsInPanier: [
{
id: 1,
image: 'mobilier-5.jpg',
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
total: ""
}

},

methods:{
// counter(produit){
//  let countmin = produit.moq;
//  if (this.count){
//     return this.count
// }else{
//     return countmin
// }
//   },
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
panierTotal(){
  let total =  this.produitsInPanier.reduce((acc, product) =>{
      
         return acc + parseFloat(this.subTotal(product), 0)
  
  }, 0).toFixed(2);
  return total
},

supprimeProduit(ind){
  if(confirm("Etes vous sur devouloir supprimer ce produit ?")){
      this.produitsInPanier.splice(ind, 1);
  }
  },
  passerAuCommand(){
      this.$router.push({name:'commands'})
   
      }, 
saveToStorage(){
      localStorage.setItem("produitsInPanier", JSON.stringify(this.produitsInPanier));
      localStorage.setItem("total", JSON.stringify(this.total));
      
      
  },
},
watch: {
produitsInPanier: {
  deep:true,
            handler(){
                localStorage.setItem("produitsInPanier", JSON.stringify(this.produitsInPanier))
            }
 },
 total: {
handler() {
  localStorage.setItem("total", JSON.stringify(this.total));
},
},
}

// mounted(){
//     if(localStorage.getItem('produitsInPanier')) this.produitsInPanier = JSON.parse(localStorage.getItem('produitsInPanier');

// //         // récupérer les paramètre passé depuis le composant userList
// //         let userId = this.$route.params.id;
// //         this.products = JSON.parse(localStorage.getItem(`user_${userId}`));

//     }
  
}
</script>

<style scoped>
.container {
display: flex;
}
.produit{
display: flex;
justify-content: space-between;
align-items: center;
/* flex-direction: column; */
/* width: 50%; */
margin: 50px auto;
gap: 15px;
}
.produit img{

height: 100px;
}
span{
margin: 0 7px;
}
</style>