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

      <v-text-field
          :class="isValid ? 'd-none': ''"
          v-model="password"
          :rules="passwordRules"
          label="Password"
          required
          :type="showPassword ? 'text' : 'password'"
          :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
          @click:append="showPassword = !showPassword"
      ></v-text-field>

      <v-alert
          v-if="isWrong"
          outlined
          text
          color="var(--red)"
          type="error"
      >
        Wrong password
      </v-alert>

      <v-btn
          :disabled="!valid || isValid || !password"
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
  name: "PrestataireEditProfilView",
  props: {
    idPrestataire: Number
  },
  data: () => ({
    valid: true,
    showPassword: false,
    isWrong: false,
    previousEmail: "",

    text: "",
    nomStand: "",
    type: "",
    email: "",
    password: "",

    nameRules: [
      v => !!v || 'Name is required',
      v => /^[^0-9]+$/.test(v) || 'The name must not contain a number',
    ],
    emailRules: [
      v => !!v || 'E-mail is required',
      v => /.+@.+\..+/.test(v) || 'E-mail must be valid',
    ],
    textRules: [
      v => !!v || 'Text is required',
      v => (v && v.length >= 20) || 'The text must be at least 20 characters',
    ],
    passwordRules: [
      v => !!v || 'Password is required',
    ]
  }),
  created() {
    this.emailRules.push(v => this.previousEmail === v || !this.isAlreadyAnAccound(v) || "Cette email est déjà utilisé",)
    this.resetForm();
  },
  computed :{
    ...mapGetters(["getInfoPrestataireByIdPrestataire", "getAllCategory", "isCorectPassword", "isAlreadyAnAccound"]),
    curentPrestataire() {
      return this.getInfoPrestataireByIdPrestataire(this.idPrestataire)
    },
    isValid() {
      const prestataire = this.getInfoPrestataireByIdPrestataire(this.idPrestataire);
      return this.text === prestataire.text
          && this.nomStand === prestataire.nomStand
          && this.type === prestataire.type
          && this.email === prestataire.email
    },
    isAlreadyAnEmail() {
      if (!this.email.length) return "E-mail is required";
      if (/.+@.+\..+/.test(this.email)) return "E-mail must be valid";
      if (this.previousEmail === this.email || !this.isAlreadyAnAccound(this.email)) return "Cette email est déjà utilisé";
      return true;
    }
  },
  methods: {
    cancelEdit() {
      router.push("/prestataire/profil/"+this.idPrestataire)
    },
    resetForm() {
      const prestataire = this.getInfoPrestataireByIdPrestataire(this.idPrestataire);
      this.text = prestataire.text;
      this.nomStand = prestataire.nomStand;
      this.type = prestataire.type;
      this.email = prestataire.email;
      this.previousEmail = prestataire.email;
    },
    validate_edit() {
      if (this.isCorectPassword(this.idPrestataire, this.password)) {
        let prestataire = this.getInfoPrestataireByIdPrestataire(this.idPrestataire);
        prestataire.text = this.text;
        prestataire.nomStand = this.nomStand;
        prestataire.type = this.type;
        prestataire.email = this.email;
        router.push("/prestataire/profil/"+this.idPrestataire);
      } else {
        this.isWrong = true
        setTimeout(() => {this.isWrong=false}, 3000);
      }
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