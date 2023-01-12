<template>
  <div class="app">
    <v-form
        ref="form"
        v-model="valid"
        lazy-validation
    >
      <v-text-field
          v-model="nomPrestataire"
          :rules="nameRules"
          label="Nom du prestataire"
          required
      ></v-text-field>

      <v-text-field
          v-model="nomStand"
          :rules="nameRules"
          label="Nom du stand"
          required
      ></v-text-field>

      <v-text-field
          v-model="siren"
          :rules="sirenRules"
          type="number"
          label="Numéro de siren"
          required
      ></v-text-field>

      <v-textarea
          v-model="text"
          :rules="textRules"
          counter
          outlined
          filled
          auto-grow
      ></v-textarea>

      <v-radio-group v-model="type">
        <v-radio
            v-for="category in getAllCategory"
            :color="`var(--${category})`"
            :key="category"
            :label="`${category}`"
            :value="category"
        ></v-radio>
      </v-radio-group>

      <v-btn
          :disabled="!valid || isValid"
          color="var(--blue)"
          class="mr-4"
          @click="validate_edit"
      >
        Validate
      </v-btn>

      <v-btn
          :disabled="isValid"
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
  </div>
</template>

<script>
import {mapGetters} from "vuex";
import router from "@/router";

export default {
  name: "AdminPrestataireEditProfilView",
  props: {
    idPrestataire: Number
  },
  data: () => ({
    valid: true,

    nomPrestataire: "",
    siren: "",
    text: "",
    nomStand: "",
    type: "",
    email: "",

    sirenRules: [
      v => !!v || 'Siren is required',
      v => (v && v.length === 9) || 'Siren must be 9 characters',
    ],
    nameRules: [
      v => !!v || 'Name is required',
      v => /^[^0-9]+$/.test(v) || 'The name must not contain a number',
    ],
    textRules: [
      v => !!v || 'Text is required',
      v => (v && v.length >= 20) || 'The text must be at least 20 characters',
    ],
  }),
  created() {
    this.resetForm();
  },
  computed :{
    ...mapGetters(["getInfoPrestataireByIdPrestataire", "getAllCategory"]),
    curentPrestataire() {
      return this.getInfoPrestataireByIdPrestataire(this.idPrestataire)
    },
    isValid() {
      const prestataire = this.getInfoPrestataireByIdPrestataire(this.idPrestataire);
      return this.nomPrestataire === prestataire.name
          && this.text === prestataire.text
          && this.nomStand === prestataire.nomStand
          && this.type === prestataire.type
          && this.email === prestataire.email
          && this.siren === prestataire.siren
    }
  },
  methods: {
    cancelEdit() {
      router.push("/admin/prestataire/"+this.idPrestataire)
    },
    resetForm() {
      const prestataire = this.getInfoPrestataireByIdPrestataire(this.idPrestataire);
      this.nomPrestataire = prestataire.name;
      this.text = prestataire.text;
      this.nomStand = prestataire.nomStand;
      this.type = prestataire.type;
      this.email = prestataire.email;
      this.siren = prestataire.siren;
    },
    validate_edit() {
      let prestataire = this.getInfoPrestataireByIdPrestataire(this.idPrestataire);
      prestataire.siren = this.siren;
      prestataire.text = this.text;
      prestataire.nomStand = this.nomStand;
      prestataire.type = this.type;
      prestataire.email = this.email;
      prestataire.name = this.nomPrestataire;
      router.push("/admin/prestataire/"+this.idPrestataire);
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
button {
  margin: 0 5px;
}
.d-none {
  display: none;
}
</style>