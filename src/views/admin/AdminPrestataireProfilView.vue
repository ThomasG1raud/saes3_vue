<template>
  <div id="card">
    <div id="divImage-info">
      <div id="divImage">
        <img :src="require('@/assets/'+curentPrestataire.imagePrestataire)" alt="image du prestataire">
      </div>
      <div id="divInfo">
        <div class="partie">
          <p> Nom :</p>
          <p class="text-capitalize"> {{ curentPrestataire.name }} </p>
        </div>

        <hr>

        <div class="partie">
          <p>
            Categorie :
          </p>
          <p class="text-capitalize">
            <router-link :to="'/liste_prestataire/#'+curentPrestataire.type">
              {{ curentPrestataire.type }}
            </router-link>
          </p>
        </div>

        <hr>

        <div class="partie" v-if="curentHoraire.length">
          <p> Horaire : </p>
          <router-link to="/calendrier">
            <p v-for="(horaire, index) in curentHoraire" :key="index">
              {{ horaire.start.substr(11, 5) }} - {{ horaire.end.substr(11, 5) }}
            </p>
          </router-link>
        </div>
        <hr v-if="curentHoraire.length">

        <div class="partie">
          <p> E-mail:</p>
          <p> {{ curentPrestataire.email }} </p>
        </div>

        <hr>

        <div class="partie">
          <p> Nom du stand : </p>
          <p class="text-capitalize">
            <router-link :to="'/map/'+curentPrestataire.idStand">
              {{ curentPrestataire.nomStand }}
            </router-link>
          </p>
        </div>

        <hr>

        <div class="partie">
          <p> siren</p>
          <p class="text-capitalize"> {{ curentPrestataire.siren }} </p>
        </div>
      </div>
    </div>
    <div class="rond" v-on:click="bool =!bool">
      <img class="fleche" src="@/assets/keyboard_double_arrow_up_black.svg">
    </div>
    <div class="btn-edit">
      <button class="btn btn-edit" @click="edit_profil">Edit</button>
    </div>

    <div id="divService" v-if="bool">
      <p id="paragraphe"> {{ curentPrestataire.text }} </p>
    </div>
  </div>
</template>

<script>
import {mapGetters} from "vuex";
import router from "@/router";
export default {
  name: "AdminPrestataireProfilView",
  methods: {
    edit_profil() {
      router.push("/prestataire/edit/"+this.idPrestataire)
    }
  },
  props: {
    idPrestataire: Number
  },
  data: () => ({
    bool:false
  }),
  computed :{
    ...mapGetters(["getInfoPrestataireByIdPrestataire", "getHoraireByIdPrestataire"]),
    curentPrestataire() {
      return this.getInfoPrestataireByIdPrestataire(this.idPrestataire)
    },
    curentHoraire() {
      return this.getHoraireByIdPrestataire(this.idPrestataire)
    }
  }
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
    height: 1px;
    margin-left: 5px;
    background-color: var(--very-very-dark);
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
    background-color: var(--background);
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
  .text-capitalize {
    text-transform: capitalize;
  }
  div.btn-edit {
    position: absolute;
    translate: 1050px -25px;
    height: 100px;
    width: 100px;
  }
  button.btn-edit {
    height: 50px;
    width: 100px;
  }
</style>