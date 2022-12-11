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
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .div-carte {
    display: flex;
    align-items: center;
  }
  #carte {
    width: 100%;
    margin: 20px;
  }
</style>