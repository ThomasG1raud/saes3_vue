<template>
  <div id="card">
    <div id="divImage-info">
      <div id="divImage">
        <img src="../assets/prestataire.png">
      </div>
      <div id="divInfo">
        <div class="partie">
          <p> Prenom :</p>
          <p> Julien </p>
        </div>

        <hr>

        <div class="partie">
          <p> Nom de famille :</p>
          <p> Merveaux </p>
        </div>

        <hr>

        <div class="partie">
          <p> E-mail:</p>
          <p> Julien.Merveaux@hotmail.de </p>
        </div>

        <hr>

        <div class="partie">
          <p> Nom de votre stand : </p>
          <p> La bonne saucisse de michelle </p>
        </div>

        <hr>

        <div class="partie">
          <p> siren</p>
          <p> 17265301 </p>
        </div>
      </div>
    </div>
    <div class="rond" v-on:click="bool =!bool">
      <img class="fleche" src="../assets/keyboard_double_arrow_up_black.svg">
    </div>

    <div id="divService" v-if="bool">
      <p id="paragraphe">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "PrestataireProfilView",
  data: () => ({
    prestataire: {
      name: "Nom du prestataire",
      email: "email@exemple.fr",
      text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      imagePrestataire: "prestataire.png",
      imageStand: "stand.png"
    },
    bool:false
  })
}
</script>

<style scoped>
  #card {

    margin: 100px;
  }

  #divImage-info {
    display: flex;
    width: 100%;
    height: 50%;

    border-radius: 20px;
  }

  #divImage {
    aspect-ratio:1 ;
    height: 100%;
    border-radius: 20px;
    overflow: hidden;
    border:solid


  }

  #divInfo {
    display: flex;
    flex-wrap: wrap;
    width: 75%;
    margin-left: 5%;
    border-radius: 20px;
    border:solid

  }

  #divService {
    width: 100%;
    border-radius: 20px;
    border:solid;
    margin-top: 5%;
    text-align: start;
    padding: 20px;
    animation: 1s displayZoom;
  }
  img{
    width: 100%;
  }



  hr {
    width: 70%;
    margin-left: 0;
  }

  p {
    display: flex;
    justify-content: start;
    margin-right: 20px;
  }

  .rond {
    position: absolute;
    translate: 900px -50px;
    height: 100px;
    width: 100px;
    background-color: white;
    border:solid;
    border-radius: 50%;
  }

  .fleche{
    rotate: 180deg;
  }

  .partie {
    display: flex;
    width: 90%;
    margin: 20px;
  }

</style>