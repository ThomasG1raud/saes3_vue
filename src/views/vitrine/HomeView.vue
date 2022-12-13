<template>
  <div class="home">
    <div id="div-imagePrincipal">
<!--      <img src="@/assets/chateauContruction.jpg" alt="image principale" id="imagePrincipal">-->
      <div>
        <div id="carre">
          <h1 id="title">PARC MÉDIÉVAL</h1>
        </div>
      </div>
    </div>
    <section>
      <div class="grid" id="grid">
        <CardActivityView :link-card="{path: '/prestataire/', hash:'activite'}" type="activite" image-card="activite.png" title-card="Activités"
                          text-card="Découvrez les anciennes méthodes de la  sculpture, de la forge ou encore de la caligraphie"/>
        <CardActivityView :link-card="{path: '/prestataire/', hash:'spectacle'}" type="spectacle" image-card="spectacle.png" title-card="Spectacles"
                          text-card="Assistez aux combats de preux chevaliers, ecoutez la musique des temps anciens ou bien encore venez découvrir la vie des habitants du Moyen-age"/>
        <CardActivityView :link-card="{path: '/prestataire/', hash:'restauration'}" type="restauration" image-card="boutique.png" title-card="Boutiques, restauration"
                          text-card="Prenez plaisir à découvrir la cuisine antique et ses saveurs authentique, ou offrez-vous un petit plaisir dans l'une de nos nombreuses boutiques"/>
      </div>
    </section>

    <MapView :height="540" :width="910" :zoomRatio="-1"/>
    <!--    <HelloWorld msg="Welcome to Your Vue.js App"/>-->
  </div>
</template>

<script>
// @ is an alias to /src
import MapView from "@/components/map/MapView";
import CardActivityView from "@/components/vitrine/CardActivityView";

export default {
  name: 'HomeView',
  components: {
    // HelloWorld,
    MapView,
    CardActivityView
  }
}
</script>

<style scoped>
.grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-row-gap: 50px;
  grid-column-gap: 50px;
  margin: 20px 10%;
}
#div-imagePrincipal {
  width: 100vw;
  height: 90vh;
  background: url("@/assets/chateauContruction.jpg") no-repeat;
  background-size: 100vw auto;
  overflow: hidden;
  display: flex;
  align-items: end;
}
#div-imagePrincipal>div {
  display: flex;
  margin: 0 auto;
}
#imagePrincipal {
  display: flex;
  margin: auto;
  width: 100vw;
  aspect-ratio:16/9;
}
#title {
  font-size: 10em;
  font-family: 'Pacifico', cursive;
}
#carre {
  display: flex;
  align-items: center;
  height: 500px;
  width: 900px;
  background-color: var(--very-very-light);
  border: 3px solid var(--very-very-dark);
  color: var(--very-very-dark);
  border-radius: 30px;
  opacity: 0.8;
}
</style>

