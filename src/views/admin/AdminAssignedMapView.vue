<template>
  <div id="racine">
    <div id="divForm">
      <div id="map">
        <MapView :height="700" :width="800" :zoomRatio="0"></MapView>
      </div>
    </div>
  </div>
</template>

<script>
import MapView from "@/components/map/MapView";
import {mapGetters} from "vuex"

export default {
  name: "AdminAssignedMapView",
  data: () => ({
    filterAssigner: "",
    filterCategory: ""
  }),
  computed: {
    ...mapGetters(['getAllPrestataire', 'getAllCategory']),
    research() {
      let prestataireFilter = this.getAllPrestataire;
      if (this.filterAssigner) {
        prestataireFilter = prestataireFilter.filter(prestataire => (prestataire.idStand !== 0) === (this.filterAssigner === "PrestataireAssigné"))
      }
      if (this.filterCategory) {
        prestataireFilter = prestataireFilter.filter(prestataire => (prestataire.type === this.filterCategory))
      }
      return prestataireFilter
    }
  },
  components: {
    MapView,
  },
  methods: {
    onChangeAssigner: function (evenement) {
      this.filterAssigner = evenement.target.value
    },
    onChangeCategory: function (evenement) {
      this.filterCategory = evenement.target.value
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

.namePrestataire{
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

select:hover{
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