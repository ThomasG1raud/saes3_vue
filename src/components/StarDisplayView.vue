<template>
  <div class="div-star">
    <v-icon v-for="(star,i) in 5" :key="i" :color="star > stars ? 'var(--light)' : color_star[star-1]">mdi-star</v-icon>
  </div>
</template>

<script>
export default {
  name: "StarView",
  props: {
    stars: Number
  },
  data: () => ({
    color_star: [
      "#fc1414",
      "#fc3f14",
      "#fc5a14",
      "#fc8814",
      "#fcc514"
    ]
  })
}
</script>

<style scoped>
.div-star {
  width: min-content;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
}
</style>