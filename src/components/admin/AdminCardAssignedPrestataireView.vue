<template>
<!--  <img :src="require('@/assets/'+curentPrestataire.imagePrestataire)">-->
<!--  <p> {{ curentPrestataire.nomStand }}</p>-->
<!--  <p>{{ curentPrestataire.name }}</p>-->
<!--  <p>{{ curentPrestataire.type }}</p>-->
<!--  <p>{{curentPrestataire.text}}</p>-->
  <router-link class="d-contents linkCard" :to="'/admin/prestataire/'+curentPrestataire.id">
    <div class="card">
      <div class="d-contents">
        <div class="image">
          <img :src="require('@/assets/'+curentPrestataire.imagePrestataire)">
        </div>
      </div>
      <div class="info">
        <p> {{ curentPrestataire.nomStand }}</p>
        <p>{{ curentPrestataire.name }}</p>
        <p>{{ curentPrestataire.type }}</p>
        <p>{{curentPrestataire.text}}</p>
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
  computed :{
    ...mapGetters(["getInfoPrestataireByIdPrestataire"]),
    curentPrestataire() {
      return this.getInfoPrestataireByIdPrestataire(this.idPrestataire)
    }
  }
}
</script>

<style scoped>
a.linkCard {
  margin-bottom: 10px;
}
.card {
  border: 1px solid var(--very-very-dark);
  height: 100%;
  margin: 10px;
  display: flex;
  flex-direction: column;
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

div.info {
  border: 1px solid blue;
}
</style>