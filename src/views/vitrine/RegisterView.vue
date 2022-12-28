<template>
  <div id="card">
    <h1>Créer un compte</h1>
    <form action="/" method="post" id="form-register" @submit.prevent="onsubmit">
      <div class="div-form">
        <label for="lastname">Nom : </label>
        <input type="text" name="lastname" id="lastname" required placeholder="Nom" v-model="lastname">
      </div>
      <div class="div-form">
        <label for="firstname">Prénom : </label>
        <input type="text" name="firstname" id="firstname" required placeholder="Prénom" v-model="firstname">
      </div>
      <div class="div-form">
        <label for="email">Email : </label>
        <input type="email" name="email" id="email" required placeholder="Email" v-model="email">
      </div>
      <div class="div-form">
        <label for="password">Mot de passe : </label>
        <input type="password" name="password" id="password" required placeholder="Mot de passe" v-model="password">
      </div>
      <div class="div-form">
        <label for="confirm-password">Confirmer le mot de passe : </label>
        <input type="password" name="confirm-password" id="confirm-password" required
               placeholder="Confirmer le mot de passe" v-model="confirmPassword">
      </div>
      <p>
        Déjà un compte ?
        <router-link to="/login">Connexion</router-link>
      </p>
      <div class="div-form">
        <v-alert
            v-if="isWrong"
            outlined
            text
            color="var(--red)"
            type="error"
        >
          {{ errorRegister }}
        </v-alert>
        <input type="submit" value="Créer mon compte" v-else>
      </div>
    </form>
  </div>
</template>

<script>
import {mapActions, mapGetters} from "vuex";
import router from "@/router";

export default {
  name: "RegisterView",
  data: () => ({
    isWrong: false,
    errorRegister: "Error register",
    lastname: "",
    firstname: "",
    email: "",
    password: "",
    confirmPassword: ""
  }),
  computed: {
    ...mapGetters(["isAlreadyAnAccound", "getAllPrestataire", "getLastInsertId"])
  },
  methods: {
    ...mapActions(["createPrestataire"]),
    alertPopUp(errorText) {
      this.errorRegister = errorText;
      this.isWrong = true
      setTimeout(() => {this.isWrong=false}, 3000);
    },
    onsubmit() {
      if (this.password !== this.confirmPassword) {
        this.alertPopUp("Le mot de passe doit être identique");
        return;
      }
      if (this.isAlreadyAnAccound(this.email)) {
        this.alertPopUp("C'est déjà un compte existant");
        return;
      }
      const prestataire = {
        lastname: this.lastname,
        firstname: this.firstname,
        email: this.email,
        password: this.password
      }
      this.createPrestataire(prestataire);
      router.push("/prestataire");
    }
  }
}
</script>

<style scoped>
#card {
  max-width: 600px;
  display: grid;
  margin: 40px auto;
  background: none;
  box-shadow: 0 0 10px var(--dark);
  border-radius: 30px;
}

#form-register {
  display: flex;
  flex-direction: column;
}

.div-form {
  margin: 0 auto;
  width: fit-content;
}

input {
  display: block;
  padding: 10px;
  border-radius: 10px;
  border: 2px solid var(--very-very-light);
  color: var(--dark);
  box-shadow: 0 0 1px;
  margin-bottom: 20px;
  margin-top: 10px;
}

input::placeholder {
  color: var(--dark);
}

input[type=submit] {
  background-color: var(--very-very-light);
  color: var(--blue);
  border-color: var(--blue);
  border-radius: 25px;
  padding: 10px;
}

input[type=submit]:hover {
  background-color: var(--blue);
  color: var(--very-very-light);
  border-color: var(--blue);
  border-radius: 25px;
  padding: 10px;
}

label {
  display: block;
  text-align: left;
}
.v-alert {
  margin-top: 10px;
}
</style>