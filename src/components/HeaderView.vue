<template>
  <header>
    <nav>
<!--      Login with prestataire-->
      <div class="div-nav" v-if="connected == 1">
        <a class="item" href="/">
          <img src="@/assets/logo_sae_white.png" alt="logo_sae_black" id="logo_navbar">
        </a>
        <a class="item" href="#/prestataire/profile">Profile</a>
        <a class="item" href="#/prestataire/statistique">Statistique</a>
        <a class="item" href="#/map">Map</a>
        <div class="item">
          <a href="/">
            <button>Se déconnecter</button>
          </a>
        </div>
      </div>
<!--      Login with admin-->
      <div class="div-nav" v-else-if="connected == 2">
        <a class="item" href="/">
          <img src="@/assets/logo_sae_white.png" alt="logo_sae_black" id="logo_navbar">
        </a>
        <a class="item" href="#/admin/stand">Stand</a>
        <a class="item" href="#/admin/prestataire">Prestataire</a>
        <a class="item" href="#/admin/map">Map</a>
        <div class="item">
          <a href="/">
            <button>Se déconnecter</button>
          </a>
        </div>
      </div>
<!--      No login-->
      <div class="div-nav" v-else>
        <a class="item" href="/">
          <img src="@/assets/logo_sae_white.png" alt="logo_sae_black" id="logo_navbar">
        </a>
        <a class="item" href="#/">Accueil</a>
        <a class="item" href="#/prestataire">Prestataire</a>
        <a class="item" href="#/map">Map</a>
        <div class="item">
          <a href="#/login">
            <button>Se connecter</button>
          </a>
          <a href="#/register">
            <button>Créer un compte</button>
          </a>
        </div>
      </div>
    </nav>
  </header>
</template>

<script>
export default {
  name: "HeaderView",
  props: {
    connected: Number
  }
}
</script>

<style scoped>
  header {
    width: 100%;
    position: sticky;
    top: 0;
    z-index: 1000;
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
    color: var(--light);
    font-size: x-large;
  }

  #logo_navbar {
    height: 64px;
    width: 64px;
  }

  button {
    background: var(--dark);
    border: 1px solid var(--light);
    color: var(--light);
    font-size: x-large;
  }
  button:hover {
    background: var(--light);
    color: var(--dark);
  }
  a.item {
    text-decoration: none;
  }
  a.item:hover {
    text-decoration: underline;
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