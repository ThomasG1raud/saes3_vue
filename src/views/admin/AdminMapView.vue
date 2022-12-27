<template>
  <div id="racine">
    <div id="divForm">
      <div id="formulaire">
        <div class="div-input">
          <select @change="onChangeAssigner($event)" name="assigner">
            <option value="">--Please choose an option--</option>
            <option value="PrestataireAssigné">Voir les prestataires assignés</option>
            <option value="PrestataireNonAssigné">Assigner un prestataire</option>
          </select>

          <select @change="onChangeCategory($event)" name="category">
            <option value="">--Please choose an Category--</option>
            <option v-for="(category, index) in getAllCategory" :key="index" :value="category">{{category}}</option>
          </select>
        </div>

        <div id="listePrestataire">
          <v-alert
              v-if="!research.length"
              outlined
              text
              color="var(--orange)"
              type="warning"
          >Aucun prestataire n'as été touver</v-alert>
          <div v-for="(prestataire,index) in research" :key="index">
            <router-link :to="'/admin/map/'+prestataire.idStand">
              <div class="namePrestataire">
                <p :class="prestataire.type">
                  <span>{{ prestataire.name }}</span>, {{ prestataire.nomStand }}
                </p>
              </div>
            </router-link>
          </div>
        </div>

      </div>
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
  name: "AdminMapView",
  data: () => ({
    filterAssigner: "",
    filterCategory: ""
  }),
  computed: {
    ...mapGetters(['getAllPrestataire', 'getAllCategory']),
    research() {
      let prestataireFilter = this.getAllPrestataire;
      if (this.filterAssigner) {
        prestataireFilter = prestataireFilter.filter(prestataire => (prestataire.idStand !== undefined) === (this.filterAssigner === "PrestataireAssigné"))
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
a {
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