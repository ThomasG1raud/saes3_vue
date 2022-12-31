<template>
    <router-link :to="linkCard" class="linkCard">
      <div class="max-h">
        <div class="card">
          <h1 class="titleCard" :class="type">{{type}}</h1>
          <p class="textCard">{{textCard}}</p>
          <div class="m-auto">
            <img :src="require('@/assets/'+imageCard)" alt="image card">
          </div>
        </div>
      </div>
    </router-link>
</template>

<script>
export default {
  name: "CardActivityView",
  props: {
    linkCard: Object,
    type: String,
    imageCard: String,
    textCard: String
  },
  computed: {
    getBackground() {
      return `var(--${this.type})`;
    }
  }
}
</script>

<style scoped>
  .max-h {
    height: 100%;
    display: flex;
  }
  .card {
    color: var(--very-very-light);
    background-color: v-bind(getBackground);
    box-shadow: 0 0 15px var(--grey);
    border-radius: 20px;
    padding: 20px;
    transition-duration: 1s;
    display: flex;
    flex-direction: column;
  }
  .card:hover {
    transition-duration: 1s;
    scale: 1.02;
    box-shadow: 0 0 15px var(--very-very-dark);
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
  h1 {
    text-transform: capitalize;
  }
</style>