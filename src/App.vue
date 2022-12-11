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
  --defined-color-primary: var(--very-very-light);
  --defined-color-secondary: var(--very-very-dark);

  --very-very-light: #EEEEEE;
  --very-light: #E2E2E2;
  --light: #D9D9D9;
  --grey: #898888;
  --dark: #383636;
  --very-dark: #333333;
  --very-very-dark: #242322;

  --primary: #5C554A;
  --secondary: #A39C88;
  --tertiary: #878272;
  --background: #D4C8BB;
  --brown: #4A3D32;
  --blue: #0080ff;

  --activite: #70321d;
  --spectacle: #af5031;
  --restauration: #e1673e;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  background-color: var(--very-very-light);
}

body {
  margin: 0;
  padding: 0;
}

nav a {
  font-weight: bold;
}

button {
  border: 2px solid var(--defined-color-secondary);
  background-color: var(--defined-color-primary);
  color: var(--defined-color-secondary);
  border-radius: 5px;
  padding: 5px;
}

button:hover {
  border: 2px solid var(--defined-color-primary);
  background-color: var(--defined-color-secondary);
  color: var(--defined-color-primary);
  border-radius: 5px;
  padding: 5px;
}

div.activite {
  background-color: var(--activite);
}
div.spectacle {
  background-color: var(--spectacle);
}
div.restauration {
  background-color: var(--restauration);
}
@keyframes displayZoom {
  0% {
    opacity: 0;
    scale: 0;
  }
  100% {
    opacity: 1;
    scale: 100%;
  }
}
</style>
