<template>
  <div class="div-star" @mouseleave="resetStar">
    <v-icon
        v-for="(star,i) in 5"
        :key="i"
        :color="star > current_stars ? 'var(--light)' : color_star[star-1]"
        :value="star"
        @click="onClickStar($event)"
        @mouseenter="onMouseenterStar($event)"
        @mouseleave="resetStar"
    >
      mdi-star
    </v-icon>
  </div>
</template>

<script>
export default {
  name: "StarDisplayView",
  data: () => ({
    last_stars: 1,
    current_stars: 1,
    color_star: [
      "#fc1414",
      "#fc3f14",
      "#fc5a14",
      "#fc8814",
      "#fcc514"
    ]
  }),
  methods: {
    sendValueToParent() {
      this.$emit('value-changed', this.last_stars);
    },
    onClickStar(event) {
      this.last_stars = event.target.value;
      this.sendValueToParent(this.last_stars)
    },
    onMouseenterStar(event) {
      this.current_stars = event.target.value;
    },
    resetStar() {
      this.current_stars = this.last_stars;
    }
  }
}
</script>

<style scoped>
.div-star {
  width: min-content;
  display: grid;
  margin: auto;
  grid-template-columns: repeat(5, 1fr);
}
.theme--light.v-icon:focus::after {
  opacity: 0;
}
</style>