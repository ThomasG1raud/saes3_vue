<template>
  <div class="d-contents">
    <div class="card">
      <div class="d-contents">
        <div class="image">
          <img :src="require('@/assets/'+curentPrestataire.imagePrestataire)" alt="image prestataire">
        </div>
      </div>

      <div class="info">
        <hr>
        <div>
          <h2>
            Nom du stand :
            <router-link class="underline" :to="'/map/'+curentPrestataire.idStand">
              {{ curentPrestataire.nomStand }}
            </router-link>
          </h2>
          <router-link class="underline" to="/calendrier">
            <p v-for="(horaire, index) in curentPrestatireHoraire" :key="index">
              {{horaire.name}} : {{ horaire.start.substr(11, 5) }} - {{ horaire.end.substr(11, 5) }} <!--todo affichage corecte de la date-->
            </p>
          </router-link>
        </div>
        <hr>
        <div class="line">
          <p>
            Nom :
            <router-link class="underline" :to="'/liste_prestataire/'+curentPrestataire.id">
              {{ curentPrestataire.name }}
            </router-link>
          </p>
        </div>
        <hr>
        <div class="line">
          <p>
            Categorie :
            <router-link class="underline" :class="curentPrestataire.type" :to="'/liste_prestataire/#'+curentPrestataire.type">
              {{ curentPrestataire.type }}
            </router-link>
          </p>
        </div>
        <hr>
        <div class="line">
          <p>
            Texte :
            <span>
              {{ curentPrestataire.text }}
            </span>
          </p>
        </div>
      </div>
    </div>
  </div>
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
    curentPrestatireHoraire() {
      return this.getHoraireByIdPrestataire(this.idPrestataire)
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

  /*aspect-ratio: 1;*/
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