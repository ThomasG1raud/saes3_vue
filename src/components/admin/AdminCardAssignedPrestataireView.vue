<template>
  <router-link class="d-contents" :to="'/admin/prestataire/'+curentPrestataire.id">
    <div class="card">
      <div class="d-contents">
        <div class="image">
          <img :src="require('@/assets/'+curentPrestataire.imagePrestataire)" alt="image prestataire">
        </div>
      </div>

      <div class="">
        <hr>
        <div>
          <h2>{{ curentPrestataire.nomStand }}</h2>
          <p>12h23 - 16h45</p>
        </div>
        <hr>
        <div class="line">
          <p>Nom :</p>
          <p>{{ curentPrestataire.name }}</p>
        </div>
        <hr>
        <div class="line">
          <p>Categorie :</p>
          <p>{{ curentPrestataire.type }}</p>
        </div>
        <hr>
        <div class="line">
          <p>{{ curentPrestataire.text }}</p>
        </div>
      </div>

    </div>
  </router-link>
</template>

<script>
import {mapGetters} from "vuex";

export default {
  name: "AdminCardAssignedPrestataireView",
  props: {
    idPrestataire: Number
  },
  computed: {
    ...mapGetters(["getInfoPrestataireByIdPrestataire"]),
    curentPrestataire() {
      return this.getInfoPrestataireByIdPrestataire(this.idPrestataire)
    }
  }
}
</script>

<style scoped>
.card {
  /*border: 1px solid var(--very-very-dark);*/
  height: 100%;
  margin-right: 10px;
  display: flex;
  flex-direction: column;

  border-radius: 30px;
  box-shadow: 0 0 15px var(--grey);
  transition-duration: 250ms;
}
.card:hover {
  box-shadow: 0 0 15px var(--dark);
}

div.image {
  height: 100%;
  overflow: hidden;

  aspect-ratio: 1;
  /*margin: 0 auto;*/
}

.d-contents {
  display: contents;
}

img {
  height: inherit;
}

div.line {
  display: flex;
  padding: 10px;
}
div.line > p:first-child {
  margin-right: 5px;
}
</style>