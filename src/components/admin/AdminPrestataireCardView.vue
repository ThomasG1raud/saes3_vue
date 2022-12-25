<template>
  <router-link class="linkCard" :to="'/admin/prestataire/'+curentPrestataire.id">
    <div class="card" :class="curentPrestataire.type">
      <div class="stand">
        <img :src="require('@/assets/'+curentPrestataire.imageStand)" alt="image stand" class="stand">
      </div>
      <div class="prestataire">
        <img :src="require('@/assets/'+curentPrestataire.imagePrestataire)" alt="image prestataire">
      </div>
      <div class="p-20">
        <h1 class="titleCard">{{ curentPrestataire.name }}</h1>
        <p class="textCard">{{ curentPrestataire.text }}</p>
      </div>
    </div>
  </router-link>
</template>

<script>
import {mapGetters} from "vuex";

export default {
  name: "AdminPrestataireCardView",
  props: {
    idPrestataire: Number
  },
  computed: {
    ...mapGetters(["getInfoPrestataireByIdPrestataire", "getHoraireByIdPrestataire"]),
    curentPrestataire() {
      return this.getInfoPrestataireByIdPrestataire(this.idPrestataire)
    },
    curentHoraire() {
      return this.getHoraireByIdPrestataire(this.idPrestataire)
    }
  }
}
</script>

<style scoped>
.card {
  height: 100%;
  max-width: max-content;
  color: var(--dark);
  border-radius: 60px 60px 50px 50px;
  transition-duration: 1s;
  display: flex;
  flex-direction: column;
  box-shadow: 0 0 10px var(--dark);
  position: relative;
}
.card:hover {
  transition-duration: 1s;
  scale: 1.02;
  box-shadow: 0 0 15px var(--dark);
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
  color: var(--very-very-light);
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