<template>
  <div id="racine">
    <div id="divForm">
      <div id="formulaire">
        <select @change="onChange($event)" name="prestataire" id="prestataire-select">
          <option value="">--Please choose an Category--</option>
          <option v-for="(category, index) in getAllCategory" :key="index" :value="category">{{category}}</option>
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
    ...mapGetters(['getAllPrestataire', 'getAllCategory']),
    research() {
      if (!this.filter.length) {
        return this.getAllPrestataire
      }
      return this.getAllPrestataire.filter(prestataire => (prestataire.type === this.filter))
    }
    //   if (this.filter === "") {
    //     console.log("a")
    //     return this.getAllPrestataire
    //   }
    //   else if (this.filter === "restauration"){
    //     console.log("a")
    //      return this.getAllPrestataire.filter(prestataire => (prestataire.type != undefined) === (this.filter === "restauration"))
    //   }
    //   else {
    //     console.log("a")
    //     this.getAllPrestataire.filter(prestataire => (prestataire.type != undefined) === (this.filter === "activite"))
    //   }
    //   return this.getAllPrestataire.filter(prestataire => (prestataire.type != undefined) === (this.filter === "spectacle"))
    // }
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
  padding: 10px 0;
  display: flex;
  width: 100%;
  boder: solid white;
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

</style>