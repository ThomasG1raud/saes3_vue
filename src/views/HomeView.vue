<template>
  <div class="home">
    <div class="grid">
      <CardActivityView link-card="#" image-card="activite.png" title-card="Activités" text-card="Découvrez les anciennes méthodes de la  sculpture, de la forge ou encore de la caLligraphie"/>
      <CardActivityView link-card="#" image-card="boutique.png" title-card="Spectacles" text-card="Assistez aux combats de preux chevaliers, ecoutez la musique des temps ancienS ou bien encore venez découvrir la vie des habitants du Moyen-age"/>
      <CardActivityView link-card="#" image-card="spectacle.png" title-card="Boutiques, restaurations" text-card="prenez plaisir à découvrir la cuisine antique et ses saveurs authentique, ou offrez-vous un petit plaisir dans l'une de nos nombreuses boutiques"/>
    </div>
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
    margin-left: 10%;
    margin-right: 10%;
  }
</style>