<template>
  <div class="max">
    <div class="div-carte">
      <img src="../assets/carte.png" alt="carte" id="carte">
    </div>
    <div>
      <CardPrestataireView link-card="#" image-card="prestataire.png" title-card="Prestataire"
                        text-card="C'est le meilleur prestataire de la ville."/>
    </div>
  </div>
</template>

<script>
import CardPrestataireView from "@/components/CardPrestataireView";
export default {
  name: "MapView",
  components: {
    CardPrestataireView
  }

}
</script>

<style scoped>
  .max {
    width: 100%;
    display: flex;
  }
  .div-carte {
    width: 75%;
  }
  #carte {
    width: 100%;
    margin: 20px;
  }
</style>