<template>
  <div>
    <router-link class="linkCard" :to="'/prestataire/'+prestataire.id">
      <div class="card" :class="prestataire.type">
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
</template>

<script>
export default {
  name: "VitrinePrestataireCardView",
  props: {
    prestataire: {
      text: String,
      imagePrestataire: String,
      imageStand: String,
      type: String,
      id: Number
    }
  }
}
</script>

<style scoped>
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
  .activite {
    background-color: var(--primary);
  }
  .spectacle {
    background-color: var(--secondary);
  }
  .restauration {
    background-color: var(--tertiary);
  }
</style>