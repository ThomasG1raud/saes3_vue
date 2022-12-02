<template>
  <header>
    <nav>
      <a class="item" href="">
        <img src="../assets/logo_sae_white.png" alt="logo_sae_black" id="logo_navbar">
      </a>
      <a class="item" >Acceuil</a>
      <a class="item" >Prestataire</a>
      <a class="item" >Map</a>
      <a class="item">
        <button>Se connecter</button>
      </a>
    </nav>
  </header>
</template>

<script>
export default {
  name: "HeaderView",
  props: {
    msg: String
  }
}
</script>

<style scoped>
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
</style>