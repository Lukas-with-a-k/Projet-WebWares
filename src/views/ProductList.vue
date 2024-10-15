<template>
<div class="bkg">
  <h1>Product List</h1>
  <div class="card-container">
  <div class="card" v-for="(prod, index) in produits" :key="index">
      <img  :src="require(`@/assets/${prod.image}`)" :alt="prod.titre" />
      <h4>{{ prod.titre }}</h4>
      <p v-if="isConnected">{{ prod.prix }} €</p>
  </div>
  </div>
</div>  
</template>
  
<script>
  export default {
    data() {
      return {
        produits: [
        {
          id: 1,
          image: "mobilier-5.jpg",
          titre: "Table à manger en bois",
          description: "Table à manger en bois massif avec finition élégante.",
          prix: 259.99,
          moq: 5,
          categorieId: 1,
        },
        {
          id: 2,
          image: "luminaire-1.jpg",
          titre: "Lampe moderne",
          description: "Lampe avec un design moderne et éclairage ajustable.",
          prix: 129.99,
          moq: 10,
          categorieId: 2,
        },
        {
          id: 3,
          image: "tapis-2.jpg",
          titre: "Tapis en laine",
          description: "Tapis doux en laine avec motif géométrique.",
          prix: 89.99,
          moq: 20,
          categorieId: 3,
        },
        {
          id: 4,
          image: "deco-3.jpg",
          titre: "Vase éthnique en argile",
          description: "Vase éthnique en argile avec motifs gravés à la main.",
          prix: 49.99,
          moq: 20,
          categorieId: 4,
        },
        {
          id: 5,
          image: "luminaire-3.jpg",
          titre: "Suspension en jute",
          description:
            "Suspension esthétique avec abat-jour en jute finition naturelle.",
          prix: 69.99,
          moq: 20,
          categorieId: 2,
        },
        {
          id: 6,
          image: "tapis-5.jpg",
          titre: "Tapis poils longs",
          description:
            "Tapis poils longs tellement doux et durable. Tissé à la main, 100% polyester recylcé!",
          prix: 129.99,
          moq: 4,
          categorieId: 3,
        },
        {
          id: 7,
          image: "deco-1.jpg",
          titre: " Vase en bois",
          description: "Vase en bois d'acacia.",
          prix: 29.99,
          moq: 20,
          categorieId: 4,
        },
        {
          id: 8,
          image: "mobilier-3.jpg",
          titre: "Canapé en cuir 3 places",
          description:
            "Canapé en cuir à la teinte riche et chaleureuse. Silhouette minimaliste et design indémodable.",
          prix: 599.99,
          moq: 2,
          categorieId: 1,
        },
        {
          id: 9,
          image: "tapis-3.jpg",
          titre: "Tapis oriental tissé",
          description:
            "Tapis motif ethnique type Poils ras. Antistatique, antiacarien et il ne blanchit pas avec le temps.",
          prix: 119.99,
          moq: 4,
          categorieId: 3,
        },
        {
          id: 10,
          image: "luminaire-5.jpg",
          titre: "Applique en frêne",
          description:
            "Applique murale en bois. Design durable et éco-responsable.",
          prix: 59.99,
          moq: 20,
          categorieId: 2,
        },
        {
          id: 11,
          image: "deco-4.jpg",
          titre: "Vase ceramique",
          description: "Vase decoratif en ceramique. Aporte",
          prix: 49.99,
          moq: 20,
          categorieId: 4,
        },
        {
          id: 12,
          image: "mobilier-1.jpg",
          titre: "Canapé",
          description: "Canapé.",
          prix: 249.99,
          moq: 4,
          categorieId: 1,
        },
        {
          id: 13,
          image: "luminaire-4.jpg",
          titre: "Suspension",
          description: "Suspension.",
          prix: 49.99,
          moq: 20,
          categorieId: 2,
        },
        {
          id: 14,
          image: "tapis-1.jpg",
          titre: "Tapis",
          description: "Tapis.",
          prix: 159.99,
          moq: 20,
          categorieId: 3,
        },
        {
          id: 15,
          image: "mobilier-4.jpg",
          titre: "Canapé",
          description: "Canapé.",
          prix: 349.99,
          moq: 2,
          categorieId: 1,
        },
        {
          id: 16,
          image: "deco-2.jpg",
          titre: "Vase éthnique en argile",
          description: "Vase éthnique en argile avec motifs gravés à la main.",
          prix: 49.99,
          moq: 20,
          categorieId: 4,
        },
        {
          id: 17,
          image: "tapis-4.jpg",
          titre: "Tapis",
          description: "Tapis.",
          prix: 209.99,
          moq: 2,
          categorieId: 3,
        },
        {
          id: 18,
          image: "luminaire-2.jpg",
          titre: "Lampe",
          description: "Lampe.",
          prix: 49.99,
          moq: 20,
          categorieId: 2,
        },
        {
          id: 19,
          image: "deco-5.jpg",
          titre: "Vase éthnique en argile",
          description: "Vase éthnique en argile avec motifs gravés à la main.",
          prix: 49.99,
          moq: 20,
          categorieId: 4,
        },
        {
          id: 20,
          image: "mobilier-2.jpg",
          titre: "Canapé",
          description: "Canapé.",
          prix: 149.99,
          moq: 3,
          categorieId: 1,
        },
        ],
        isConnected: false,
      };
    },
  methods: {
    toggleSelection(item) {
      item.isSelected = !item.isSelected;
      item.compteur = 1;
    },
  },
  computed: {
    filterProduct() {
      return this.products.filter((prod) => prod.isSelected);
    },
    isDisabled() {
      return (prod) => prod.compteur <= 1;
    },
  }
};
</script>

<style scoped>
.bkg {
  background: linear-gradient( rgba(230,237,235,1) 0%, rgba(63,70,102,1) 60%, rgba(116,130,132,1) 84%);
}

h1 {
  color: #3F4666;
  padding: 50px;
}

.card-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
}
.card {
  display: flex;
  justify-content: center;
  flex-direction: column;
  color: whitesmoke;
  border: none;
  padding-bottom: 70px;
  text-align: center;
  width: 500px;
}

.card img {  
  height: 500px;
  width: 500px;
  margin-bottom: 15px;
  object-fit: cover;
}

.card h4 {
  font-size: 1.2em;
  margin: 10px 0;
}

.card p {
  display: none;  
  color: whitesmoke;
  font-size: 1em;
}
/* Media query 945px */
@media (max-width: 945px) {
    .bkg {
    background-image: none;
  }  
  .card-container {
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  .card {
    background-color: #3F4666;
    width: auto;
    margin-bottom: 20px;
  }
}

/* Media query 360px */
@media (max-width: 360px) {
  .bkg {
    background-image: none;
  }  
  .card-container {
    flex-direction: column;
    align-items: center;
    padding-left: 60%;
  }
  .card {
    background-color: #3F4666;
    width: auto;
    padding: 15px;
  }
  .card h4 {
    font-size: 1em;
  }
  .card p {
    font-size: 0.9em;
  }
}
</style>
