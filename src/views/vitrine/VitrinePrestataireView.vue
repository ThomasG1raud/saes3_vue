<template>
  <div id="PlusGrandDiv">
    <div v-for="(category,i) in getAllCategory" :key="i">
      <div id="categorie">
        <div class="entete">
          <p class="pCategorie" :id="category">{{ category }}</p>
          <hr>
        </div>
      </div>
      <div id="grandDiv">
        <div v-for="(prestataire, index) in getAllPrestataire.filter(prestataire => prestataire.type===category)" :key="index">
          <VitrinePrestataireCardView :idPrestataire="prestataire.id"/>
        </div>
      </div>
    </div>
    <div id="scroll" onclick="window.scroll({top: 0,behavior: 'smooth'});"></div>
  </div>

</template>

<script>
import VitrinePrestataireCardView from "@/components/prestataire/VitrinePrestataireCardView";
import {mapGetters} from "vuex";

export default {
  name: "VitrinePrestataireView",
  data: () => ({
    filter: ""
  }),
  components: {
    VitrinePrestataireCardView
  },
  computed: {
    ...mapGetters(["getAllCategory", "getAllPrestataire"])
  }
}
</script>

<style scoped>

#grandDiv {
  display: flex;
  overflow: scroll;

}

#scroll {
  height: 64px;
  width: 64px;
  border-radius: 50%;
  background-image: url("@/assets/keyboard_double_arrow_up_white.svg");
  background-size: contain;
  display: flex;
  margin-left: auto;
  margin-right: 40px;
  translate: 0 32px;
  background-color: var(--dark);
}

#categorie {

  justify-content: start;
  align-items: center;
  margin-top: 20px;
  width: 90%;
  background: var(--very-dark);
  color: var(--very-very-light);
  border-radius: 0 50px 50px 0;
}

.pCategorie {
  font-size: 50px;
  margin: 10px;
  text-transform: capitalize;
}

.entete {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
}

hr {
  height: 10px;
  width: 100%;
  background: var(--very-very-light);
  margin-left: 10px;
}
</style>