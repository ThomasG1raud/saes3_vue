<template>
    <router-link class="linkCard" :to="'/liste_prestataire/'+idPrestataire">
      <div class="card">
        <div class="divImage">
          <img :src="require('@/assets/'+curentPrestataire.imagePrestataire)">
        </div>
        <div class="divInfo">
          <div class="infoStand">
            <p v-for="(horaire, index) in curentHoraire" :key="index">
              {{ horaire.start.substr(11, 5) }} - {{ horaire.end.substr(11, 5) }}
            </p>
            <h2>{{ curentPrestataire.nomStand }}</h2>
          </div>
          <div class="infoPrestataire">
            <div class="info">
              <p>Nom :</p>
              <p>{{ curentPrestataire.name }}</p>
            </div>
            <hr>
          </div>
        </div>
        <div class="divTextPresentation">
          <p>{{ curentPrestataire.text }}</p>
        </div>
      </div>
    </router-link>
</template>

<script>
import {mapGetters} from "vuex";

export default {
  name: "VitrinePrestataireCardView",
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
  width: 450px;
  border-radius: 20px;
  border: solid;
  margin: 30px;
}

.divImage {
  aspect-ratio: 1;
  border-radius: 20px 20px 0 0;
  overflow: hidden;

}

img {
  width: 100%;
}

.infoPrestataire {
  display: flex;
  align-items: start;
  flex-direction: column;
}

a {
  text-decoration: none;
  color: var(--very-very-dark);
}

hr {
  width: 70%;
  margin: 0;
}

p {
  margin: 10px 0 20px 10px;
}

.info {
  display: flex;
}
.infoStand {
  margin-top: 10px;
}

</style>