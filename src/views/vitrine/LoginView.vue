<template>
  <div id="bigDiv">

    <div id="cardLeft">
      <img src="@/assets/imageVitrinePrincipal.jpg" alt="image vitrine">
    </div>

<!--    <div id="rond">-->
<!--      <p id="fleche">⇺</p>-->
<!--    </div>-->


    <div id="cardRight">
      <h1>Login</h1>
      <form action="/" method="post" id="form-register" @submit.prevent="onsubmit">
        <div class="div-form">
          <label for="email">Email : </label>
          <input type="email" name="email" id="email" required placeholder="Email" v-model="email">
        </div>
        <div class="div-form">
          <label for="password">Mot de passe : </label>
          <input type="password" name="password" id="password" required placeholder="Mot de passe" v-model="password">
        </div>
        <p>
          Toujours pas de compte ?
          <router-link to="/register">S'inscrire</router-link>
        </p>
        <div class="div-form">
          <v-alert
            v-if="isWrong"
            outlined
            text
            color="var(--red)"
            type="error"
          >
            Email ou mot de passe incorrect
          </v-alert>
          <input class="btn" type="submit" value="Se connecter" v-else>
<!--          <input class="btn" type="submit" value="Se connecter">-->
        </div>
      </form>
    </div>

  </div>
</template>

<script>
import router from "@/router";
import {mapGetters, mapMutations} from "vuex";

export default {
  name: "RegisterView",
  data: () => ({
    isWrong: false,
    email: "",
    password: ""
  }),
  computed: {
    ...mapGetters(["getIDPrestataireWithEmail", "getIsAdmin"])
  },
  methods: {
    ...mapMutations(["setAccountId", "setAccountType"]),
    onsubmit() {
      const prestaire = this.getIDPrestataireWithEmail(this.email, this.password);
      if (!prestaire) {
        const admin = this.getIsAdmin(this.email, this.password)
        if (admin) {
          this.setAccountId(admin.id);
          this.setAccountType(2);
          router.push("/admin");
        } else {
          this.isWrong = true
          setTimeout(() => {this.isWrong=false}, 3000);
        }
      } else {
        const id = prestaire.id;
        this.setAccountId(id)
        this.setAccountType(1)
        router.push("/prestataire")
      }
    }
  }
}
</script>

<style scoped>
#cardRight {
  display: grid;
  border-radius: 0 30px 30px 0;
}

#cardLeft {
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 30px 0 0 30px;
  overflow: hidden;
}

#cardLeft, #cardRight {
  background: none;
  box-shadow: 0 0 10px var(--dark);
  height: 500px;
  width: 30%;
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

#bigDiv {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 150px;
}

img {
  height: 100%;
  border-radius: 30px;
}

#rond {
  position: absolute;
  height: 50px;
  width: 50px;
  border-radius: 100%;
  background-color: var(--very-very-light);
}
.v-alert {
  margin-top: 10px;
}
</style>