<template>
  <v-row>
    <v-col>
      <v-sheet height="533px">
        <v-calendar
            ref="calendar"
            :now="today"
            :value="today"
            :events="events"
            color="primary"
            type="week"
        ></v-calendar>
      </v-sheet>
    </v-col>
  </v-row>
</template>

<script>

export default {
  name: "VitrineCalendrierView"
}
</script>

<style scoped>

</style>