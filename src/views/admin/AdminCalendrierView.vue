<template>
  <v-app id="calendar">
    <template>
      <v-row class="fill-height">
        <v-col>
          <v-sheet height="64">
            <v-toolbar flat color="white">
              <v-btn color="var(--primary)" dark @click.stop="dialog = true;start=null;end=null;">
                New Event
              </v-btn>
              <v-btn outlined class="mr-4" @click="setToday">
                Today
              </v-btn>
              <v-btn fab text small @click="prev">
                <v-icon small>mdi-chevron-left</v-icon>
              </v-btn>
              <v-btn fab text small @click="next">
                <v-icon small>mdi-chevron-right</v-icon>
              </v-btn>
              <v-toolbar-title>{{ title }}</v-toolbar-title>
              <div class="flex-grow-1"></div>
              <v-menu bottom right>
                <template v-slot:activator="{ on }">
                  <v-btn outlined v-on="on">
                    <span>{{ typeToLabel[type] }}</span>
                    <v-icon right>mdi-menu-down</v-icon>
                  </v-btn>
                </template>
                <v-list>
                  <v-list-item @click="type = 'day'">
                    <v-list-item-title>Day</v-list-item-title>
                  </v-list-item>
                  <v-list-item @click="type = 'week'">
                    <v-list-item-title>Week</v-list-item-title>
                  </v-list-item>
                  <v-list-item @click="type = 'month'">
                    <v-list-item-title>Month</v-list-item-title>
                  </v-list-item>
                  <v-list-item @click="type = '4day'">
                    <v-list-item-title>4 days</v-list-item-title>
                  </v-list-item>
                </v-list>
              </v-menu>
            </v-toolbar>
          </v-sheet>

          <v-dialog v-model="dialog" max-width="500"> <!--button create-->
            <v-card>
              <v-container>
                <v-form @submit.prevent="addEvent">
                  <v-text-field v-model="name" type="text" label="event name (required)"></v-text-field>
                  <v-text-field v-model="details" type="text" label="detail"></v-text-field>
                  <v-text-field v-model="start" type="datetime-local" label="start (required)"></v-text-field>
                  <v-text-field v-model="end" type="datetime-local" label="end (required)"></v-text-field>
                  <v-text-field v-model="color" type="color" label="color (click to open color menu)"></v-text-field>
                  <v-select
                      v-model="currentPrestataireSelected"
                      :items="getListPrestataire"
                      item-value="id"
                      item-text="name"
                      label="Please select a prestataire"
                      return-object
                  ></v-select>
                  <v-btn type="submit" color="var(--primary)" class="mr-4" @click.stop="dialog = false">
                    create event
                  </v-btn>
                </v-form>
              </v-container>
            </v-card>
          </v-dialog>

          <v-dialog v-model="dialogDate" max-width="500"> <!--click on day-->
            <v-card>
              <v-container>
                <v-form @submit.prevent="addEvent">
                  <v-text-field v-model="name" type="text" label="event name (required)"></v-text-field>
                  <v-text-field v-model="details" type="text" label="detail"></v-text-field>
                  <v-text-field v-model="start" type="datetime-local" label="start (required)"></v-text-field>
                  <v-text-field v-model="end" type="datetime-local" label="end (required)"></v-text-field>
                  <v-text-field v-model="color" type="color" label="color (click to open color menu)"></v-text-field>
                  <v-btn type="submit" color="var(--primary)" class="mr-4" @click.stop="dialogDate = false">
                    create event
                  </v-btn>
                </v-form>
              </v-container>
            </v-card>
          </v-dialog>

          <v-sheet height="600">
            <v-calendar
                ref="calendar"
                v-model="focus"
                color="var(--blue)"
                :events="events"
                :event-color="getEventColor"
                :event-margin-bottom="3"
                :now="today"
                :type="type"
                @click:event="showEvent"
                @click:more="viewDay"
                @click:date="dialog = true;start=null;end=null;/*setDialogDate*/"
                @change="updateRange"
            ></v-calendar>
