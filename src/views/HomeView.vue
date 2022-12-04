<template>
  <div class="home">
    <div class="imagePrincipal">
    </div>

    <section>
      <div class="grid" id="grid">
        <CardActivityView link-card="#grid" image-card="activite.png" title-card="Activités"
                          text-card="Découvrez les anciennes méthodes de la  sculpture, de la forge ou encore de la caLligraphie"/>
        <CardActivityView link-card="/" image-card="spectacle.png" title-card="Spectacles"
                          text-card="Assistez aux combats de preux chevaliers, ecoutez la musique des temps ancienS ou bien encore venez découvrir la vie des habitants du Moyen-age"/>
        <CardActivityView link-card="/" image-card="boutique.png" title-card="Boutiques, restaurations"
                          text-card="prenez plaisir à découvrir la cuisine antique et ses saveurs authentique, ou offrez-vous un petit plaisir dans l'une de nos nombreuses boutiques"/>
      </div>
    </section>

    <MapView/>
    <!--    <HelloWorld msg="Welcome to Your Vue.js App"/>-->
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
import MapView from "@/components/MapView";
import CardActivityView from "@/components/CardActivityView";

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
  display: flex;
  height: auto;
  justify-content: end;
  width: 100vw;
  aspect-ratio:16/9;
  background-image: url("../assets/imagePrincipalVitrine.jpg");
  background-repeat:no-repeat;
  background-size: contain;
}

</style>