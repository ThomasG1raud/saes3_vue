<template>
  <div class="home">
    <div class="imagePrincipal">
    </div>
    <div id="carre">
      <h1 id="title">PARC MÉDIÉVAL</h1>

    </div>
    <section>
      <div class="grid" id="grid">
        <CardActivityView link-card="/prestataire/#activite" type="activite" image-card="activite.png" title-card="Activités"
                          text-card="Découvrez les anciennes méthodes de la  sculpture, de la forge ou encore de la caligraphie"/>
        <CardActivityView link-card="/prestataire/#spectacle" type="spectacle" image-card="spectacle.png" title-card="Spectacles"
                          text-card="Assistez aux combats de preux chevaliers, ecoutez la musique des temps anciens ou bien encore venez découvrir la vie des habitants du Moyen-age"/>
        <CardActivityView link-card="/prestataire/#restauration" type="restauration" image-card="boutique.png" title-card="Boutiques, restauration"
                          text-card="Prenez plaisir à découvrir la cuisine antique et ses saveurs authentique, ou offrez-vous un petit plaisir dans l'une de nos nombreuses boutiques"/>
      </div>
    </section>

    <MapView/>
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
.imagePrincipal {
  position: static;
  display: flex;
  height: auto;
  justify-content: end;
  width: 100vw;
  aspect-ratio:16/9;
  background-image: url("@/assets/chateauContruction.jpg");
  background-repeat:no-repeat;
  background-size: contain;
}
#title {
  font-size: 10em;
  font-family: 'Pacifico', cursive;


}

#carre {
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 443px;
  width: 900px;
  background-color: var(--very-very-light);
  border: solid ;
  border-radius: 30px;
  top: 700px;
  right: 470px;
  opacity: 0.8;
}
</style>

