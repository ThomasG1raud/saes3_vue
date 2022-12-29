<template>
  <v-app id="guestbook" class="app">
    <v-col>
      <v-form
          ref="form"
          v-model="valid"
          lazy-validation
          :disabled="isAddComment"
      >
        <v-text-field
            disabled
            :value="curentPrestataire.name"
            label="Name"
            required
        ></v-text-field>
        <v-text-field
            disabled
            :value="curentPrestataire.email"
            label="E-mail"
            required
        ></v-text-field>

        <StarEditView @value-changed="chnageNote" :stars="parseInt(note ? parseInt(note) : 0)" :isAddComment="isAddComment"/>

        <v-textarea
            v-model="textComment"
            :rules="commentRules"
            counter
            clearable
            outlined
            filled
            auto-grow
        ></v-textarea>
        <v-btn
            :disabled="isAddComment || !valid"
            color="var(--blue)"
            class="mr-4"
            @click="addComment"
        >
          Add comment
        </v-btn>
        <v-btn
            :disabled="isAddComment"
            color="var(--red)"
            class="mr-4"
            @click="reset"
        >
          Reset Form
        </v-btn>
        <v-btn
            :disabled="isAddComment"
            color="var(--orange)"
            @click="resetValidation"
        >
          Reset Validation
        </v-btn>
      </v-form>

      <v-alert
          v-if="isAddComment"
          class="d-block my-5 alert"
          border="bottom"
          color="blue"
          type="success"
      >
        <div>Your comment  has been successfully added</div>
        <div>Name : {{curentPrestataire.name}}</div>
        <div class="alert-star">Note : <StarDisplayView :stars="note"/></div>
        <div>Date : {{getDate}}</div>
        <div>Text : {{textComment}}</div>
      </v-alert>
    </v-col>
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
            <StarDisplayView :stars="item.note" class="ma-auto"/>
          </td>
          <td>{{item.date}}</td>
          <td>{{ item.comment }}</td>
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
import StarEditView from "@/components/StarEditView.vue";
import {mapGetters, mapMutations} from "vuex";

export default {
  name: "PrestataireGuestbookView",
  props: {
    idPrestataire: Number
  },
  data: () => ({
    isAddComment: false,
    valid: true,
    note: 0,
    textComment: '',
    commentRules: [
      v => !!v || 'Comment is required',
      v => (v && v.length > 10) || 'The text must be at least 10 characters',
      v => (v && v.length < 512) || 'Name must be less than 512 characters',
    ],

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
      }
    ]
  }),
  computed: {
    ...mapGetters(["getInfoPrestataireByIdPrestataire"]),
    curentPrestataire() {
      return this.getInfoPrestataireByIdPrestataire(this.idPrestataire)
    },
    curentComments() {
      return this.getAllComment().filter(comment => parseInt(comment.idPrestataire) === parseInt(this.idPrestataire));
    },
    getDate() {
      return new Date().toISOString().substr(0, 10);
    },
  },
  methods: {
    ...mapGetters(["getAllComment", "isAlreadyAnAccound"]),
    ...mapMutations(["postComment"]),
    addComment() {
      if (this.isAddComment) return;
      if (!this.$refs.form.validate()) return;
      const comment = {
        name: this.curentPrestataire.name,
        email: this.curentPrestataire.email,
        note: this.note,
        text: this.textComment,
        date: this.getDate,
        idPrestataire: this.idPrestataire,
        isPrestataire: true
      }
      this.postComment(comment)
      this.isAddComment = true;
    },
    reset() {
      this.textComment = "";
      this.note = 0;
    },
    resetValidation() {
      this.$refs.form.resetValidation()
    },
    chnageNote(note) {
      this.note = note;
    }
  },
  components: {
    StarDisplayView,
    StarEditView
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