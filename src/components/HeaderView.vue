<template>
  <header>
    <nav>
      <div>
        <p>id:{{getAccountId}}</p>
        <p>connected:{{getConnected}}</p>
      </div>
      <div class="item">
        <select id="connected-selected">
          <option value="0" @click="logout" :selected="getConnected===0">Vitrine</option>
          <option value="1" @click="loginPrestataire" :selected="getConnected===1">Prestataire</option>
          <option value="2" @click="loginAdmin" :selected="getConnected===2">Admin</option>
        </select>
      </div>
<!--      Login with prestataire-->
      <div class="div-nav" v-if="getConnected === 1">
        <router-link class="item" to="/">
          <img src="@/assets/logo_sae_white.png" alt="logo_sae_white" id="logo_navbar">
        </router-link>
        <router-link class="item" :to="'/prestataire/profil/'+getAccountId">Profil</router-link>
        <router-link class="item" :to="'/prestataire/calendrier/'+getAccountId">Calendrier</router-link>
        <router-link class="item" to="/prestataire/statistique">Statistique</router-link>
        <router-link class="item" :to="'/map/'+getStandId(getAccountId)">Map</router-link>
        <div class="item">
          <button class="btn" @click="logout">Se déconnecter</button>
        </div>
      </div>
<!--      Login with admin-->
      <div class="div-nav" v-else-if="getConnected === 2">
        <router-link class="item" to="/admin">
          <img src="@/assets/logo_sae_white.png" alt="logo_sae_white" id="logo_navbar">
        </router-link>
        <router-link class="item" to="/admin/calendrier">Calendrier</router-link>
        <router-link class="item" to="/admin/guestbook">Livre d'or</router-link>
        <router-link class="item" to="/admin/prestataire">Prestataire</router-link>
        <router-link class="item" to="/admin/map">Map</router-link>
        <div class="item">
          <button class="btn" @click="logout">Se déconnecter</button>
        </div>
      </div>
<!--      No login-->
      <div class="div-nav" v-else>
        <router-link class="item" to="/">
          <img src="@/assets/logo_sae_white.png" alt="logo_sae_white" id="logo_navbar">
        </router-link>
        <router-link class="item" to="/">Accueil</router-link>
        <router-link class="item" to="/calendrier">Calendrier</router-link>
        <router-link class="item" to="/liste_prestataire">Prestataire</router-link>
        <router-link class="item" to="/map">Map</router-link>
        <div class="item">
          <router-link to="/login">
            <button class="btn">Se connecter</button>
          </router-link>
          <router-link to="/register">
            <button class="btn">Créer un compte</button>
          </router-link>
        </div>
      </div>
    </nav>
  </header>
</template>

<script>
import {mapGetters, mapMutations} from "vuex";
import router from "@/router";

export default {
  name: "HeaderView",
  computed :{
    ...mapGetters(["getConnected", "getAccountId", "getStandId"]),
  },
  methods: {
    ...mapMutations(["setAccountId", "setAccountType"]),
    logout() {
      this.setAccountId(0);
      this.setAccountType(0);
      router.push("/");
    },
    loginPrestataire() {
      this.setAccountId(1);
      this.setAccountType(1);
      router.push("/prestataire");
    },
    loginAdmin() {
      this.setAccountId(99);
      this.setAccountType(2);
      router.push("/admin");
    }
  }
}
</script>

<style scoped>
  header {
    width: 100%;
    position: sticky;
    top: 0;
    z-index: 1001;
  }
  nav, .div-nav {
    padding: 10px;
    background-color: var(--dark);
    display: flex;
  }
  .div-nav {
    width: 100%;
  }
  nav, .div-nav > * {
    color: var(--very-very-light);
    font-size: x-large;
  }

  #logo_navbar {
    height: 64px;
    width: 64px;
  }
  button, #connected-selected{
    --defined-color-primary: var(--very-dark);
    --defined-color-secondary: var(--very-very-light);
  }
  button:hover, #connected-selected:hover {
    border-color: var(--very-very-light);
  }
  div.item {
    display: flex;
    align-items: center;
  }
  .item {
    margin: auto 50px;
  }
  .item:first-child {
    margin-left: 0;
    margin-right: auto;
  }
  .item:last-child {
    margin-right: 50px;
  }
  .item:last-child > a {
    margin-left: 10px;
  }
  nav a, button {
    font-weight: bold;
  }
</style>