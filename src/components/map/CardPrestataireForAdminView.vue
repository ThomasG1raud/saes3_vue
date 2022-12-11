<template>
  <router-link class="linkCard" :to="'/prestataire/'+prestataire.id">
    <div class="card">
<!--      {{prestataire}}-->
      <div class="divImage">
        <img :src="require('../../assets/'+prestataire.imagePrestataire)">
      </div>
      <div class="divInfo">
        <div class="infoStand">
          <p>12h23 - 16h45</p>
          <h2> {{ prestataire.nomStand }}</h2>
        </div>
        <div class="infoPrestataire">
          <div class="info">
            <p>Nom :</p>
            <p>{{ prestataire.name }}</p>
          </div>
          <hr>
          <div class="info">
            <p>Categorie :</p>
            <p>{{ prestataire.type }}</p>
          </div>
          <hr>
        </div>
      </div>
      <div class="divTextPresentation">
        <p>{{prestataire.text}}</p>
      </div>
    </div>
  </router-link>
</template>

<script>
export default {
  name: "CardPrestataireForAdminView",
  props: {
    prestataire: {
      name: String,
      text: String,
      imagePrestataire: String,
      imageStand: String,
      nomStand : String,
      type: String,
      id: Number
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
  height: 450px;
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


</style>