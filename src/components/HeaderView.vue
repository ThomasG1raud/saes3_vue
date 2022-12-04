<template>
  <header>
    <nav>
      <a class="item" href="/">
        <img src="../assets/logo_sae_white.png" alt="logo_sae_black" id="logo_navbar">
      </a>
      <a class="item" href="/">Accueil</a>
      <a class="item" href="#/prestataire">Prestataire</a>
      <a class="item" href="#/map">Map</a>
      <div v-if="connected == 0" class="item">
        <a href="#/login">
          <button>Se connecter</button>
        </a>
        <a href="#/register">
          <button>Créer un compte</button>
        </a>
      </div>
      <div v-else class="item">
        <a href="/">
          <button>Se déconnecter</button>
        </a>
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
  }
  nav {
    padding: 10px;
    background-color: var(--dark);
    display: flex;
  }

  nav > * {
    color: var(--light);
    font-size: x-large;
  }

  #logo_navbar {
    height: 64px;
    width: 64px;
  }

  button {
    background: none;
    border: 1px solid var(--light);
    color: var(--light);
    font-size: x-large;
  }

  .item {
    margin: auto;
  }
  .item:first-child {
    margin-left: 0;
  }
  .item:last-child {
    margin-right: 50px;
  }
  .item:last-child > a {
    margin-left: 10px;
  }
</style>