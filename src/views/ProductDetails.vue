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
      isAdmin: false,
    };
  },
  created() {
    this.checkMembershipStatus();
    this.fetchProduct();
  },
  methods: {
    fetchProduct() {
      const productId = this.$route.params.id;
      const products = [
        {
          id: 1,
          image: "mobilier-5.jpg",
          titre: "Table à manger en bois",
          description: "Table à manger en bois massif avec finition élégante.",
          prix: 259.99,
          moq: 5,
          count: 5,
          categorieId: 1,
        },
        {
          id: 2,
          image: "luminaire-1.jpg",
          titre: "Lampe moderne",
          description: "Lampe avec un design moderne et éclairage ajustable.",
          prix: 129.99,
          moq: 10,
          count: 10,
          categorieId: 2,
        },
        {
          id: 3,
          image: "tapis-2.jpg",
          titre: "Tapis en laine",
          description: "Tapis doux en laine avec motif géométrique.",
          prix: 89.99,
          moq: 20,
          count: 20,
          categorieId: 3,
        },
        {
          id: 4,
          image: "deco-3.jpg",
          titre: "Vase éthnique en argile",
          description: "Vase éthnique en argile avec motifs gravés à la main.",
          prix: 49.99,
          moq: 20,
          count: 20,
          categorieId: 4,
        },
        {
          id: 5,
          image: "luminaire-3.jpg",
          titre: "Suspension en jute",
          description: "Suspension esthétique avec abat-jour en jute finition naturelle.",
          prix: 69.99,
          moq: 20,
          count: 20,
          categorieId: 2,
        },
        {
          id: 6,
          image: "tapis-5.jpg",
          titre: "Tapis poils longs",
          description: "Tapis poils longs tellement doux et durable. Tissé à la main, 100% polyester recylcé!",
          prix: 129.99,
          moq: 10,
          count: 10,
          categorieId: 3,
        },
        {
          id: 7,
          image: "deco-1.jpg",
          titre: " Vase en bois",
          description: "Vase en bois d'acacia.",
          prix: 29.99,
          moq: 20,
          count: 20,
          categorieId: 4,
        },
        {
          id: 8,
          image: "mobilier-3.jpg",
          titre: "Canapé en cuir 3 places",
          description: "Canapé en cuir à la teinte riche et chaleureuse. Silhouette minimaliste et design indémodable.",
          prix: 599.99,
          moq: 2,
          count: 2,
          categorieId: 1,
        },
        {
          id: 9,
          image: "tapis-3.jpg",
          titre: "Tapis oriental tissé",
          description: "Tapis motif ethnique type Poils ras. Antistatique, antiacarien et il ne blanchit pas avec le temps.",
          prix: 119.99,
          moq: 10,
          count: 10,
          categorieId: 3,
        },
        {
          id: 10,
          image: "luminaire-5.jpg",
          titre: "Applique en frêne",
          description: "Applique murale en bois. Design durable et éco-responsable.",
          prix: 59.99,
          moq: 20,
          count: 20,
          categorieId: 2,
        },
        {
          id: 11,
          image: "deco-4.jpg",
          titre: "Vase ceramique",
          description: "Vase decoratif en ceramique. A la fois majestueux et raffiné ce vase peut s'intégrer dans tout style d'intérieur.",
          prix: 79.99,
          moq: 20,
          count: 20,
          categorieId: 4,
        },
        {
          id: 12,
          image: "mobilier-1.jpg",
          titre: "Table de chevet",
          description: "Ses lignes d'inspiration scandinave apportent une touche originale et unique, très agréable à vivre au quotidien.",
          prix: 59.99,
          moq: 20,
          count: 20,
          categorieId: 1,
        },
        {
          id: 13,
          image: "luminaire-4.jpg",
          titre: "Suspension forme dôme",
          description: "Suspension forme dôme en métal noir. Cette suspension opte pour un style résolument industriel et vintage",
          prix: 39.99,
          moq: 20,
          count: 20,
          categorieId: 2,
        },
        {
          id: 14,
          image: "tapis-1.jpg",
          titre: "Tapis imitation fourrure",
          description: "Tapis imitation fourrure couleur gris. Très doux et confortable, il apporte une touche déco à la chambre ou au salon.",
          prix: 109.99,
          moq: 15,
          count: 15,
          categorieId: 3,
        },
        {
          id: 15,
          image: "mobilier-4.jpg",
          titre: "Canapé convertible express 3 places en velours",
          description: "Avec son revêtement en velours composé d'un support 91% polyester - 9% coton et d'une surface 100% polyester à la finition passepoilée, il joue la carte de l'élégance.",
          prix: 349.99,
          moq: 5,
          count: 5,
          categorieId: 1,
        },
        {
          id: 16,
          image: "deco-2.jpg",
          titre: "Vase céramique bleu",
          description: "Ce vase en céramique est un véritable chef-d'œuvre de design moderne",
          prix: 49.99,
          moq: 20,
          count: 20,
          categorieId: 4,
        },
        {
          id: 17,
          image: "tapis-4.jpg",
          titre: "Tapis crocheté téte d'éléphant",
          description: "Tapis crocheté à main en forme d'éléphant, 100% laine recyclée",
          prix: 89.99,
          moq: 20,
          count: 20,
          categorieId: 3,
        },
        {
          id: 18,
          image: "luminaire-2.jpg",
          titre: "Suspension en béton clair et bois",
          description: "Une suspension en béton clair qui s'intègre parfaitement dans une décoration industrielle ou dans un intérieur loft.",
          prix: 49.99,
          moq: 20,
          count: 20,
          categorieId: 2,
        },
        {
          id: 19,
          image: "deco-5.jpg",
          titre: "Vase en céramique raku, turquoise",
          description: "Vase en céramique raku, couleur turquoise. Ce vase prendra naturellement sa place dans votre intérieur.",
          prix: 69.99,
          moq: 20,
          count: 20,
          categorieId: 4,
        },
        {
          id: 20,
          image: "mobilier-2.jpg",
          titre: "Etagère murale en pin",
          description: "Etagère murale en pin. Ideale pour un design moderne.",
          prix: 49.99,
          moq: 20,
          count: 20,
          categorieId: 1,
        },
      ];
      this.product = products.find(product => product.id === parseInt(productId));
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
    chosen(product) {
      let produitsInPanier = JSON.parse(localStorage.getItem('produitsInPanier')) || [];
      return produitsInPanier.some(item => item.id === product.id);
    },
    decrease(prod) {
      if (prod.count > prod.moq) {
        prod.count--;
        this.updateLocalStorage(prod);
      }
    },
    increase(prod) {
      prod.count++;
      this.updateLocalStorage(prod);
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
  background: linear-gradient(rgba(230, 237, 235, 1) 0%, rgba(63, 70, 102, 1) 30%, rgba(116, 130, 132, 1) 98%);
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 78vh;
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
  background-color: #3f4666;
}
</style>