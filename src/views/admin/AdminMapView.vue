<template>
  <div><!--      <MapView></MapView>-->
      <CardPrestataireForAdminView texte="lol" imagePrestataire="prestataire.png" imageStand="prestataire" type="Restauration" id="3" />
    </div>
</template>

<script>
// import MapView from "@/components/map/MapView";
import CardPrestataireForAdminView from "@/components/map/CardPrestataireForAdminView";
export default {
  name: "AdminMapView",
  components: {
    // MapView,
    CardPrestataireForAdminView
  },
}
</script>

<style scoped>


</style>