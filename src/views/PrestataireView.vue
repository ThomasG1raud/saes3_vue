<template>
  <div>
    <h1>
      Liste des prestataires
    </h1>
    <div class="grid">
      <a v-for="(prestataire, index) in getAllPrestataire" :key="index" class="linkCard" :href="'#/prestataire/'+prestataire.id">
        <div class="card">
          <h1 class="titleCard">{{ prestataire.name }}</h1>
          <p class="textCard">{{ prestataire.text }}</p>
          <div class="m-auto">
            <img :src="require('../assets/'+prestataire.image)" alt="image card">
          </div>
        </div>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: "PrestataireView",
  computed: {
    getAllPrestataire() {
      const allPrestataire = [
        {
          name: "Nom du prestataire",
          text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
          image: "prestataire.png",
          id: "1"
        },
        {
          name: "Nom du prestataire",
          text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
          image: "prestataire.png",
          id: "2"
        },
        {
          name: "Nom du prestataire",
          text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
          image: "prestataire.png",
          id: "3"
        },
        {
          name: "Nom du prestataire",
          text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
          image: "prestataire.png",
          id: "4"
        },
        {
          name: "Nom du prestataire",
          text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
          image: "prestataire.png",
          id: "5"
        }
      ]
      return allPrestataire;
    }
  }
}
</script>

<style scoped>
  .grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-row-gap: 50px;
    grid-column-gap: 50px;
    margin: 20px 10%;
  }
  .card {
    background-color: var(--primary);
    color: var(--light);
    border-radius: 20px;
    padding: 20px;
    transition-duration: 1s;
    display: flex;
    flex-direction: column;
  }
  .textCard {
    padding-left: 20px;
    padding-right: 20px;
    text-align: justify;
  }
  img {
    width: 200px;
  }
  .m-auto {
    margin: auto;
  }
  a.linkCard {
    text-decoration: none;
    color: var(--light);
  }
</style>