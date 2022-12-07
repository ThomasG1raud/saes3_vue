<template>
  <div id="card">
      <div id="divImage-info">
        <div id="divImage">
          <img src="../assets/prestataire.png">
        </div>
        <div id="divInfo">
          <div class="section">
            <div class="partie">
              <div class="reponse">
                <p> Prenom :</p>
                <p> Julien</p>
              </div>
              <hr>
            </div>
            <div class="partie">
              <div class="reponse">
                <p> nom de votre stand :</p>
                <p> Les mont d'Or de michel</p>
              </div>
              <hr>
            </div>
          </div>
          <div class="section">
            <div class ="partie">
              <div class="reponse">
                <p> Nom de famille :</p>
                <p> Merveaux</p>
              </div>
              <hr>

            </div>
          </div>
          <div class="section">
            <div class="partie">
              <div class="reponse">
                <p> E-mail :</p>
                <p> Julien.merveaux@hotmail.fr</p>
              </div>


            </div>
            <div class="partie">
              <div class="reponse">
                <p>Numéro de siren :</p>
                <p> 2467354253</p>
              </div>


            </div>
          </div>
        </div>
      </div>
      <div id = "divService"></div>
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
    }
  })
}
</script>

<style scoped>
  #card {
    height: 500px;
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
    height: 36%;
    border-radius: 20px;
    border:solid;
    margin-top: 5%;
  }

  img{
    width: 100%;
  }

  .section {
    display: flex;
    width: 100%;
    margin: 10px;

  }

  .partie {
    display: flex;
    justify-content: start;
    align-items: center;
    flex-direction: column;
    height: 100%;
    width: 50%;
    margin-left: 10px;
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

  .reponse {
    display: flex;
    width: 100%;
  }




</style>