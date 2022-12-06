import Vue from 'vue'
import VueRouter from 'vue-router'

import LoginView from "@/views/LoginView";
import RegisterView from "@/views/RegisterView";

import HomeView from '@/views/HomeView.vue'
import VitrineActiviteView from "@/views/VitrineActiviteView";
import VitrineMapView from "@/views/VitrineMapView";

import PrestataireView from "@/views/VitrinePrestataireView";
import PrestataireProfilView from "@/views/PrestataireProfilView";
import PrestataireStatistiqueView from "@/views/PrestataireStatistiqueView";

import AdminView from "@/views/AdminView";
import AdminMapView from "@/views/AdminMapView";
import AdminPrestataireView from "@/views/AdminPrestataireView";
import AdminStandView from "@/views/AdminStandView";

Vue.use(VueRouter)

const routes = [
  {
    path: "/login",
    name: "login",
    component: LoginView
  },
  {
    path: "/register",
    name: "register",
    component: RegisterView
  },

  {
    path: "/",
    name: "home",
    component: HomeView
  },
  {
    path: "/activite",
    name: "activite",
    component: VitrineActiviteView
  },
  {
    path: "/map",
    name: "map",
    component: VitrineMapView,
    children: [{
      path: ":idPrestataire",
      component: () => import('../components/CardPrestataireView'),
      props: route => ({
        idPrestataire: route.params.idPrestataire,
        linkCard: "/prestataire/"+route.params.idPrestataire,
        imageCard: "prestataire.png",
        titleCard: "Prestataire",
        textCard: "C'est le meilleur prestataire du parc."
      })
    }]
  },

  {
    path: "/prestataire",
    name: "prestataire",
    component: PrestataireView
  },
  {
    path: "/prestataire/profil",
    name: "profil",
    component: PrestataireProfilView
  },
  {
    path: "/prestataire/statistique",
    name: "statistique",
    component: PrestataireStatistiqueView
  },

  {
    path: "/admin",
    name: "admin",
    component: AdminView
  },
  {
    path: "/admin/map",
    name: "map",
    component: AdminMapView
  },
  {
    path: "/admin/prestataire",
    name: "prestataire",
    component: AdminPrestataireView
  },
  {
    path: "/admin/stand",
    name: "stand",
    component: AdminStandView
  }
]

const router = new VueRouter({
  mode: "history",
  routes
})

export default router
