<template>
  <div class="home">
    <div class="imagePrincipal">
    </div>
    <div id="carre">
      <h1 id="title">
        Le royaume oublié
      </h1>
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

    <div class="centerMap">
      <MapView :height="540" :width="910" :zoomRatio="-1" :base-url="''" :zoomBound="1.8"/>
    </div>
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
  /*height: 830px;*/
  height: 100vh;
  background-image: url("@/assets/imageVitrinePrincipal.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  margin-bottom: 150px;
}

#title {
  font-size: 80px;
  font-family: myFirstFont, Arial sans-serif;
  color: black;
  transform: rotate(-45deg) translateY(25px);
  /*translate: 20px;*/
  /*rotate: -45deg;*/
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
.centerMap {
  display: flex;
}
.centerMap > div {
  margin: 0 auto;
}
</style>

