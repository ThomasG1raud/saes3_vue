<template>
  <div id="adminHome">
    <div class="card-admin" v-for="(panel, inedx) in panels" :key="inedx">
      <router-link :to="panel.link">
        <button class="btn">
          {{panel.title}}
        </button>
        <div class="image">
          <img :src="require('@/assets/panel/'+panel.image)" alt="image panel">
        </div>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "AdminHomeView",
  data: () => ({
    panels: [
      {
        title: "Calendrier",
        link: "/admin/calendrier",
        image: "panel_calendar.png"
      },
      {
        title: "Livre d'or",
        link: "/admin/guestbook",
        image: "panel_guestbook.png"
      },
      {
        title: "Prestataire",
        link: "/admin/prestataire",
        image: "panel_prestataire.png"
      },
      {
        title: "Map",
        link: "/admin/map",
        image: "panel_map.png"
      }
    ]
  })
}
</script>

<style scoped>
* {
  width: 100%;
}
.btn {
  width: 50%;
  margin-bottom: 10px;
  --defined-color-primary: var(--background);
  --defined-color-secondary: var(--blue);
}

#adminHome {
  width: 80%;
  display: grid;
  margin: 30px auto;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 30px;
}
img {
  width: inherit;
}

.card-admin {
  color: var(--light);
  box-shadow: 0 0 15px currentColor;
  border-radius: 20px;
  padding: 20px;
  transition-duration: 500ms;
}
.card-admin:hover {
  color: var(--grey);
  scale: 1.02;
}
</style>