<!--            normal not edit-->
            <div v-if="currentlyEditing !== selectedEvent.id">
              <v-menu
                  v-model="selectedOpen"
                  :close-on-content-click="false"
                  :activator="selectedElement"
                  offset-x
              >
                <v-card color="grey lighten-4" :width="350" flat>
                  <v-toolbar :color="selectedEvent.color" dark>
                    <v-btn @click="deleteEvent(selectedEvent.id)" icon>
                      <v-icon>mdi-delete</v-icon>
                    </v-btn>
                    <v-toolbar-title v-html="selectedEvent.name"></v-toolbar-title>
                    <div class="flex-grow-1"></div>
                  </v-toolbar>

                  <v-card-text>
                    <form>
                      {{ selectedEvent.details }}
                    </form>
                  </v-card-text>
                  <v-card-actions>
                    <v-btn text color="var(--secondary)" @click="selectedOpen = false">
                      close
                    </v-btn>
                   <v-btn text @click.prevent="editEvent(selectedEvent)">
                     edit
                   </v-btn>
                   <router-link :to="'/admin/prestataire/'+selectedEvent.idPrestataire">
                     <v-btn text color="var(--very-very-dark)">
                       show prestataire
                     </v-btn>
                   </router-link>
                  </v-card-actions>
                </v-card>
              </v-menu>
            </div>

<!--            menu edit-->
            <div v-else>
              <v-menu
                  v-model="selectedOpen"
                  :close-on-content-click="false"
                  :activator="selectedElement"
                  offset-x
              >
                <v-card color="grey lighten-4" :width="350" flat>
                  <v-toolbar :color="selectedEvent.color" dark>
                    <v-btn @click="deleteEvent(selectedEvent.id)" icon>
                      <v-icon>mdi-delete</v-icon>
                    </v-btn>
<!--                    <v-toolbar-title v-html="selectedEvent.name"></v-toolbar-title>-->
                    <v-text-field
                        v-model="selectedEvent.name"
                        label="Title"
                        class="mt-6"
                        :background-color="selectedEvent.color"
                        solo
                    ></v-text-field>
                    <div class="flex-grow-1"></div>
                  </v-toolbar>

                  <v-card-text>
                    <form>
                      <v-textarea
                          v-model="selectedEvent.details"
                          clearable
                          auto-grow
                          clear-icon="mdi-close-circle"
                      ></v-textarea>
                      <v-select
                          v-model="currentEditPrestataireSelected"
                          :items="getListPrestataire"
                          item-value="id"
                          item-text="name"
                          label="Please select a prestataire"
                          return-object
                      ></v-select>
                      {{currentEditPrestataireSelected}}
                    </form>
                  </v-card-text>
                  <v-card-actions>
                    <v-btn text color="var(--secondary)" @click="selectedOpen = false">
                      close
                    </v-btn>
                    <v-btn text type="submit" @click.prevent="updateEvent(selectedEvent)">
                      Save
                    </v-btn>
                  </v-card-actions>
                </v-card>
              </v-menu>
            </div>
          </v-sheet>
        </v-col>
      </v-row>
    </template>
  </v-app>
</template>

<script>
import {mapActions, mapGetters} from "vuex";

