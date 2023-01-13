<template>
  <div class="d-contents">
    <div class="card" v-if="idStand">
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
            <router-link class="underline" :to="'/admin/map/'+curentPrestataire.idStand">
              {{ curentPrestataire.nomStand }}
            </router-link>
          </h2>
          <router-link class="underline" to="/admin/calendrier">
            <button class="btn" v-if="!curentPrestatireHoraire.length">
              Ajouter un horaire
            </button>
            <p v-for="(horaire, index) in curentPrestatireHoraire" :key="index">
              {{ horaire.name }} : {{ horaire.start.substr(11, 5) }} - {{ horaire.end.substr(11, 5) }}
              <!--todo affichage corecte de la date-->
            </p>
          </router-link>
        </div>
        <hr>
        <div class="line">
          <p>
            Nom :
            <router-link class="underline" :to="'/admin/prestataire/'+curentPrestataire.id">
              {{ curentPrestataire.name }}
            </router-link>
          </p>
        </div>
        <hr>
        <div class="line">
          <p>
            Categorie :
            <router-link class="underline" :class="curentPrestataire.type"
                         :to="'/admin/prestataire/#'+curentPrestataire.type">
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
      <div>
        <button class="btn btn-edit" @click.prevent="editAssignation()">
          Modifier l'assigniation
        </button>
        <button class="btn btn-delete" @click.prevent="deleteAssignation()">
          Supprimer l'assigniation
        </button>
      </div>

    </div>
    <div v-else class="prestataireError">
      <v-alert
          border="bottom"
          color="var(--red)"
          prominent
          type="error"
      >
        Il n'y a pas de prestataire ici
      </v-alert>
    </div>
  </div>
</template>

<script>
import {mapGetters} from "vuex";
import router from "@/router";

export default {
  name: "AdminCardPrestataireView",
  props: {
    idStand: Number
  },
  computed: {
    ...mapGetters(["getInfoPrestataireByIdStand", "getAllHoraireByIdPrestataire"]),
    curentPrestataire() {
      return this.getInfoPrestataireByIdStand(this.idStand)
    },
    curentPrestatireHoraire() {
      return this.getAllHoraireByIdPrestataire(this.curentPrestataire.id)
    }
  },
  methods: {
    deleteAssignation() {
      this.curentPrestataire.idStand = 0;
      router.push("/admin/map");
    },
    editAssignation() {
      router.push("/admin/assigned/map/"+this.curentPrestataire.id);
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

.btn {
  --defined-color-primary: var(--very-very-light);
  --defined-color-secondary: var(--blue);
  margin: 5px;
}

.btn-delete {
  --defined-color-secondary: var(--red);
}
.btn-edit {
  --defined-color-secondary: var(--green);
}
.prestataireError {
  display: flex;
  align-items: center;
  height: 100%;
  width: 100%;
}
</style>