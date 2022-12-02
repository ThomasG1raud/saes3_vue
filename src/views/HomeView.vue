<template>
  <div class="home">
    <div class="imagePrincipal">
      <img class="imgPrincipalVitrine" src="../assets/imagePrincipalVitrine.jpg">
    </div>
    <MapView/>

    <div class="grid">
      <CardActivityView image-card="logo.png" title-card="Activités"
                        text-card="Découvrez les anciennes méthodes de la  sculpture, de la forge ou encore de la caLligraphie"/>
      <CardActivityView image-card="logo.png" title-card="Spectacles"
                        text-card="Assistez aux combats de preux chevaliers, ecoutez la musique des temps ancienS ou bien encore venez découvrir la vie des habitants du Moyen-age"/>
      <CardActivityView image-card="logo.png" title-card="Boutiques, restaurations"
                        text-card="prenez plaisir à découvrir la cuisine antique et ses saveurs authentique, ou offrez-vous un petit plaisir dans l'une de nos nombreuses boutiques"/>
    </div>
    <hr style="margin-top: 300px">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import MapView from "@/components/MapView";
import CardActivityView from "@/components/CardActivityView";

export default {
  name: 'HomeView',
  components: {
    HelloWorld,
    MapView,
    CardActivityView
  }
}
</script>

<style>

  imagePrincipal {
  width: 100%;
  }
  .imgPrincipalVitrine {
    width: 100%;
    height: 50%;
  }

.grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
}
</style>