<template>
<!--    <router-link class="linkCard" :to="'/prestataire/'+prestataire.id">-->
    <router-link class="linkCard" :to="'/prestataire/'+idPrestataire">
      <div class="card">
        <div class="divImage">
          <img src="@/assets/prestataire.png">
        </div>
        <div class="divInfo">
          <div class="infoStand">
            <p>12h23 - 16h45</p>
            <h2> la bonne saucisse de michelle</h2>
          </div>
          <div class="infoPrestataire">
            <div class="info">
              <p>Nom :</p>
              <p>Merveaux</p>
            </div>
            <hr>
            <div class="info">
              <p>prenom</p>
              <p>Julien</p>
            </div>
            <hr>
          </div>
        </div>
        <div class="divTextPresentation">
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
        </div>
      </div>
    </router-link>
</template>

<script>
export default {
  name: "VitrinePrestataireCardView",
  props: {
    idPrestataire: Number
  },
  mounted() {
    console.log(this.$route.hash)
    let hash = this.$route.hash
    if (hash) {
      hash = hash.slice(1) // enleve le # au début pour obtenir le vrai nom de l'ancre
      setTimeout(()=>{
      const el = this.$refs[hash] // on récupère l'élément du DOM avec le même nom
      console.clear()
      console.log(hash, el)
      // el.scrollIntoView() // on scrolle
      }, 1000)
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


</style>