<template>
  <div id="app">
    <link href="https://cdn.jsdelivr.net/npm/@mdi/font@6.x/css/materialdesignicons.min.css" rel="stylesheet">
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
  },
  created() {
    document.title = "Parc Médiéval"
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
  --red: #e12626;
  --green: #19dc22;
  --orange: #e09431;

  --activite: #70321d;
  --spectacle: #af5031;
  --restauration: #e1673e;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  --background: var(--very-very-light);
  background-color: var(--background);
  /*background-image: url("https://media.istockphoto.com/id/1166351631/photo/japanese-new-year-vintage-gold-color-paper-texture-or-grunge-background.jpg?s=612x612&w=0&k=20&c=FdDCRDB2Mq5x5sM488E1KBb430cu4vGrGVDYOBskb6Y=");*/
  /*background-size: 100% auto;*/
  /*background-repeat: repeat;*/
}

body {
  margin: 0;
  padding: 0;
}

button.btn, .btn, input[type=submit], #connected-selected,select {
  border: 2px solid var(--defined-color-secondary);
  background-color: var(--defined-color-primary);
  color: var(--defined-color-secondary);
  border-radius: 5px;
  padding: 5px;
  text-align: center;
}

button.btn:hover, .btn:hover, input[type=submit]:hover, #connected-selected:hover,select:hover{
  border: 2px solid var(--defined-color-secondary);
  background-color: var(--defined-color-secondary);
  color: var(--defined-color-primary);
  border-radius: 5px;
  padding: 5px;
  text-align: center;
}
button.btn-edit {
  --defined-color-primary: var(--green);
  --defined-color-secondary: var(--very-very-dark);
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
