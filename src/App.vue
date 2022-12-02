<template>
  <div id="app">
    <HeaderView msg="test"/>
    <router-view/>
  </div>
</template>

<script>
import HeaderView from "@/components/HeaderView";
export default {
  components: {
    HeaderView
  }
}

</script>

<style>
:root {
  --light: #FFFFFF;
  --dark: #333333;
  --primary: #FF8080;
  --secondary: #80FF80;
  --tertiary: #8080FF
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
