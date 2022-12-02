<template>
  <div class="card">
    <img src="../assets/logo.png" alt="image card">
    <h1>{{titleCard}}</h1>
    <p>{{textCard}}</p>
  </div>
</template>

<script>
export default {
  name: "CardActivityView",
  props: {
    imageCard: String,
    titleCard: String,
    textCard: String
  }
}
</script>

<style scoped>

</style>