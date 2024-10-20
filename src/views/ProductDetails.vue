<template>
<div class="bkg">
    <div class="product-details">
      <div v-if="product">
        <h1>{{ product.titre }}</h1>
        <img :src="require(`@/assets/${product.image}`)" :alt="product.titre" class="product-image" />
        <p>{{ product.description }}</p>
        <p v-if="isMember">Prix: {{ product.prix }} €</p>
        <p v-if="isMember">Quantité Minimum de Commande: {{ product.moq }}</p>
        <button v-if="isMember" @click="addToCart(product)">Ajouter au panier</button>
      </div>
      <div v-else>
        <p>Produit non trouvé.</p>
      </div>
    </div>
  </div>  
</template>
  
  <script>
  export default {
    data() {
      return {
        product: null,
        isMember: false,
      };
    },
    created() {
      this.checkMembershipStatus();
      this.fetchProduct();
    },
    //   
    //   
    //   
    //     
    //   }
    //   
    //     
    //   }
    // },
    methods: {
      fetchProduct(){
        const productId = this.$route.params.id;
        const storedProducts = JSON.parse(localStorage.getItem('products'));

        if (storedProducts) {
          this.product = storedProducts.find(prod => prod.id === parseInt(productId));  
        }
        if (!this.product) {
          console.error('Product not found');  
        }
      },  
      goBack() {
        this.$router.go(-1);
      },
      checkMembershipStatus() {
        const userType = localStorage.getItem('userType');
        this.isMember = userType === 'member';
      },
      addToCart(product, index) {
      let produitsInPanier = JSON.parse(localStorage.getItem('produitsInPanier')) || [];
      if (produitsInPanier.some(item => item.id === product.id)) {
        console.log(`${product.id} est deja dans le panier`);
      } else {
        produitsInPanier.push({
          id: product.id,
          image: product.image,
          titre: product.titre,
          prix: product.prix,
          count: product.count,
          categorieId: product.categorieId
        });
        localStorage.setItem('produitsInPanier', JSON.stringify(produitsInPanier));
        console.log(`${product.titre} ajouté au panier`);
        //validation de ajout au click
        this.productAdded = index;
        setTimeout(() => {
        this.productAdded = null;
        }, 700);
        window.location.reload();
      }
    },
    updateLocalStorage(prod) {
      let produitsInPanier = JSON.parse(localStorage.getItem('produitsInPanier')) || [];
      const productIndex = produitsInPanier.findIndex(item => item.id === prod.id);
      if (productIndex != -1) {
        produitsInPanier[productIndex].count = prod.count;
        localStorage.setItem('produitsInPanier', JSON.stringify(produitsInPanier));
      }
    }
  },
};
  </script>
  
  <style scoped>
.bkg {  
  background: linear-gradient( rgba(230,237,235,1) 0%, rgba(63,70,102,1) 30%, rgba(116,130,132,1) 98%);
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 78vh;
}
.back-button {
  background-color: #4280b8;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
}
.back-button:hover {
  background-color: #3F4666;
}
h1 {
  color: #3F4666;
  padding: 50px;
}
  .product-details {
    display: flex;
    flex-direction: column;
    align-items: center;
    color: #e6edeb;
    padding: 20px;
  }
  .product-image {
    width: 100%;
    max-width: 600px;
    margin-bottom: 20px;
    object-fit: cover;
  }
  button {
    background-color: #4280b8;
    color: white;
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
  }
  button:hover {
    background-color:#3f4666;
  }
  </style>