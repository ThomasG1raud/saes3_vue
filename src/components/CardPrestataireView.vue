<template>
  <a :href="linkCard" class="linkCard">
    <div class="max-h">
      <div class="card">
        <div class="m-auto">
          <h1 class="titleCard">{{titleCard}}</h1>
          <p class="textCard">{{textCard}}</p>
          <div>
            <img :src="require('../assets/'+imageCard)" alt="image card">
          </div>
        </div>
      </div>
    </div>
  </a>
</template>

<script>
export default {
  name: "CardPrestataireView",
  props: {
    linkCard: String,
    imageCard: String,
    titleCard: String,
    textCard: String
  }
}
</script>

<style scoped>
.max-h {
  height: 100%;
  display: flex;
}
.card {
  background-color: var(--secondary);
  color: var(--light);
  border-radius: 20px;
  padding: 20px;
  transition-duration: 1s;
  display: flex;
  flex-direction: column;
  margin: 20px 30px;
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
}
.m-auto {
  margin: auto;
}
a.linkCard {
  text-decoration: none;
  color: var(--light);
}
</style>