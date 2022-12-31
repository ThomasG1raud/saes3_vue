<template>
  <div class="home">
    <div class="imagePrincipal">
    </div>
    <div id="carre">
      <h1 id="title">PARC MÉDIÉVAL</h1>
    </div>
    <section>
      <div class="grid" id="grid">
        <CardActivityView :link-card="{path: '/liste_prestataire/', hash:'activite'}" type="activite" image-card="activite.png"
                          text-card="Découvrez les anciennes méthodes de la  sculpture, de la forge ou encore de la caligraphie"/>
        <CardActivityView :link-card="{path: '/liste_prestataire/', hash:'spectacle'}" type="spectacle" image-card="spectacle.png"
                          text-card="Assistez aux combats de preux chevaliers, ecoutez la musique des temps anciens ou bien encore venez découvrir la vie des habitants du Moyen-age"/>
        <CardActivityView :link-card="{path: '/liste_prestataire/', hash:'restauration'}" type="restauration" image-card="boutique.png"
                          text-card="Prenez plaisir à découvrir la cuisine antique et ses saveurs authentique, ou offrez-vous un petit plaisir dans l'une de nos nombreuses boutiques"/>
      </div>
    </section>

    <MapView :height="540" :width="910" :zoomRatio="-1"/>
  </div>
</template>

<script>
import MapView from "@/components/map/MapView";
import CardActivityView from "@/components/vitrine/CardActivityView";

export default {
  name: 'HomeView',
  components: {
    MapView,
    CardActivityView
  }
}
</script>

<style scoped>
@font-face {
  font-family: myFirstFont;
  src: url('@/assets/JackPirate.ttf');
}
.grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-row-gap: 50px;
  grid-column-gap: 50px;
  margin: 20px 10%;
}

.imagePrincipal {
  display: flex;
  justify-content: end;
  width: 100%;
  height: 830px;
  background-image: url("@/assets/imageVitrinePrincipal.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  margin-bottom: 150px;
}

#title {
  font-size: 80px;
  font-family: myFirstFont;
  rotate: -45deg;
  color: black;
}

#carre {
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 400px;
  width: 400px;
  background-color: rgba(200, 200, 200, 0.4);
  border: solid 3px var(--very-very-dark);
  border-radius: 10px;
  top: 200px;
  right: 16%;
  box-shadow: 5px 5px 3px var(--very-very-dark);
  rotate: 45deg;
}

</style>

