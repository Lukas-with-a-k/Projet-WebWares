<template>
    <div>
        <h1>Mon panier</h1>
        <div class="produit" v-for="produit in panier" :key="produit.id">
            <img  :src=" produit.image " alt="">
            <h4>{{ produit.titre }}</h4>
            <p>{{ produit.description }}</p>
            <p>{{ produit.prix }}</p>
            <span>
                <span> Quantity : </span>
                <button @click="decrease(produit)"> - </button>
                <span> {{ produit.qte }} </span>
                <button @click="decrease(produit)"> + </button>
            </span>
            <ButtonComponent label="Supprimer du panier" @click="removeProduct(produit)" color="red"/>
            <span>Total Ligne {{ subTotal(produit.id) }}</span>
        </div>
        <div>
            Grand Total {{ total }}
        </div>
    </div>
</template>

<script>
import ButtonComponent from '@/components/ButtonComponent.vue';

export default {
        components:{
            ButtonComponent
        },
data(){
return {
    categories: [
    { id: 1, name: 'Mobilier d\'intérieur' },
    { id: 2, name: 'Luminaires' },
    { id: 3, name: 'Tapis' },
    { id: 4, name: 'Objets de décorations' }
  ],
  
  // Exemple tableau des produits
  produits: [
    {
      id: 1,
      image: 'mobilier-5.jpg',
      titre: 'Table à manger en bois',
      description: 'Table à manger en bois massif avec finition élégante.',
      prix: 299.99,
      moq: 5,
      categorieId: 1
    },
    {
      id: 2,
      image: 'luminaire-1.jpg',
      titre: 'Lampe moderne',
      description: 'Lampe avec un design moderne et éclairage ajustable.',
      prix: 129.99,
      moq: 10,
      categorieId: 2
    },
    {
      id: 3,
      image: 'tapis-2.jpg',
      titre: 'Tapis en laine',
      description: 'Tapis doux en laine avec motif géométrique.',
      prix: 89.99,
      moq: 20,
      categorieId: 3
    },
    {
      id: 4,
      image: 'deco-3.jpg',
      titre: 'Vase éthnique en argile',
      description: 'Vase éthnique en argile avec motifs gravés à la main.',
      prix: 49.99,
      moq: 20,
      categorieId: 4
    },
  ],
  
  // Exemple tableau des commandes & panier 
//   commandes:[
//     {
//       id: 1,
//       produits: [
//         { produitId: 1, quantite: 2 },
//         { produitId: 3, quantite: 1 }
//       ],
//       coutTotal: 689.97,
//       userId: 1
//     },
//     {
//       id: 2,
//       produits: [
//         { produitId: 2, quantite: 1 },
//         { produitId: 4, quantite: 3 }
//       ],
//       coutTotal: 539.96,
//       userId: 2
//     },
//   ],

    count: 0,
    
}
 },
 methods:{
    increase(produit){
        this.count = produit.moq + 1;
    },
    decrease(produit){
        if (this.count > produit.moq)
        this.count --;
    },
    }
}
</script>

<style scoped>

</style>