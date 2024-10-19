<template>
  <div class="body">
    <h1>Liste des produits</h1>

    <table>
      <thead>
        <tr>
          <th>Image produit</th>
          <th>Titre produit</th>
          <th>Description produit</th>
          <th>Prix produit</th>
          <th>MOQ produit</th>
          <th>CatégorieId</th>         
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(produit, index) in productList" :key="index">
          <td><img :src="require(`@/assets/${produit.image}`)" :alt="produit.titre" class="product-image" /></td>
          <td>{{ produit.titre }}</td>
          <td>{{ produit.description }}</td>
          <td>{{ produit.prix }}</td>
          <td>{{ produit.moq }}</td>
          <td>{{ produit.categorieId }}</td>          
          <td>
            <ButtonComponent label="Edit" bcolor="#3F4666" hcolor="#4280b8" @click="showMod(index)"/>
            <ButtonComponent label="x" bcolor="pink" hcolor="crimson" @click="supProd(index)"/>
              <i class="trash"></i>
          </td>
        </tr>
      </tbody>
    </table>
  </div>

  <!-- MODAL  -->
  <div id="editModal" class="modal" v-show="isVisible" v-cloak>
    <div class="modal-content">
      <span class="close" @click="closeModal()">X</span>
      <h2>Modifier le produit :</h2>

      <form>
        <label for="editImg">produit image:</label><br>
        <input type="editImg" v-model="editProd.image" /><br>

        <label for="editName">titre produit:</label><br>
        <input type="text" id="editName" v-model="editProd.titre" /><br>

        <label for="editDescription">description produit:</label><br>
        <input type="editDescription" v-model="editProd.description"/><br>

        <label for="editPrice">Prix produit:</label><br />
        <input type="number" id="editPrice" v-model="editProd.prix" /><br>

        <label for="editMoq">MOQ produit:</label><br />
        <input type="number" id="editMoq" v-model="editProd.moq" /><br>

        <label for="category">Catégorie Id produit:</label><br />
        <select id="category" name="category" v-model="editProd.categorieId">
          <option value="1">Mobilier</option>
          <option value="2">Luminaires</option>
          <option value="3">Tapis</option>
          <option value="4">Deco</option></select
        ><br>

        <br><br>
        <ButtonComponent label="Enregistrer" bcolor="#3F4666" hcolor="#4280b8" @click="saveMod()"/>
      </form>
    </div>
  </div>
  <!-- MODAL  -->

  <section class="add-prod">
    <p>Ajouter un produit</p>
    <form>
        <label for="addImg">Produit image:</label><br>
        <input type="img" id="image" name="image" v-model="editProd.image" /><br>

        <label for="addName">Titre produit:</label><br>
        <input type="text" id="titre" name="titre" v-model="newProd.titre" /><br>

        <label for="addDescription">Description produit:</label><br>
        <input type="text" id="description" name="description" v-model="newProd.description"/><br>

        <label for="editPrice">Prix produit:</label><br>
        <input type="number" id="prix" name="prix" v-model="newProd.prix" /><br>

        <label for="editMoq">MOQ produit:</label><br />
        <input type="number" id="moq" name="moq" v-model="newProd.moq" /><br>

        <label for="category">Catégorie produit:</label><br />
        <select id="category" name="category" v-model="newProd.categ">
        <option value="1">Mobilier</option>
        <option value="2">Luminaires</option>
        <option value="3">Tapis</option>
        <option value="4">Deco</option></select
      ><br>

      <br><br>
      <ButtonComponent label="Enregistrer" bcolor="#3F4666" hcolor="#4280b8" @click="addProd"/>
    </form>
  </section>
</template>

<script>
import ButtonComponent from '@/components/ButtonComponent.vue';

