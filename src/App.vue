<template>
  <div id="app">
    <HeaderView/>
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
  --light: #EEEEEE;
  --dark: #333333;
  --grey: #808080;
  --blue: #0080ff;
  --primary: #c4ba9b;
  --secondary: #cdccba;
  --tertiary: #e6d4bc;
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
