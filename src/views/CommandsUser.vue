<template>
    <div>

    </div>
</template>

<script>
    export default {
        data(){
return {
  
    total: "",
  // produitsInPanier: [
  //   {
  //     id: 1,
  //     image: 'mobilier-5.jpg',
  //     titre: 'Table à manger en bois',
  //     description: 'Table à manger en bois massif avec finition élégante.',
  //     prix: 299.99,
  //     moq: 5,
  //     count: 5,
  //     categorieId: 1
  //   },
  //   {
  //     id: 2,
  //     image: 'luminaire-1.jpg',
  //     titre: 'Lampe moderne',
  //     description: 'Lampe avec un design moderne et éclairage ajustable.',
  //     prix: 129.99,
  //     moq: 10,
  //     count:10,
  //     categorieId: 2
  //   },
  //   {
  //     id: 3,
  //     image: 'tapis-2.jpg',
  //     titre: 'Tapis en laine',
  //     description: 'Tapis doux en laine avec motif géométrique.',
  //     prix: 89.99,
  //     moq: 20,
  //     count: 20,
  //     categorieId: 3
  //   },
  //   {
  //     id: 4,
  //     image: 'deco-3.jpg',
  //     titre: 'Vase éthnique en argile',
  //     description: 'Vase éthnique en argile avec motifs gravés à la main.',
  //     prix: 49.99,
  //     moq: 20,
  //     count: 20,
  //     categorieId: 4
  //   },
  // ],
  
}

 }, 
 mounted(){
            // récupérer les paramètre passé depuis le composant userList
            this.total = JSON.parse(localStorage.getItem("total"));

        }
    }

</script>

<style scoped>

</style>