export default {
  name: "GestionProduits",
  components: {
    ButtonComponent,
  },
  data() {
    return {
      productList: [
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
          description:
            "Suspension esthétique avec abat-jour en jute finition naturelle.",
          prix: 69.99,
          moq: 20,
          count: 20,
          categorieId: 2,
        },
        {
          id: 6,
          image: "tapis-5.jpg",
          titre: "Tapis poils longs",
          description:
            "Tapis poils longs tellement doux et durable. Tissé à la main, 100% polyester recylcé!",
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
          description:
            "Canapé en cuir à la teinte riche et chaleureuse. Silhouette minimaliste et design indémodable.",
          prix: 599.99,
          moq: 2,
          count: 2,
          categorieId: 1,
        },
        {
          id: 9,
          image: "tapis-3.jpg",
          titre: "Tapis oriental tissé",
          description:
            "Tapis motif ethnique type Poils ras. Antistatique, antiacarien et il ne blanchit pas avec le temps.",
          prix: 119.99,
          moq: 10,
          count: 10,
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
          count: 20,
          categorieId: 2,
        },
        {
          id: 11,
          image: "deco-4.jpg",
          titre: "Vase ceramique",
          description:
            "Vase decoratif en ceramique. A la fois majestueux et raffiné ce vase peut s'intégrer dans tout style d'intérieur.",
          prix: 79.99,
          moq: 20,
          count: 20,
          categorieId: 4,
        },
        {
          id: 12,
          image: "mobilier-1.jpg",
          titre: "Table de chevet",
          description:
            "Ses lignes d'inspiration scandinave apportent une touche originale et unique, très agréable à vivre au quotidien.",
          prix: 59.99,
          moq: 20,
          count: 20,
          categorieId: 1,
        },
        {
          id: 13,
          image: "luminaire-4.jpg",
          titre: "Suspension forme dôme",
          description:
            "Suspension forme dôme en métal noir. Cette suspension opte pour un style résolument industriel et vintage",
          prix: 39.99,
          moq: 20,
          count: 20,
          categorieId: 2,
        },
        {
          id: 14,
          image: "tapis-1.jpg",
          titre: "Tapis imitation fourrure",
          description:
            "Tapis imitation fourrure couleur gris. Très doux et confortable, il apporte une touche déco à la chambre ou au salon.",
          prix: 109.99,
          moq: 15,
          count: 15,
          categorieId: 3,
        },
        {
          id: 15,
          image: "mobilier-4.jpg",
          titre: "Canapé convertible express 3 places en velours",
          description:
            "Avec son revêtement en velours composé d'un support 91% polyester - 9% coton et d'une surface 100% polyester à la finition passepoilée, il joue la carte de l'élégance.",
          prix: 349.99,
          moq: 5,
          count: 5,
          categorieId: 1,
        },
        {
          id: 16,
          image: "deco-2.jpg",
          titre: "Vase céramique bleu",
          description:
            "Ce vase en céramique est un véritable chef-d'œuvre de design moderne",
          prix: 49.99,
          moq: 20,
          count: 20,
          categorieId: 4,
        },
        {
          id: 17,
          image: "tapis-4.jpg",
          titre: "Tapis crocheté téte d'éléphant",
          description:
            "Tapis crocheté à main en forme d'éléphant, 100% laine recyclée",
          prix: 89.99,
          moq: 20,
          count: 20,
          categorieId: 3,
        },
        {
          id: 18,
          image: "luminaire-2.jpg",
          titre: "Suspension en béton clair et bois",
          description:
            "Une suspension en béton clair qui s'intègre parfaitement dans une décoration industrielle ou dans un intérieur loft.",
          prix: 49.99,
          moq: 20,
          count: 20,
          categorieId: 2,
        },
        {
          id: 19,
          image: "deco-5.jpg",
          titre: "Vase en céramique raku, turquoise",
          description:
            "Vase en céramique raku, couleur turquoise. Ce vase prendra naturellement sa place dans votre intérieur.",
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
      ],
      newProd: {},
      isVisible: false,
      editProd: {},
      indexModal: -1,
    };
  },
  methods: {
    addProd() {
      if (
        this.newProd.image &&
        this.newProd.titre &&
        this.newProd.description &&
        this.newProd.prix &&
        this.newProd.moq &&
        this.newProd.categorieId
      ) {
        this.productList.push(this.newProd);
        this.newProd = {};
      } else {
        alert("Merci de remplir tous les champs.");
      }
    },
    showMod(id) {
      this.isVisible = true;
      this.editProd = { ...this.productList[id] };
      this.indexModal = id;
    },
    saveMod() {
      if (
        this.editProd.image &&
        this.editProd.titre &&
        this.editProd.description &&
        this.editProd.prix &&
        this.editProd.moq &&
        this.editProd.categorieId
      ) {
        this.productList[this.indexModal] = { ...this.editProd };
        this.closeModal();
      }
    },
    supProd(id) {
      if (confirm("Vous etes sur?")) {
        this.ProductList.splice(id, 1);
      }
    },
    closeModal() {
      this.isVisible = false;
    },
    saveToLocalStorage() {
      localStorage.setItem("products", JSON.stringify(this.productList));
    },
  },
  watch: {
    productList: {
      deep: true,
      handler() {
        this.saveToLocalStorage();
      },
    },
  },
  created() {
    let storedProd = localStorage.getItem("products");
    if (storedProd) {
      this.productList = JSON.parse(storedProd);
    }
  },
};
</script>

<style scoped>
body {
  margin: 0;
  font-family: sans-serif;
}

table {
  width: 70%;
  margin: 40px auto;
}

.product-image {
    height: 100px;
    width: 100px;
    margin: 10px;
    object-fit: cover;
}

section.add-more {
  background-color: rgb(241, 241, 241);
  padding: 40px;
  margin-top: 40px;
}

.modal {
  display: flex;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 1;
  justify-content: center;
  align-items: center;
}

.modal-content {
  background-color: white;
  padding: 20px;
  border-radius: 5px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
  max-width: 400px;
  width: 100%;
  position: relative;
}

.close {
  position: absolute;
  top: 10px;
  right: 10px;
  cursor: pointer;
  font-size: 18px;
  color: #333;
  z-index: 2;
}

.btn {
  display: inline-block;
  padding: 10px 20px;
  font-size: 14px;
  text-align: center;
  text-decoration: none;
  border: none;
  cursor: pointer;
  border-radius: 5px;
  transition: background-color 0.3s, color 0.3s;
}

[v-cloak] {
  display: none;
}
</style>
