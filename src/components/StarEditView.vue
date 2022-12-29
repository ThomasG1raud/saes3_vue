<template>
  <div class="edit_star">
    <div class="div-star" @mouseleave="resetStar" v-if="!isAddComment">
      <v-icon
          v-for="(star,i) in 5"
          :key="i"
          :color="props_stars === 0 || star > current_stars ? 'var(--light)' : color_star[star-1]"
          :value="star"
          @click="onClickStar($event)"
          @mouseenter="onMouseenterStar($event)"
          @mouseleave="resetStar"
      >
        mdi-star
      </v-icon>
    </div>
    <div class="div-star" v-else>
      <v-icon
          v-for="(star,i) in 5"
          :key="i"
          :color="star > last_stars ? 'var(--light)' : 'var(--grey)'"
      >
        mdi-star
      </v-icon>
    </div>
    <v-text-field
        class="model-star"
        v-model="current_stars"
        :rules="noteRules"
        type="number"
        disabled
    ></v-text-field>
    {{last_stars}} {{current_stars}}
  </div>
</template>

<script>
export default {
  name: "StarDisplayView",
  props: {
    stars: Number,
    isAddComment: Boolean
  },
  data: () => ({
    last_stars: 0,
    current_stars: 0,
    color_star: [
      "#fc1414",
      "#fc3f14",
      "#fc5a14",
      "#fc8814",
      "#fcc514"
    ],
    noteRules: [
      v => !!v || 'Note is required',
      v => (v > 0 && v <= 5) || 'Invalid note'
    ]
  }),
  computed: {
    props_stars() {
      this.changeProps()
      return this.stars;
    }
  },
  methods: {
    changeProps() {
      if (!this.stars) {
        this.last_stars = 0;
        this.current_stars = 0;
      }
    },
    sendValueToParent() {
      this.$emit('value-changed', this.current_stars);
    },
    onClickStar(event) {
      this.last_stars = event.target.value;
      this.sendValueToParent(this.current_stars)
    },
    onMouseenterStar(event) {
      this.current_stars = event.target.value;
      this.sendValueToParent(this.current_stars);
    },
    resetStar() {
      this.current_stars = this.last_stars;
      this.sendValueToParent(this.last_stars);
    }
  }
}
</script>

<style scoped>
.edit_star {
  display: flex;
  margin-bottom: 5px;
}
.div-star {
  width: min-content;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
}
.model-star {
  margin: 0 10px;
  flex: initial;
}
input {
  width: 30px;
}
.theme--light.v-icon:focus::after {
  opacity: 0;
}
</style>