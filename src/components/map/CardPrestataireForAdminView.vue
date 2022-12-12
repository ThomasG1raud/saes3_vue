<template>
  <router-link class="linkCard" :to="'/prestataire/'+curentPrestataire.id">
    <div class="card">
<!--      {{prestataire}}-->
      <div class="divImage">
        <img :src="require('../../assets/'+curentPrestataire.imagePrestataire)">
      </div>
      <div class="divInfo">
        <div class="infoStand">
          <p>12h23 - 16h45</p>
          <h2> {{ curentPrestataire.nomStand }}</h2>
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
        <p>{{curentPrestataire.text}}</p>
      </div>
    </div>
  </router-link>
</template>

<script>
import {mapGetters} from "vuex";

export default {
  name: "CardPrestataireForAdminView",
  props: {
    id: Number
  },
  computed :{
    ...mapGetters(["getInfoPrestataire"]),
    curentPrestataire() {
      return this.getInfoPrestataire(this.id)
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

#delete {
  position: relative;
  top: -20px;
  width: 200px;
  background-color: var(--very-very-light);
  border: solid;
}

#delete:hover {
  background-color: var(--very-dark);
  border-color: var(--very-dark);
}



button {

  --defined-color-primary: var(--very-very-light);
  --defined-color-secondary: var(--very-dark);
}

</style>