export default {
  name: "AdminCalendrierView",
  data: () => ({
    today: new Date().toISOString().substr(0, 16),
    focus: new Date().toISOString().substr(0, 16),
    type: 'month',
    typeToLabel: {
      month: 'Month',
      week: 'Week',
      day: 'Day',
      '4day': '4 Days',
    },
    name: null,
    details: null,
    start: null,
    end: null,
    color: '#FF0000',
    currentlyEditing: null,
    selectedEvent: {},
    selectedElement: null,
    selectedOpen: false,
    events: [],
    dialog: false,
    dialogDate: false,
    currentPrestataireSelected: {},
  }),
  mounted () {
    this.reloadHoraire()
  },
  computed: {
    title () {
      const { start, end } = this
      if (!start || !end) {
        return ''
      }
      const startMonth = this.monthFormatter(start)
      const endMonth = this.monthFormatter(end)
      const suffixMonth = startMonth === endMonth ? '' : endMonth
      const startYear = start.year
      const endYear = end.year
      const suffixYear = startYear === endYear ? '' : endYear
      const startDay = start.day + this.nth(start.day)
      const endDay = end.day + this.nth(end.day)
      switch (this.type) {
        case 'month':
          return `${startMonth} ${startYear}`
        case 'week':
        case '4day':
          return `${startMonth} ${startDay} ${startYear} - ${suffixMonth} ${endDay} ${suffixYear}`
        case 'day':
          return `${startMonth} ${startDay} ${startYear}`
      }
      return ''
    },
    monthFormatter () {
      return this.$refs.calendar.getFormatter({
        timeZone: 'UTC', month: 'long',
      })
    },
    getListPrestataire () {
      return this.getAllPrestataire();
    },
    currentEditPrestataireSelected: {
      get(){
        return this.selectedEvent.idPrestataire
      },
      set(setValue){
        this.selectedEvent.idPrestataire = setValue.id;
        return setValue.id
      }
    }
  },
  methods: {
    ...mapGetters(["getAllHoraire", "getAllPrestataire", "getInfoPrestataireByIdPrestataire"]),
    ...mapActions(["createHoraire", "deleteHoraire", "editDetails"]),
    reloadHoraire() {
      const allHoraire = this.getAllHoraire();
      const events = []
      allHoraire.forEach(horaire => {
        events.push(horaire)
      })
      this.events = events
    },
    setDialogDate( { date }) {
      this.start = null;
      this.end = null;
      this.dialogDate = true
      this.focus = date
    },
    viewDay ({ date }) {
      this.focus = date
      this.type = 'day'
    },
    getEventColor (event) {
      return event.color
    },
    setToday () {
      this.focus = this.today
    },
    prev () {
      this.$refs.calendar.prev()
    },
    next () {
      this.$refs.calendar.next()
    },
    async addEvent () {
      if (this.name && this.start && this.end && this.currentPrestataireSelected) {
        const horaire = {
          name: this.name,
          details: this.details,
          start: this.start,
          end: this.end,
          color: this.color,
          idPrestataire: this.currentPrestataireSelected.id
        }
        this.createHoraire(horaire)
        this.reloadHoraire()
        this.name = ''
        this.details = ''
        this.start = ''
        this.end = ''
        this.color = ''
        this.currentPrestataireSelected = {}
      } else {
        alert('You must enter event name, start, end time and prestataire name')
      }
    },
    editEvent (ev) {
      this.currentlyEditing = ev.id
    },
    async updateEvent (ev) {
      this.editDetails(ev) // this.currentlyEditing = ev;
      this.selectedOpen = false
      this.currentlyEditing = null
    },
    async deleteEvent (ev) {
      this.deleteHoraire(ev)
      this.selectedOpen = false
      this.reloadHoraire();
    },
    showEvent ({ nativeEvent, event }) {
      const open = () => {
        this.selectedEvent = event
        this.selectedElement = nativeEvent.target
        setTimeout(() => this.selectedOpen = true, 10)
      }
      if (this.selectedOpen) {
        this.selectedOpen = false
        setTimeout(open, 10)
      } else {
        open()
      }
      nativeEvent.stopPropagation()
    },
    updateRange ({ start, end }) {
      this.start = start
      this.end = end
    },
    nth (d) {
      return d > 3 && d < 21
          ? 'th'
          : ['th', 'st', 'nd', 'rd', 'th', 'th', 'th', 'th', 'th', 'th'][d % 10]
    }
  }
}
</script>

<style scoped>
:root, * {
  --primary: var(--blue);
  --secondary: var(--secondary);
  --defined-color-primary: var(--light);
  --defined-color-secondary:  var(--blue);
}
</style>
