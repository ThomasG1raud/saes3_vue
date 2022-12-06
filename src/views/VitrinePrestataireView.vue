<template>
  <div>
    <h1>
      Liste des prestataires
    </h1>
    <div class="grid">
      <router-link v-for="(prestataire, index) in getAllPrestataire" :key="index" class="linkCard" :to="'/prestataire/'+prestataire.id">
        <div class="card">
          <div class="stand">
            <img :src="require('@/assets/'+prestataire.imageStand)" alt="image stand" class="stand">
          </div>
          <div class="prestataire">
            <img :src="require('@/assets/'+prestataire.imagePrestataire)" alt="image prestataire">
          </div>
          <div class="p-20">
            <h1 class="titleCard">{{ prestataire.name }}</h1>
            <p class="textCard">{{ prestataire.text }}</p>
          </div>
        </div>
      </router-link>
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
          imagePrestataire: "prestataire.png",
          imageStand: "stand.png",
          id: "1"
        },
        {
          name: "Nom du prestataire",
          text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
          imagePrestataire: "prestataire.png",
          imageStand: "stand.png",
          id: "2"
        },
        {
          name: "Nom du prestataire",
          text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
          imagePrestataire: "prestataire.png",
          imageStand: "stand.png",
          id: "3"
        },
        {
          name: "Nom du prestataire",
          text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
          imagePrestataire: "prestataire.png",
          imageStand: "stand.png",
          id: "4"
        },
        {
          name: "Nom du prestataire",
          text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
          imagePrestataire: "prestataire.png",
          imageStand: "stand.png",
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
    height: 100%;
    max-width: max-content;
    background-color: var(--light);
    color: var(--dark);
    border-radius: 60px 60px 50px 50px;
    transition-duration: 1s;
    display: flex;
    flex-direction: column;
    box-shadow: 0 0 10px var(--dark);
    position: relative;
  }
  .textCard {
    padding-left: 20px;
    padding-right: 20px;
    text-align: justify;
  }
  img {
    width: 100%;
  }
  .prestataire {
    width: 50%;
    aspect-ratio: 1;
    overflow: hidden;
    border-radius: 50%;
    margin: 0 auto;
    position: absolute;
    left: 25%;
    top: 175px;
  }
  a.linkCard {
    text-decoration: none;
    color: var(--light);
  }
  div.stand {
    margin-bottom: 60px;
  }
  img.stand {
    border-radius: 50px 50px 0 0;
  }
  .p-20 {
    padding: 20px;
  }
</style>