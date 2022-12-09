<template>
  <div id="PlusGrandDiv">
    <div  v-for="(c,i) in $store.state.allCategory" :key="i">
      <div id="categorie">
        <div class="entete">
          <p class="pCategorie">{{ c }}</p>
          <hr>
        </div>
      </div>
      <div id="grandDiv">
        <div v-for="(prestataire, index) in getAllActivite" :key="index">
          <VitrinePrestataireCardView :prestataire="prestataire"/>
        </div>
      </div>
    </div>

  </div>

</template>

<script>
import VitrinePrestataireCardView from "@/components/VitrinePrestataireCardView";
export default {
  name: "PrestataireView",
  data: () => ({
    filter: "",
  }),
  computed: {
    research() {
      return this.$store.state.allPrestataire.filter(prestataire => {
        if (prestataire.name.toLowerCase().includes(this.filter.toLowerCase())) return true
        if (prestataire.type.toLowerCase().startsWith(this.filter.toLowerCase())) return true
        return false
      });
    },
    getAllActivite() {return this.$store.state.allPrestataire.filter(prestataire => prestataire.type==="activite");},
    getAllSpectacle() {return this.$store.state.allPrestataire.filter(prestataire => prestataire.type==="spectacle");},
    getAllRestauration() {return this.$store.state.allPrestataire.filter(prestataire => prestataire.type==="restauration");}
  },
  components: {
    VitrinePrestataireCardView
  }
}
</script>

<style scoped>


/*#carre {*/
/*  width: 25%;*/
/*  height: 100%;*/
/*  border: solid white ;*/
/*  background: black;*/
/*  z-index: -10;*/
/*}*/



#grandDiv {
  display: flex;
  overflow: scroll;

}




.grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-column: auto;
  grid-row-gap: 50px;
  grid-column-gap: 50px;
  margin: 20px 10%;
}

input {
  display: flex;
  padding: 10px;
  border-radius: 10px;
  border: 2px solid var(--very-very-light);
  color: var(--dark);
  box-shadow: 0 0 1px;
  margin: 20px auto 30px auto;
}

input::placeholder {
  color: var(--dark);
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
  background: #333333;
  color: #cccccc;
  border-radius: 0 50px 50px 0;
}

.pCategorie {
  font-size: 50px;
  margin: 10px;
}

.entete {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
}

hr{
  height: 10px;
  width: 100%;
  background: white;
  margin-left:10px ;
}
</style>