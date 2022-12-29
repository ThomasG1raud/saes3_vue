<template>
  <v-app id="guestbook" class="app">
    <!--    todo le syle d'un élément fait que : "min-height: 100vh;" donc il y a du blanc apres le tableau quand il est trop petit--->
    <v-data-table
        :headers="headers"
        :items="curentComments"
        :items-per-page="5"
        expand-icon="mdi-star"
        class="elevation-1"
    >
      <template v-slot:item="{ item }">
        <tr :class="item.isPrestataire ? 'prestataire' : ''">
          <td class="name">{{ item.name }}</td>
          <td>
            <StarDisplayView :stars="parseInt(item.note)" class="ma-auto"/>
          </td>
          <td>{{item.date}}</td>
          <td>{{ item.text }}</td>
          <td>
            <v-icon :color="item.isPrestataire ? 'green' : 'red'">
              {{ item.isPrestataire ? "mdi-check" : "mdi-cancel" }}
            </v-icon>
          </td>
          <td>
            <v-btn color="red" class="white--text" @click.prevent="removeComment(item.id)">
              <v-icon left>
                mdi-delete
              </v-icon>
              Delete
            </v-btn>
          </td>
        </tr>
      </template>
      <template v-slot:header="{ item }">
        <div>
          {{item}}
        </div>
      </template>
    </v-data-table>
  </v-app>
</template>

<script>
import StarDisplayView from "@/components/StarDisplayView.vue";
import {mapActions, mapGetters} from "vuex";

export default {
  name: "AdminGuestbookView",
  props: {
    idPrestataire: Number
  },
  data: () => ({
    // headers props
    headers: [
      {
        text: 'Nom',
        sortable: false,
        align: 'center',
        value: 'name'
      },
      {
        text: 'Note',
        sortable: true,
        align: 'center',
        value: 'note'
      },
      {
        text: 'Date',
        sortable: true,
        align: 'center',
        value: 'date'
      },
      {
        text: 'Commentaire',
        sortable: false,
        align: 'center',
        value: 'comment'
      },
      {
        text: "Is prestataire",
        sortable: true,
        align: "center",
        value: "isPrestataire"
      },
      {
        text: "Delete",
        sortable: false,
        align: "center",
        value: "delete"
      }
    ]
  }),
  computed: {
    curentComments() {
      return this.getAllComment().filter(comment => parseInt(comment.idPrestataire) === parseInt(this.idPrestataire));
    }
  },
  methods: {
    ...mapGetters(["getAllComment"]),
    ...mapActions(["deleteComment"]),
    removeComment(idComment) {
      if (!confirm("Are you sure to delete ?")) return;
      this.deleteComment(idComment);
    }
  },
  components: {
    StarDisplayView
  }
}
</script>

<style scoped>
#guestbook {
  margin-top: 60px;
  background-color: var(--background);
}
td.name {
  width: 200px;
}
.alert-star {
  display: flex;
  margin: auto;
  width: max-content;
}
.alert {
  scale: 1;
  animation: 1s displayZoom;
}
.theme--light.v-icon:focus::after {
  opacity: 0;
}
@keyframes displayZoom {
  0% {
    transform: rotateX(90deg);
  }
}
tr.prestataire {
  background-color: rgb(0, 0, 256, 0.1);
}
tr.prestataire:hover {
  background-color: rgb(0, 0, 256, 0.2) !important;
}
</style>