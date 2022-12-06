<template>
  <div>
    <h1>
      Liste des prestataires
    </h1>
    <div class="grid">
      <VitrinePrestataireCardView v-for="(prestataire, index) in allPrestataire" :key="index" :prestataire="prestataire"/>
      <VitrinePrestataireCardView/>
    </div>
  </div>
</template>

<script>
import VitrinePrestataireCardView from "@/components/VitrinePrestataireCardView";
export default {
  name: "PrestataireView",
  data: () => ({
    allPrestataire: [
      {
        name: "Nom du prestataire",
        text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
        imagePrestataire: "prestataire.png",
        imageStand: "stand.png",
        type: "activite",
        id: 1
      },
      {
        name: "Nom du prestataire",
        text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
        imagePrestataire: "prestataire.png",
        imageStand: "stand.png",
        type: "restauration",
        id: 2
      },
      {
        name: "Nom du prestataire",
        text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
        imagePrestataire: "prestataire.png",
        imageStand: "stand.png",
        type: "restauration",
        id: 3
      },
      {
        name: "Nom du prestataire",
        text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
        imagePrestataire: "prestataire.png",
        imageStand: "stand.png",
        type: "spectacle",
        id: 4
      },
      {
        name: "Nom du prestataire",
        text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
        imagePrestataire: "prestataire.png",
        imageStand: "stand.png",
        type: "activite",
        id: 5
      }
    ]
  }),
  components: {
    VitrinePrestataireCardView
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
</style>