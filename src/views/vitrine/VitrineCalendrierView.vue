<template>
  <v-row>
    <v-col>
      <v-sheet height="<!--calc(100vh - 120px)-->">
        <v-calendar
            ref="calendar"
            :now="'2022-12-14 16:30:00'"

            :weekdays="[1,2,3,4,5,6,0]"
            :first-interval="8-1"
            :interval-count="12+2"
            color="var(--blue)"
            type="week"
        >

          <template v-slot:day-body="{ date, week }">
            <div
                class="v-current-time"
                :class="{ first: date === week[0].date }"
                :style="{ top: nowY }"
            ></div>
          </template>

        </v-calendar>
        <!--            :events="events"-->
      </v-sheet>
    </v-col>
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