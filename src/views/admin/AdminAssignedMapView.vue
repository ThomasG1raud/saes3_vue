<template>
  <div id="racine">
    <div id="divForm">
      <div id="map">
        <MapView @value-changed="changeAssigner"
                 :height="540" :width="910" :zoom-bound="1.3"
                 :zoomRatio="-1" :base-url="'/admin/assigned'"
        ></MapView>
      </div>
    </div>
  </div>
</template>

<script>
import MapView from "@/components/map/MapView";
import {mapGetters, mapMutations} from "vuex";
import router from "@/router";

export default {
  name: "AdminAssignedMapView",
  props: {
    idPrestataire: Number
  },
  data: () => ({
    idStand: 0
  }),
  components: {
    MapView,
  },
  computed: {
    ...mapGetters(["getInfoPrestataireByIdStand", "getInfoPrestataireByIdPrestataire"]),
    curentPrestataire() {
      return this.getInfoPrestataireByIdStand(this.idStand);
    }
  },
  methods: {
    ...mapMutations(["setIdStand"]),
    changeAssigner(idStand) {
      this.idStand = idStand;
      let prestataire = this.curentPrestataire;
      if (!prestataire) {
        this.getInfoPrestataireByIdPrestataire(this.idPrestataire).idStand = idStand;
        router.push("/admin/map/"+idStand);
      }
      else if (confirm("Êtes vous sur de vouloir remplacer le préstataire : " + prestataire.name)) {
        prestataire.idStand = 0;
        this.getInfoPrestataireByIdPrestataire(this.idPrestataire).idStand = idStand;
        router.push("/admin/map/"+idStand);
      }
    }
  }
}
</script>

<style scoped>


#divForm {
  padding: 10px 0;
  display: flex;
  width: 100%;
}


#formulaire {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 30%;
  padding: 10px;
  background-color: var(--dark);
}

#map {
  display: flex;
  justify-content: start;
  align-items: center;
  width: 100%;
  height: 692px;
}

.namePrestataire {
  width: 500px;
  height: 50px;
  border: solid;
  margin-top: 10px;
  background-color: var(--dark);
  color: var(--very-very-light);
}

#listePrestataire {
  overflow: scroll;
  width: 100%;
}

p {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
}

select {
  --defined-color-primary: var(--dark);
  --defined-color-secondary: var(--light);
  border-style: solid;
}

select:hover {
  border-color: var(--light);
}

p.activite {
  background-color: var(--activite);
}

p.spectacle {
  background-color: var(--spectacle);
}

p.restauration {
  background-color: var(--restauration);
}

a, a:hover {
  text-decoration: none;
}

div.div-input {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 10px;
}

.v-alert {
  margin: 10px;
}
</style>