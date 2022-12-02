<template>
  <div class="card">
    <a :href="linkCard" class="linkCard">
      <img :src="require('../assets/'+imageCard)" alt="image card">
      <h1 class="titleCard">{{titleCard}}</h1>
      <p class="textCard">{{textCard}}</p>
    </a>
  </div>
</template>

<script>
export default {
  name: "CardActivityView",
  props: {
    linkCard: String,
    imageCard: String,
    titleCard: String,
    textCard: String
  }
}
</script>

<style scoped>
  .card {
    margin: 20px;
    background-color: var(--primary);
    border-radius: 20px;
    padding: 20px;
    transition-duration: 1s;
  }
  .card:hover {
    transition-duration: 1s;
    scale: 1.02;
    box-shadow: 0 0 15px var(--dark);
  }
  .textCard {
    padding-left: 20px;
    padding-right: 20px;
    text-align: justify;
  }
  img {
    width: 200px;
    margin: auto;
  }
  a.linkCard {
    text-decoration: none;
    color: var(--light);
  }
</style>