<template>
  <header>
    <nav>
      <div class="item">
        <select id="connected-selected">
          <option value="0" @click="$store.state.connected = 0">Vitrine</option>
          <option value="1" @click="$store.state.connected = 1">Prestataire</option>
          <option value="2" @click="$store.state.connected = 2">Admin</option>
        </select>
      </div>
<!--      Login with prestataire-->
      <div class="div-nav" v-if="$store.state.connected === 1">
        <router-link class="item" to="/">
          <img src="@/assets/logo_sae_white.png" alt="logo_sae_black" id="logo_navbar">
        </router-link>
        <router-link class="item" to="/prestataire/profil">Profil</router-link>
        <router-link class="item" to="/prestataire/statistique">Statistique</router-link>
        <router-link class="item" to="/map">Map</router-link>
        <div class="item">
          <router-link to="/">
            <button>Se déconnecter</button>
          </router-link>
        </div>
      </div>
<!--      Login with admin-->
      <div class="div-nav" v-else-if="$store.state.connected === 2">
        <router-link class="item" to="/">
          <img src="@/assets/logo_sae_white.png" alt="logo_sae_black" id="logo_navbar">
        </router-link>
        <router-link class="item" to="/admin/stand">Stand</router-link>
        <router-link class="item" to="/admin/prestataire">Prestataire</router-link>
        <router-link class="item" to="/admin/map">Map</router-link>
        <div class="item">
          <router-link to="/">
            <button>Se déconnecter</button>
          </router-link>
        </div>
      </div>
<!--      No login-->
      <div class="div-nav" v-else>
        <router-link class="item" to="/">
          <img src="@/assets/logo_sae_white.png" alt="logo_sae_black" id="logo_navbar">
        </router-link>
        <router-link class="item" to="/">Accueil</router-link>
        <router-link class="item" to="/prestataire">Prestataire</router-link>
        <router-link class="item" to="/map">Map</router-link>
        <div class="item">
          <router-link to="/login">
            <button>Se connecter</button>
          </router-link>
          <router-link to="/register">
            <button>Créer un compte</button>
          </router-link>
        </div>
      </div>
    </nav>
  </header>
</template>

<script>
export default {
  name: "HeaderView"
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
  button {
    color: white;
    --defined-color-primary: var(--very-dark);
    --defined-color-secondary: var(--very-very-light);
    font-size: x-large;
  }
  button:hover {
    border-color: var(--very-very-light);
  }
  a.item {
    text-decoration: none;
  }
  a.item:hover {
    text-decoration: underline;
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
</style>