<template>
  <div id="racine">
    <div id="divForm">
      <div id="formulaire">
        <select @change="onChange($event)" name="prestataire" id="prestataire-select">
          <option value="">--Please choose an option--</option>
          <option value="PrestataireAssigné">voir les prestataires assignés</option>
          <option value="addPrestataire">Assigner un prestataire</option>
        </select>
        <div id="listePrestataire">
          <div v-for="(prestataire,index) in research" :key="index">
            <div class="namePrestataire">
              <p> {{ prestataire.name }}</p>
            </div>
          </div>
        </div>

      </div>
      <div id="map">
        <MapView></MapView>
      </div>
    </div>
  </div>
</template>

<script>
import MapView from "@/components/map/MapView";
// import CardPrestataireForAdminView from "@/components/map/CardPrestataireForAdminView";
import {mapGetters} from "vuex"

export default {
  name: "AdminMapView",
  data: () => ({
    filter: "",
  }),
  computed: {
    ...mapGetters(['getAllPrestataire']),
    research() {
      if (this.filter === "") {
        return this.getAllPrestataire
      }
      return this.getAllPrestataire.filter(prestataire => (prestataire.idStand != undefined) === (this.filter === "PrestataireAssigné"))
    }
  },
  components: {
    MapView,
    // CardPrestataireForAdminView
  },
  methods: {
    onChange: function (evenement) {
      this.filter = evenement.target.value
    }
  }
}
</script>

<style scoped>




#divForm {
  display: flex;
  width: 100%;
  height: 70%;
  boder: solid white;
}


#formulaire {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 30%;
  height: 100%;
  border: solid;
  background-color: var(--very-dark);
}

#map {
  display: flex;
  justify-content: start;
  align-items: center;
  width: 100%;
  height: 692px;
  border: solid;
}

.namePrestataire{
  width: 500px;
  border: solid;
  margin-top: 10px;
  background-color: var(--very-very-dark);
  color: var(--very-very-light);
}
#listePrestataire {
  overflow: scroll;
}

</style>