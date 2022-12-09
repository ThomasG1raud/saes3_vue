import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    connected: 0,
    allPrestataire: [
      {
        name: "Nom du prestataire 1",
        text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
        imagePrestataire: "prestataire.png",
        imageStand: "stand.png",
        type: "activite",
        id: 1
      },
      {
        name: "Nom du prestataire 2",
        text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
        imagePrestataire: "prestataire.png",
        imageStand: "stand.png",
        type: "restauration",
        id: 2
      },
      {
        name: "Nom du prestataire 3",
        text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
        imagePrestataire: "prestataire.png",
        imageStand: "stand.png",
        type: "restauration",
        id: 3
      },
      {
        name: "Nom du prestataire 4",
        text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
        imagePrestataire: "prestataire.png",
        imageStand: "stand.png",
        type: "spectacle",
        id: 4
      },
      {
        name: "Nom du prestataire 5",
        text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
        imagePrestataire: "prestataire.png",
        imageStand: "stand.png",
        type: "activite",
        id: 5
      }
    ]
  },
  getters: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
