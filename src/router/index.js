import Vue from 'vue'
import VueRouter from 'vue-router'

import LoginView from "@/views/vitrine/LoginView";
import RegisterView from "@/views/vitrine/RegisterView";

import HomeView from '@/views/vitrine/HomeView.vue'
import VitrineActiviteView from "@/views/vitrine/VitrineActiviteView";
import VitrineMapView from "@/views/vitrine/VitrineMapView";
import VitrineCalendrierView from "@/views/vitrine/VitrineCalendrierView.vue";

import PrestataireView from "@/views/vitrine/VitrinePrestataireView";
import PrestataireProfilView from "@/views/prestataire/PrestataireProfilView";
import PrestataireStatistiqueView from "@/views/prestataire/PrestataireStatistiqueView";

import AdminView from "@/views/admin/AdminView";
import AdminMapView from "@/views/admin/AdminMapView";
import AdminPrestataireView from "@/views/admin/AdminPrestataireView";
import AdminStandView from "@/views/admin/AdminStandView";

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
      component: () => import('@/components/map/CardPrestataireView'),
      props: route => ({
        idPrestataire: parseInt(route.params.idPrestataire)
      })
    }]
  },
  {
    path: "/calendrier",
    name: "calendrier",
    component: VitrineCalendrierView
  },
  {
    path: "/prestataire",
    name: "prestataire",
    component: PrestataireView
  },
  {
    // path: "/prestataire/profil",
    path: "/prestataire/profil/:idPrestataire",
    name: "profil",
    component: PrestataireProfilView,
    props: (route) => ({
      idPrestataire: parseInt(route.params.idPrestataire)
    })
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
    component: AdminMapView,
    children: [{
      path: ":idPrestataire",
      component: () => import('@/components/map/CardPrestataireForAdminView'),
      props: (route) => ({
        idPrestataire: parseInt(route.params.idPrestataire)
      })
    }]
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
  scrollBehavior: function (to) {
    console.log(to.hash)
    if (to.hash) return new Promise((resolve)=> {
      setTimeout(()=>{
        resolve ({ el: to.hash })
      }, 1000)
    })
    return {x: 0, y: 0}
  },
  routes
})

export default router
