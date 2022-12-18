import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        connected: 0,
        accountId: 0,
        lastInsertId: 10,
        allCategory: [
            "activite",
            "spectacle",
            "restauration"
        ],
        allHoraire: [
            {
                name: "Activité",
                start: "2022-12-18 16:30:00",
                end: "2022-12-18 16:30:00",
                timed: false,
                color: "var(--primary)"
            }
        ],
        admin: {
            email: "admin@gmail.com",
            login: "admin",
            password: "admin",
            id: 99
        },
        allPrestataire: [
            {
                name: "Nom du prestataire 1",
                text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
                imagePrestataire: "prestataire.png",
                imageStand: "stand.png",
                nomStand: " la bonne saucisse de michelle",
                idStand: 1,
                type: "activite",
                email: "prestataire1@gmail.com",
                siren: 123456789,
                id: 1,
                password: "prestataire1"
            },
            {
                name: "Nom du prestataire 2",
                text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
                imagePrestataire: "prestataire.png",
                imageStand: "stand.png",
                nomStand: " la bonne saucisse de michelle",
                idStand: 1,
                type: "restauration",
                email: "prestataire2@gmail.com",
                siren: 123456789,
                id: 2,
                password: "prestataire2"
            },
            {
                name: "Nom du prestataire 3",
                text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
                imagePrestataire: "prestataire.png",
                imageStand: "stand.png",
                nomStand: " la bonne saucisse de michelle",
                idStand: 1,
                type: "restauration",
                email: "prestataire3@gmail.com",
                siren: 123456789,
                id: 3,
                password: "prestataire3"
            },
            {
                name: "Nom du prestataire 4",
                text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
                imagePrestataire: "prestataire.png",
                imageStand: "stand.png",
                nomStand: " la bonne saucisse de michelle",
                idStand: 2,
                type: "spectacle",
                email: "prestataire4@gmail.com",
                siren: 987654321,
                id: 4,
                password: "prestataire4"
            },
            {
                name: "Nom du prestataire 5",
                text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
                imagePrestataire: "prestataire.png",
                imageStand: "stand.png",
                nomStand: " la bonne saucisse de michelle",
                idStand: 2,
                type: "activite",
                email: "prestataire5@gmail.com",
                siren: 567891234,
                id: 5,
                password: "prestataire5"
            },
            {
                name: "Nom du prestataire 6",
                text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
                imagePrestataire: "prestataire.png",
                imageStand: "stand.png",
                nomStand: " la bonne saucisse de michelle",
                idStand: 3,
                type: "activite",
                email: "prestataire6@gmail.com",
                siren: 987654321,
                id: 6,
                password: "prestataire6"
            },
            {
                name: "Nom du prestataire 7",
                text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
                imagePrestataire: "prestataire.png",
                imageStand: "stand.png",
                idStand: undefined,
                type: "activite",
                email: "prestataire7@gmail.com",
                siren: 567891234,
                id: 7,
                password: "prestataire7"
            },
            {
                name: "Nom du prestataire 8",
                text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
                imagePrestataire: "prestataire.png",
                imageStand: "stand.png",
                nomStand: " la bonne saucisse de michelle",
                idStand: 3,
                type: "activite",
                email: "prestataire8@gmail.com",
                siren: 432198765,
                id: 8,
                password: "prestataire8"
            },
            {
                name: "Nom du prestataire 9",
                text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
                imagePrestataire: "prestataire.png",
                imageStand: "stand.png",
                nomStand: " la bonne saucisse de michelle",
                idStand: 2,
                type: "activite",
                email: "prestataire9@gmail.com",
                siren: 135792468,
                id: 9,
                password: "prestataire9"
            },
            {
                name: "Nom du prestataire 10",
                text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
                imagePrestataire: "prestataire.png",
                imageStand: "stand.png",
                nomStand: " la bonne saucisse de michelle",
                idStand: undefined,
                type: "activite",
                email: "prestataire10@gmail.com",
                siren: 246813579,
                id: 10,
                password: "prestataire10"
            }
        ]
    },
    getters: {
        getInfoPrestataire: (state) => (id) => {
            return state.allPrestataire.find(prestataire => parseInt(prestataire.id) === parseInt(id))
        },
        getIDPrestataireWithEmail: (state) => (email, password) => {
            return state.allPrestataire.find(prestataire => (prestataire.email === email && prestataire.password === password))
        },
        getAllPrestataire: (state) => {
            return state.allPrestataire
        },
        getAllCategory: (state) => {
            return state.allCategory
        },

        isAlreadyAnAccound: (state) => (email) => {
            return state.allPrestataire.map(prestataire => prestataire.email).includes(email) || state.admin.email === email;
        },

        getIsAdmin: (state) => (email, password) => {
            return (state.admin.email === email) && state.admin.password === password;
        },
        getConnected: (state) => {
            return state.connected
        },
        getAccountId: (state) => {
            return state.accountId
        },

        getLastInsertId: (state) => {
            return state.lastInsertId;
        },

        getAllHoraire: (state) => {
            return state.allHoraire;
        }
    },
    mutations: {
        increment (state) {
            state.lastInsertId++
        },
        setAccountId: (state, id) => {
            state.accountId = parseInt(id);
        },
        setAccountType: (state, type) => {
            state.connected = type;
        },
        addPrestataire: (state, prestataire) => {
            state.allPrestataire.push(prestataire);
        },
        addHoraire: (state, horaire) => {
            state.allHoraire.push(horaire);
        },
        removeHoraire: (state, horaire, index) => {
            state.allHoraire.remove(index, 1);
        }
    },
    actions: {
        createPrestataire: ({getters, commit}, prestataire) => {
            const idPrestataire = getters.getLastInsertId + 1;
            const {lastname, firstname, email, password} = prestataire;
            commit("addPrestataire", {
                name: `${lastname} ${firstname}`,
                text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
                imagePrestataire: "prestataire.png",
                imageStand: "stand.png",
                nomStand: " la bonne saucisse de michelle",
                idStand: undefined,
                type: "activite",
                email: email,
                siren: 123456789,
                id: idPrestataire,
                password: password
            })
            commit("increment");
            commit("setAccountId", idPrestataire);
            commit('setAccountType', 1);
        },
        deleteHoraire: ({getters, commit}, horaire) => {
            const idexDelete = getters.getAllHoraire.indexOf(horaire);
            commit("removeHoraire", idexDelete);
        },
        createHoraire: ({commit}, horaire) => {
            commit("addHoraire", horaire);
        }
    },
    modules: {},
})
