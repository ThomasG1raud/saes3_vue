<template>
  <v-row>
    <v-col>
      <v-sheet height="calc(100vh - 120px)">
        <v-calendar
            ref="calendar"
            :now="now"
            :value="now"

            color="primary"
            type="week"
        ></v-calendar>
        <!--            :events="events"-->
      </v-sheet>
    </v-col>
    <br style="margin: 100px">{{now}}
  </v-row>
</template>

<script>

export default {
  name: "VitrineCalendrierView",
  data: () => ({
    // events: ""
  }),
  computed: {
    now() {
      let date = new Date();
      const d = date.getDate()
      const m = date.getMonth()
      const y = date.getFullYear()
      return `${y}-${m}-${d}`;
    }
  }
}
</script>

<style scoped>

</style>