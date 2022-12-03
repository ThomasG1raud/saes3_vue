<template>
  <div id="app">
    <HeaderView msg="SAÉ"/>
    <router-view/>
    <FooterView/>
  </div>
</template>

<script>

import HeaderView from "@/components/HeaderView";
import FooterView from "@/components/FooterView";
export default {
  components: {
    HeaderView,
    FooterView
  }
}

</script>


<style>
:root {
  --light: #FFFFFF;
  --dark: #333333;
  --primary: #bb5533;
  --secondary: #c46928;
  --tertiary: #8f5d1c
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
body {
  margin: 0;
  padding: 0;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}

button {
  border: 2px solid black;
  border-radius: 5px;
  background-color: var(--light);
  color: black;
  padding: 5px;
}
</style>
