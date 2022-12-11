import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        connected: 0,
        allCategory: [
            "activite",
            "spectacle",
            "restauration"
        ],
        allPrestataire: [
            {
                name: "Nom du prestataire 1",
                text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
                imagePrestataire: "prestataire.png",
                imageStand: "stand.png",
                nomStand:" la bonne saucisse de michelle",
                type: "activite",
                id: 1
            },
            {
                name: "Nom du prestataire 2",
                text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
                imagePrestataire: "prestataire.png",
                imageStand: "stand.png",
                nomStand:" la bonne saucisse de michelle",
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
                nomStand:" la bonne saucisse de michelle",
                type: "spectacle",
                id: 4
            },
            {
                name: "Nom du prestataire 5",
                text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
                imagePrestataire: "prestataire.png",
                imageStand: "stand.png",
                nomStand:" la bonne saucisse de michelle",
                type: "activite",
                id: 5
            },
            {
                name: "Nom du prestataire 6",
                text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
                imagePrestataire: "prestataire.png",
                imageStand: "stand.png",
                nomStand:" la bonne saucisse de michelle",
                type: "activite",
                id: 6
            },
            {
                name: "Nom du prestataire 7",
                text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
                imagePrestataire: "prestataire.png",
                imageStand: "stand.png",
                type: "activite",
                id: 7
            },
            {
                name: "Nom du prestataire 8",
                text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
                imagePrestataire: "prestataire.png",
                imageStand: "stand.png",
                nomStand:" la bonne saucisse de michelle",
                type: "activite",
                id: 8
            },
            {
                name: "Nom du prestataire 9",
                text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
                imagePrestataire: "prestataire.png",
                imageStand: "stand.png",
                nomStand:" la bonne saucisse de michelle",
                type: "activite",
                id: 9
            },
            {
                name: "Nom du prestataire 10",
                text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
                imagePrestataire: "prestataire.png",
                imageStand: "stand.png",
                nomStand:" la bonne saucisse de michelle",
                type: "activite",
                id: 10
            }
        ]
    },
    getters: {
        getInfoPrestataire:(state)=> (id) => {
            return state.allPrestataire.find(prestataire => prestataire.id === id)
        }
    },
    mutations: {},
    actions: {},
    modules: {},
})
