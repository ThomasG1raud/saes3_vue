<template>
  <v-app id="guestbook" class="app">
<!--    todo le syle d'un élément fait que : "min-height: 100vh;" donc il y a du blanc apres le tableau quand il est trop petit--->
    {{test}}
    <v-data-table
        :headers="headers"
        :items="desserts"
        :items-per-page="5"
        expand-icon="mdi-star"
        class="elevation-1"
    >
      <template v-slot:item="{ item }">
        <tr>
          <td class="name">{{ item.name }}</td>
          <td>
            <StarDisplayView :stars="item.note"/>
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
export default {
  name: "VitrineGuestbookView",
  props: {
    idPrestataire: Number
  },
  data: () => ({
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
    ],
    desserts: [
      {
        name: 'Frozen Yogurt',
        note: 1,
        date: "11/01/2023",
        comment: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'
      },
      {
        name: 'Ice cream sandwich',
        note: 2,
        date: "12/01/2023",
        comment: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'
      },
      {
        name: 'Eclair',
        note: 2,
        date: "06/01/2023",
        comment: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'
      },
      {
        name: 'Cupcake',
        note: 3,
        date: "04/01/2023",
        comment: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'
      },
      {
        name: 'Gingerbread',
        note: 3,
        date: "02/01/2023",
        comment: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'
      },
      {
        name: 'Jelly bean',
        note: 3,
        date: "15/01/2023",
        comment: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'
      },
      {
        name: 'Lollipop',
        note: 3,
        date: "18/01/2023",
        comment: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'
      },
      {
        name: 'Honeycomb',
        note: 4,
        date: "14/01/2023",
        comment: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'
      },
      {
        name: 'Donut',
        note: 3,
        date: "02/01/2023",
        comment: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'
      },
      {
        name: 'KitKat',
        note: 5,
        date: "01/01/2023",
        comment: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'
      },

      {
        name: 'Frozen Yogurt',
        note: 1,
        date: "11/01/2023",
        comment: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'
      },
      {
        name: 'Ice cream sandwich',
        note: 2,
        date: "12/01/2023",
        comment: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'
      },
      {
        name: 'Eclair',
        note: 2,
        date: "06/01/2023",
        comment: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'
      },
      {
        name: 'Cupcake',
        note: 3,
        date: "04/01/2023",
        comment: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'
      },
      {
        name: 'Gingerbread',
        note: 3,
        date: "02/01/2023",
        comment: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'
      },
      {
        name: 'Jelly bean',
        note: 3,
        date: "15/01/2023",
        comment: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'
      },
      {
        name: 'Lollipop',
        note: 3,
        date: "18/01/2023",
        comment: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'
      },
      {
        name: 'Honeycomb',
        note: 4,
        date: "14/01/2023",
        comment: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'
      },
      {
        name: 'Donut',
        note: 3,
        date: "02/01/2023",
        comment: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'
      },
      {
        name: 'KitKat',
        note: 5,
        date: "01/01/2023",
        comment: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'
      },

      {
        name: 'Frozen Yogurt',
        note: 1,
        date: "11/01/2023",
        comment: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'
      },
      {
        name: 'Ice cream sandwich',
        note: 2,
        date: "12/01/2023",
        comment: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'
      },
      {
        name: 'Eclair',
        note: 2,
        date: "06/01/2023",
        comment: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'
      },
      {
        name: 'Cupcake',
        note: 3,
        date: "04/01/2023",
        comment: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'
      },
      {
        name: 'Gingerbread',
        note: 3,
        date: "02/01/2023",
        comment: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'
      },
      {
        name: 'Jelly bean',
        note: 3,
        date: "15/01/2023",
        comment: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'
      },
      {
        name: 'Lollipop',
        note: 3,
        date: "18/01/2023",
        comment: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'
      },
      {
        name: 'Honeycomb',
        note: 4,
        date: "14/01/2023",
        comment: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'
      },
      {
        name: 'Donut',
        note: 3,
        date: "02/01/2023",
        comment: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'
      },
      {
        name: 'KitKat',
        note: 5,
        date: "01/01/2023",
        comment: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'
      }
    ],
    test: 0
  }),
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
.theme--light.v-icon:focus::after {
  opacity: 0;
}
</style>