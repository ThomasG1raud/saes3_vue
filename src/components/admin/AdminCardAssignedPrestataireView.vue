<template>
  <router-link class="d-contents" :to="'/admin/prestataire/'+curentPrestataire.id">
    <div class="card">
      <div class="d-contents">
        <div class="image">
          <img :src="require('@/assets/'+curentPrestataire.imagePrestataire)" alt="image prestataire">
        </div>
      </div>

      <div class="info">
        <hr>
        <div>
          <h2>{{ curentPrestataire.nomStand }}</h2>
          <p v-for="(horaire, index) in curentPrestatireHoraire" :key="index">
            {{horaire.name}} : {{ horaire.start.substr(11, 5) }} - {{ horaire.end.substr(11, 5) }} <!--todo affichage corecte de la date-->
          </p>
        </div>
        <hr>
        <div class="line">
          <p>Nom : {{ curentPrestataire.name }}</p>
        </div>
        <hr>
        <div class="line">
          <p>Categorie : {{ curentPrestataire.type }}</p>
        </div>
        <hr>
        <div class="line">
          <p>Texte : {{ curentPrestataire.text }}</p>
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
    ...mapGetters(["getInfoPrestataireByIdPrestataire", "getAllHoraireByIdPrestataire"]),
    curentPrestataire() {
      return this.getInfoPrestataireByIdPrestataire(this.idPrestataire)
    },
    curentPrestatireHoraire() {
      return this.getAllHoraireByIdPrestataire(this.idPrestataire)
    }
  }
}
</script>

<style scoped>
.card {
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
  text-align: left;
  padding: 10px;
}
div.info {
  margin-bottom: 10px;
}
</style>