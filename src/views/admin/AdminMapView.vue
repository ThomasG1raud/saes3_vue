<template>
  <div>
    <!--      <MapView/>-->
    <router-view/>
<!--    <CardPrestataireForAdminView :prestataire="getInfoPrestataire(1)"/>-->
  </div>
</template>

<script>
// import MapView from "@/components/map/MapView";
// import CardPrestataireForAdminView from "@/components/map/CardPrestataireForAdminView";
// import {mapGetters} from "vuex"

export default {
  name: "AdminMapView",
  // computed:{
  //   ...mapGetters(['getInfoPrestataire']),
  // },
components: {
  // MapView,
  // CardPrestataireForAdminView
}
,
}
</script>

<style scoped>


</style>