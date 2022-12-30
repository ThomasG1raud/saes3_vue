<template>
  <div>
    <div v-if="curentPrestataire">
      <router-link class="linkCard" :to="'/admin/prestataire/'+curentPrestataire.id">
        <div class="card">
          <div class="divImage">
            <img :src="require('@/assets/'+curentPrestataire.imagePrestataire)">
          </div>
          <div class="divInfo">
            <div class="infoStand">
              <p>12h23 - 16h45</p>
              <h2>{{ curentPrestataire.nomStand }}</h2>
            </div>
            <div class="infoPrestataire">
              <div class="info">
                <p>Nom :</p>
                <p>{{ curentPrestataire.name }}</p>
              </div>
              <hr>
              <div class="info">
                <p>Categorie :</p>
                <p>{{ curentPrestataire.type }}</p>
              </div>
              <hr>
            </div>
          </div>
          <div class="divTextPresentation">
            <p>{{ curentPrestataire.text }}</p>
          </div>
        </div>
      </router-link>
    </div>
    <div v-else id="prestataireError">
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

export default {
  name: "VitrineCardPrestataireView",
  props: {
    idStand: Number
  },
  computed :{
    ...mapGetters(["getInfoPrestataireByIdStand"]),
    curentPrestataire() {
      return this.getInfoPrestataireByIdStand(this.idStand)
    }
  }
}
</script>

<style scoped>

.card {
  width: 80%;
  height: 96%;
  border-radius: 20px;
  border: solid;
  margin: 10px 30px 0 30px;
}

.divImage {
  aspect-ratio: 1;
  height: auto;
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

.divTextPresentation {
  overflow: scroll;
  height: 15%;
}


button {

  --defined-color-primary: var(--very-very-light);
  --defined-color-secondary: var(--very-dark);
}
#prestataireError {
  display: flex;
  width: 100%;
  height: 100%;
}
.v-alert {
  margin: auto;
  padding: 30px;
}
.v-alert__content {
  margin-left: 10px;
}
</style>