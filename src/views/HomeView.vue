<template>
  <div class="home">
    <MapView/>
    <hr style="margin-top: 300px">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import MapView from "@/components/MapView";

export default {
  name: 'HomeView',
  components: {
    HelloWorld,
    MapView
  }
}
</script>