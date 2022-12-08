<template>
  <div>
    <h1>
      Liste des prestataires
    </h1>
    <input type="search" v-model="filter" value="">
    <div class="grid">
      <div v-for="(prestataire, index) in research" :key="index">
        <VitrinePrestataireCardView :prestataire="prestataire"/>
      </div>
    </div>
    <div v-if="!research.length"><h1>Aucun prestataire n'as été trouver</h1></div>
    <div id="scroll" onclick="window.scroll({top: 0,behavior: 'smooth'});"></div>
  </div>
</template>

<script>
import VitrinePrestataireCardView from "@/components/VitrinePrestataireCardView";
export default {
  name: "PrestataireView",
  data: () => ({
    filter: ""
  }),
  computed: {
    research() {
      return this.$store.state.allPrestataire.filter(prestataire => {
        if (prestataire.name.toLowerCase().includes(this.filter.toLowerCase())) return true
        if (prestataire.type.toLowerCase().startsWith(this.filter.toLowerCase())) return true
        return false
      });
    }
  },
  components: {
    VitrinePrestataireCardView
  }
}
</script>

<style scoped>
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
</style>