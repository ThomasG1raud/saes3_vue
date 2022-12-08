<template>
  <div class="max">
    <div class="div-carte">
      <img src="@/assets/carte.png" alt="carte" id="carte">
    </div>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: "MapView"

}
</script>

<style scoped>
  .max {
    width: 100%;
    display: flex;
  }
  .div-carte {
    width: 75%;
  }
  #carte {
    width: 100%;
    margin: 20px;
  }
</style>