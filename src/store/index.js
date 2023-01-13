import Vue from 'vue'
import Vuex from 'vuex'
import bcrypt from 'bcryptjs';

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
                idPrestataire: 2,
                name: "Activité",
                details: "C'est une Activité",
                start: "2023-01-18T16:30",
                end: "2023-01-18T16:30",
                timed: false,
                color: "var(--primary)"
            },
            {
                id: 2,
                idPrestataire: 7,
                name: "Duel médiéval",
                details: "Venez assistez à nos combats et joutes équestres.",
                start: "2023-01-12T14:30",
                end: "2023-01-12T16:30",
                timed: false,
                color: "var(--primary)"
            },
            {
                id: 3,
                idPrestataire: 1,
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
                name: "Tony Camillio",
                email: "tony.camillio@gmail.com",
                note: 5,
                date: "2022-12-30",
                text: "Très bon prestataire",
                idPrestataire: 3,
                idComptePost: 3
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
                name: "Tom Stilinski",
                email: "tom.stilinski@gmail.com",
                note: 5,
                date: "2022-12-20",
                text: "Très souriant.",
                idPrestataire: 1,
                idComptePost: 1
            }
        ],
        allAdmin: [
            {
                email: "admin@gmail.com",
                login: "admin",
                password: "$2a$10$7zUYSZW9P4O0a3VCt9FaferIb4ROJWpCqP0xHQc22Rv4IFUnDHoEy",
                id: 99
            },
            {
                email: "admin2@gmail.com",
                login: "admin",
                password: "$2a$10$7zUYSZW9P4O0a3VCt9FaferIb4ROJWpCqP0xHQc22Rv4IFUnDHoEy",
                id: 100
            }
        ],
        allPrestataire: [
            {
                name: 'Tom Stilinski',
                text: 'Venez dégusté nos suculents rôtis à la broche.',
                imagePrestataire: 'images_prestataire/prestataire_1.jpg',
                nomStand: 'La Rotisserie',
                idStand: 8,
                type: 'restauration',
                email: 'tom.stilinski@gmail.com',
                siren: '421540979',
                id: 1,
                password: '$2a$10$INQHfSQyOsiqFM3Kix6R4uP7xo4NvA4gDukX9YyIJUBd16sXIidXu'
            },
            {
                name: 'Mike Carted',
                text: "Vennez vous initier au façonnage du métal chaud pour la créaction d'outils du quotitien ou encore des armes de combats.",
                imagePrestataire: 'images_prestataire/prestataire_2.jpg',
                nomStand: 'La Forge',
                idStand: 3,
                type: 'activite',
                email: 'mike.carted@gmail.com',
                siren: '038184849',
                id: 2,
                password: '$2a$10$8oxaUDEZE9hpMh/BBwM9L..D0Y7QXFAoXy8wZ305EFJ5C3vQS95BK'
            },
            {
                name: 'Tony Camillio',
                text: 'Venez découvrir nos armes et armures, avec les yeux comme avec les mains.',
                imagePrestataire: 'images_prestataire/prestataire_3.jpg',
                nomStand: 'Armurie Médiéval',
                idStand: 6,
                type: 'activite',
                email: 'tony.camillio@gmail.com',
                siren: '824816706',
                id: 3,
                password: '$2a$10$fRkir1TIXgz1JDDqYYyfVedoHhjC6Er9iHe4bN/hFG.XOzXF6vWkK'
            },
            {
                name: 'Anthony Griffin',
                text: 'Vennez découvrir l`art ancestrale de la charpentrie et aidez nous à restaurer notre chateau',
                imagePrestataire: 'images_prestataire/prestataire_4.jpg',
                nomStand: 'Charpente',
                idStand: 5,
                type: 'activite',
                email: 'anthony.griffin@gmail.com',
                siren: '535870213',
                id: 4,
                password: '$2a$10$Qjvhq7XpYc89TazFdTAC3.ZgK/.NWa.TQkm9t8PnCWGP44B4PznUG'
            },
            {
                name: 'Angelo Wheeler',
                text: "Venez vous initier au souflage du verre et apprenez à créer votre propre verrerie. Vous pourrez également découvrir comment sont confectionnés les vitraux.",
                imagePrestataire: 'images_prestataire/prestataire_5.jpg',
                nomStand: 'Mâitre Verrier',
                idStand: 2,
                type: 'activite',
                email: 'angelo.wheeler@gmail.com',
                siren: '109276640',
                id: 5,
                password: '$2a$10$s.TCDvAvrZTmyVjSurF90e8CdBKcLDn89.e7BD92tAaDlF99gtKpK'
            },
            {
                name: 'Pablo Meyer',
                text: 'Le tavernier vous ferra gouter a ses meilleurs crues tout comme à la bonne recette traditionnel du pot au feu.',
                imagePrestataire: 'images_prestataire/prestataire_6.jpg',
                nomStand: 'La Taverne',
                idStand: 4,
                type: 'restauration',
                email: 'pablo.meyer@gmail.com',
                siren: '806493863',
                id: 6,
                password: '$2a$10$K49VujO2ngHjAXEpoFKQpeoaX4rw/lbMBuxzqgx3B7vipI7/ALTFW'
            },
            {
                name: 'Jon Karlos',
                text: 'Venez assistez à nos combats et joutes équestres.',
                imagePrestataire: 'images_prestataire/prestataire_7.jpg',
                nomStand: 'Duel médiéval',
                idStand: 9,
                type: 'spectacle',
                email: 'jon.karlos@gmail.com',
                siren: '093271962',
                id: 7,
                password: '$2a$10$lXN2Mfq8byx9p2IPvZhLOOtyHVt/bVQZ/TCYpZqmEnEBm6WNmEegm'
            },
            {
                name: 'Alexis Clerck',
                text: "Venez déguster mos délicieux mets pendant que le troubadour vous contera les histoires de l'époque.",
                imagePrestataire: 'images_prestataire/prestataire_8.jpg',
                nomStand: 'Le banquait des troubadours',
                idStand: 7,
                type: 'restauration',
                email: 'alexis.clerck@gmail.com',
                siren: '650062469',
                id: 8,
                password: '$2a$10$GIHb48cHHanwkmTRuxChV.s7AqRtVJdhY8Hf1dCasKWq6AtqKo4A.'
            },
            {
                name: 'Malcolm Pearce',
                text: 'Aucune description',
                imagePrestataire: 'images_prestataire/prestataire_9.jpg',
                nomStand: 'Pas de nom',
                idStand: 0,
                type: 'activite',
                email: 'malcolm.pearce@gmail.com',
                siren: '209745087',
                id: 9,
                password: '$2a$10$gpr4CYl7HEhFBVz2OqR92OkmkBMT9hsRDpdO3RlpR/TeB09jy6dxS'
            },
            {
                name: 'Jack Sonara',
                text: 'Aucune description',
                imagePrestataire: 'images_prestataire/prestataire_10.jpg',
                nomStand: 'Pas de nom',
                idStand: 0,
                type: 'activite',
                email: 'jack.sonara@gmail.com',
                siren: '653726293',
                id: 10,
                password: '$2a$10$s/UDr/cDS.I0ljroN9y6yel4OcMAoyjnz5oIsbGXAblLUlHJ6JnAa'
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
        getAllStandAssigned: (state)  => {
            return state.allPrestataire.filter(prestataire => prestataire.idStand).map(prestataire => prestataire.idStand)
        },
        getIDPrestataireWithEmail: (state) => (email, password) => {
            return state.allPrestataire.find(prestataire => (prestataire.email === email && bcrypt.compareSync(password, prestataire.password, (err, res) => {
                if (err) {
                    console.error(err)
                    return
                }
                return res
            })))
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
            const prestataire = state.allPrestataire.find(prestataire => parseInt(prestataire.id) === parseInt(idPrestataire))
            return bcrypt.compareSync(password, prestataire.password, (err, res) => {
                if (err) {
                    console.error(err)
                    return
                }
                return res
            })
        },
        isAlreadyAnAccound: (state) => (email) => {
            return state.allPrestataire.map(prestataire => prestataire.email).includes(email)
                || state.allAdmin.map(admin => admin.email).includes(email)
        },

        getIsAdmin: (state) => (email, password) => {
            return state.allAdmin.find(admin => admin.email === email && bcrypt.compareSync(password, admin.password, (err, res) => {
                if (err) {
                    console.error(err)
                    return
                }
                return res
            }))
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
                name: `${firstname} ${lastname}`,
                text: "Aucune description",
                imagePrestataire: "prestataire.png",
                nomStand: "Pas de nom",
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
