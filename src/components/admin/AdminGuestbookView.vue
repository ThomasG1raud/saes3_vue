<template>
  <v-app id="guestbook">
    <!--    todo le syle d'un élément fait que : "min-height: 100vh;" donc il y a du blanc apres le tableau quand il est trop petit--->
    <v-data-table v-if="curentComments.length"
                  :headers="headers"
                  :items="curentComments"
                  :items-per-page="5"
                  expand-icon="mdi-star"
                  :class="idPrestataire ? 'elevation-1' : 'elevation-1 ma-5'"
                  :search="search"
                  :custom-filter="filterOnlyCapsText"
    >

      <template v-slot:top>
        <v-text-field
            v-model="search"
            label="Search"
            class="mx-4"
        ></v-text-field>
      </template>

      <template v-slot:item="{ item }">
        <tr :class="item.idComptePost ? 'prestataire' : ''">
          <td class="name" v-if="!item.idComptePost">{{ item.name }}</td>
          <td class="name" v-else>
            <router-link class="underline" :to="'/admin/prestataire/'+item.idComptePost">
              {{ item.name }}
            </router-link>
          </td>
          <td>
            <StarDisplayView :stars="parseInt(item.note)" class="ma-auto"/>
          </td>
          <td>{{ item.date }}</td>
          <td>{{ item.text }}</td>
          <td class="text-name-prestataire">
            {{ currentPrestataire(item.idPrestataire).name }}
          </td>
          <td class="text-is-prestataire">
            <v-icon :color="item.idComptePost ? 'green' : 'red'">
              {{ item.idComptePost ? "mdi-check" : "mdi-cancel" }}
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

    </v-data-table>

    <v-container v-else class="mt-5">
      <v-alert v-if="this.idPrestataire"
               border="bottom"
               color="warning"
               elevation="24"
               icon="mdi-comment"
               type="warning"
      >
        There are no comments for this prestataire
      </v-alert>
      <v-alert v-else
               border="bottom"
               color="error"
               elevation="24"
               icon="mdi-comment"
               type="error"
      >
        There are no comments for all prestataire
      </v-alert>
    </v-container>
    {{selected}} <!--todo checkbox-->
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
    search: '',
    // headers props
    headers: [
      {
        text: 'Nom',
        sortable: true,
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
        text: "Nom du prestataire",
        sortable: false,
        align: "center",
        value: "name_prestataire"
      },
      {
        text: "Is prestataire",
        sortable: true,
        align: "center",
        value: "idComptePost"
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
      if (!this.idPrestataire) return this.getAllComment();
      return this.getAllComment().filter(comment => parseInt(comment.idPrestataire) === parseInt(this.idPrestataire));
    },
    currentPrestataire(idPrestataire) {
      return this.getInfoPrestataireByIdPrestataire(parseInt(idPrestataire));
    }
  },
  methods: {
    ...mapGetters(["getAllComment", "getInfoPrestataireByIdPrestataire"]),
    ...mapActions(["deleteComment"]),
    removeComment(idComment) {
      if (!confirm("Are you sure to delete ?")) return;
      this.deleteComment(idComment);
    },
    filterOnlyCapsText(value, search, item) {
      if (!value) return false;
      if (!search) return false;
      if (typeof value !== 'string') return false;
      if (item.name.toString().toLowerCase().includes(search.toLowerCase())) return true;
      if (item.note.toString().toLowerCase().includes(search.toLowerCase())) return true;
      if (item.date.toString().toLowerCase().includes(search.toLowerCase())) return true;
      if (item.text.toString().toLowerCase().includes(search.toLowerCase())) return true;
      return item.idComptePost && "is prestataire".toString().toLowerCase().includes(search.toLowerCase());

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

tr.prestataire {
  background-color: rgb(0, 0, 256, 0.1);
}

tr.prestataire:hover {
  background-color: rgb(0, 0, 256, 0.2) !important;
}
td.name {
  width: 200px;
}
td.text-is-prestataire {
  min-width: 150px;
}
td.text-name-prestataire {
  min-width: 190px;
}

@keyframes displayZoom {
  0% {
    transform: rotateX(90deg);
  }
}
</style>