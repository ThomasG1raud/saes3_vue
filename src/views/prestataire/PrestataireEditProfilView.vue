<template>
  <div class="app">
    <v-form
        ref="form"
        v-model="valid"
        lazy-validation
    >
      <v-text-field
          v-model="nomStand"
          :rules="nameRules"
          label="Nom du stand"
          required
      ></v-text-field>

      <v-text-field
          v-model="email"
          :rules="emailRules"
          label="E-mail"
          required
      ></v-text-field>

      <v-textarea
          v-model="text"
          outlined
          filled
          auto-grow
      ></v-textarea>

      <v-select
          v-model="current_type_category"
          :items="all_type_category"
          :rules="[v => !!v || 'Item is required']"
          :menu-props="{ top: true, offsetY: true }"
          label="Category"
          required
      ></v-select>
      <v-btn
          :disabled="false /*!valid*/"
          color="var(--blue)"
          class="mr-4"
          @click="validate_edit"
      >
        Validate
      </v-btn>

      <v-btn
          color="var(--red)"
          class="mr-4"
          @click="resetForm"
      >
        Reset Form
      </v-btn>

      <v-btn
          color="var(--orange)"
          @click="cancelEdit"
      >
        Cancel
      </v-btn>
    </v-form>
    {{current_type_category}}
    {{all_type_category}}
  </div>
</template>
<!--      {{ curentPrestataire.type }}-->

<script>
import {mapGetters} from "vuex";
import router from "@/router";

export default {
  name: "PrestataireEditProfilView",
  props: {
    idPrestataire: Number
  },
  data: () => ({
    valid: false,
    all_type_category: [ "activite", "spectacle", "restauration", "test" ],
    current_type_category: "Activite",
    text: "",
    nomStand: "",
    type: "",
    email: "",
    password: "",
  }),
  created() {
    this.resetForm();
  },
  computed :{
    ...mapGetters(["getInfoPrestataireByIdPrestataire", "getAllCategory"]),
    curentPrestataire() {
      return this.getInfoPrestataireByIdPrestataire(this.idPrestataire)
    }
  },
  methods: {
    cancelEdit() {
      router.push("/prestataire/profil/"+this.idPrestataire)
    },
    resetForm() {
      // this.all_type_category = this.getAllCategory;
      const prestataire = this.getInfoPrestataireByIdPrestataire(this.idPrestataire);
      this.current_type_category = prestataire.type;
      this.text = prestataire.text;
      this.nomStand = prestataire.nomStand;
      this.type = prestataire.type;
      this.email = prestataire.email;
    },
    validate_edit() {

    },
    nameRules() {

    },
    emailRules() {

    }
  }
}
</script>

<style scoped>
.app {
  width: 50%;
  margin: 50px auto;
  box-shadow: 0 0 15px var(--dark);
  border-radius: 20px;
}
form {
  padding: 20px;
}
</style>