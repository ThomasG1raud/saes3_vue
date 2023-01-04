import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        connected: 0,
        accountId: 0,
        lastInsertIdPrestataire: 10,
        lastInsertIdHoraire: 3,
        lastInsertIdComment: 4,
        allCategory: [
            "activite",
            "spectacle",
            "restauration"
        ],
        allHoraire: [
            {
                id: 1,
                idPrestataire: 1,
                name: "Activité",
                details: "C'est une Activité",
                start: "2023-01-18T16:30",
                end: "2023-01-18T16:30",
                timed: false,
                color: "var(--primary)"
            },
            {
                id: 2,
                idPrestataire: 1,
                name: "Spectacle",
                details: "C'est un Spectacle",
                start: "2023-01-19T16:30",
                end: "2023-01-19T16:30",
                timed: false,
                color: "var(--primary)"
            },
            {
                id: 3,
                idPrestataire: 5,
                name: "Restautation",
                details: "C'est de la Restautation",
                start: "2023-01-22T06:00",
                end: "2023-01-22T16:00",
                timed: false,
                color: "var(--primary)"
            }
        ],
        allComment: [
            {
                id: 4,
                name: "Nom du prestataire 2",
                email: "prestataire1@gmail.com",
                note: 5,
                date: "2022-12-30",
                text: "Très bon prestataiire",
                idPrestataire: 2,
                idComptePost: 2
            },
            {
                id: 3,
                name: "Alexandre Duclos",
                email: "alexandre_duclos@gmail.com",
                note: 1,
                date: "2022-12-29",
                text: "C'est vraiment nul !!!",
                idPrestataire: 2,
                idComptePost: 0
            },
            {
                id: 2,
                name: "Guillaume Plante",
                email: "guillaume.plante@gmail.com",
                note: 3,
                date: "2022-12-29",
                text: "Je sais pas quoi penser.",
                idPrestataire: 1,
                idComptePost: 0
            },
            {
                id: 1,
                name: "Nom du prestataire 3",
                email: "prestataire4@gmail.com",
                note: 5,
                date: "2022-12-20",
                text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
                idPrestataire: 3,
                idComptePost: 3
            }
        ],
        allAdmin: [
            {
                email: "admin@gmail.com",
                login: "admin",
                password: "admin",
                id: 99
            },
            {
                email: "admin2@gmail.com",
                login: "admin",
                password: "admin",
                id: 100
            }
        ],
        allPrestataire: [
            {
                name: "Nom du prestataire 1",
                text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
                imagePrestataire: "prestataire.png",
                imageStand: "stand.png",
                nomStand: "La bonne saucisse de michelle",
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
                nomStand: "La bonne saucisse de michelle",
                idStand: 2,
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
                nomStand: "La bonne saucisse de michelle",
                idStand: 3,
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
                nomStand: "La bonne saucisse de michelle",
                idStand: 4,
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
                nomStand: "La bonne saucisse de michelle",
                idStand: 5,
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
                nomStand: "La bonne saucisse de michelle",
                idStand: 6,
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
                nomStand: "La bonne saucisse de michelle",
                idStand: 0,
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
                nomStand: "La bonne saucisse de michelle",
                idStand: 8,
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
                nomStand: "La bonne saucisse de michelle",
                idStand: 9,
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
                nomStand: "La bonne saucisse de michelle",
                idStand: 0,
                type: "activite",
                email: "prestataire10@gmail.com",
                siren: 246813579,
                id: 10,
                password: "prestataire10"
            }
        ]
    },
    getters: {
        getInfoPrestataireByIdPrestataire: (state) => (idPrestataire) => {
            return state.allPrestataire.find(prestataire => parseInt(prestataire.id) === parseInt(idPrestataire))
        },
        getInfoPrestataireByIdStand: (state) => (idStand) => {
            return state.allPrestataire.find(prestataire => parseInt(prestataire.idStand) === parseInt(idStand))
        },
        getHoraireByIdPrestataire: (state) => (idPrestataire) => {
            return state.allHoraire.filter(horaire => parseInt(horaire.idPrestataire) === parseInt(idPrestataire))
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
        getAllComment: (state) => {
            return state.allComment
        },
        getAllCommentByIdPrestataire: (state) => (idPrestataire) => {
            return state.allComment.filter(comment => parseInt(comment.idPrestataire) === parseInt(idPrestataire))
        },
        getStandId: (state) => (idPrestataire) =>  {
            return state.standId = state.allPrestataire.find(prestataire => parseInt(prestataire.id) === parseInt(idPrestataire)).idStand;
        },

        isCorectPassword: (state) => (idPrestataire, password) => {
            return state.allPrestataire.find(prestataire => parseInt(prestataire.id) === parseInt(idPrestataire)).password === password;
        },
        isAlreadyAnAccound: (state) => (email) => {
            return state.allPrestataire.map(prestataire => prestataire.email).includes(email)
                || state.allAdmin.map(admin => admin.email).includes(email)
        },

        getIsAdmin: (state) => (email, password) => {
            return state.allAdmin.find(admin => admin.email === email && admin.password === password);
        },
        getConnected: (state) => {
            return state.connected
        },
        getAccountId: (state) => {
            return state.accountId
        },

        getLastInsertIdPrestataire: (state) => {
            return state.lastInsertIdPrestataire;
        },
        getLastInsertIdHoraire: (state) => {
            return state.lastInsertIdHoraire;
        },
        getLastInsertIdComment: (state) => {
            return state.lastInsertIdComment;
        },


        getAllHoraire: (state) => {
            return state.allHoraire;
        },
        getAllHoraireByIdPrestataire: (state) => (idPrestataire) => {
            return state.allHoraire.filter(horaire => parseInt(horaire.idPrestataire) === parseInt(idPrestataire));
        },

    },
    mutations: {
        incrementIdPrestataire (state) {
            state.lastInsertIdPrestataire++
        },
        incrementIdHoraire (state) {
            state.lastInsertIdHoraire++
        },
        incrementIdComment (state) {
            state.lastInsertIdComment++
        },
        setAccountId: (state, id) => {
            state.accountId = parseInt(id);
        },
        setAccountType: (state, type) => {
            state.connected = type;
        },
        setIdStand: (state, prestataire) => {
            const idStand = undefined;
            prestataire.idStand = idStand;
        },
        addPrestataire: (state, prestataire) => {
            state.allPrestataire.push(prestataire);
        },
        addHoraire: (state, horaire) => {
            state.allHoraire.push(horaire);
        },
        addComment: (state, comment) => {
            state.allComment.splice(0, 0, comment)
        },
        removeComment: (state, comment) => {
            state.allComment.splice(comment, 1);
        },
        removeHoraire: (state, indexDelete) => {
            state.allHoraire.splice(indexDelete, 1);
        },
        updateDetails: (state, indexUpdate, ev) => {
            // state.allHoraire.splice(indexUpdate, 1, ev);
            let horaire = state.allHoraire[indexUpdate];
            console.log(horaire)
            horaire = ev;
        }
    },
    actions: {
        createPrestataire: ({getters, commit}, prestataire) => {
            const idPrestataire = getters.getLastInsertIdPrestataire + 1;
            const {lastname, firstname, email, password} = prestataire;
            commit("addPrestataire", {
                name: `${lastname} ${firstname}`,
                text: "",
                imagePrestataire: "prestataire.png",
                imageStand: "stand.png",
                nomStand: "",
                idStand: 0,
                type: "activite",
                email: email,
                siren: 123456789,
                id: idPrestataire,
                password: password
            })
            commit("incrementIdPrestataire");
            commit("setAccountId", idPrestataire);
            commit('setAccountType', 1);
        },
        createComment: ({getters, commit}, comment) => {
            const idComment = getters.getLastInsertIdComment + 1;
            commit('addComment', {
                id: idComment,
                name: comment.name,
                email: comment.email,
                note: comment.note,
                date: comment.date,
                text: comment.text,
                idPrestataire: comment.idPrestataire,
                idComptePost: comment.idComptePost
            })
            commit('incrementIdComment');
        },
        deleteComment: ({getters, commit}, idComment) => {
            const indexDelete = getters.getAllComment.findIndex(comment => comment.id === parseInt(idComment))
            commit("removeComment", parseInt(indexDelete));
        },
        deleteHoraire: ({getters, commit}, idHoraire) => {
            const indexDelete = getters.getAllHoraire.findIndex(horaire => horaire.id === parseInt(idHoraire))
            commit("removeHoraire", parseInt(indexDelete));
        },
        createHoraire: ({commit}, horaire) => {
            commit("addHoraire", horaire);
        },
        editDetails: ({getters, commit}, ev) => {
            const indexDelete = getters.getAllHoraire.findIndex(horaire => horaire.id === parseInt(ev.id))
            commit("updateDetails", indexDelete, ev)
        }
    },
    modules: {},
})
