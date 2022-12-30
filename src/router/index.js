import Vue from 'vue'
import VueRouter from 'vue-router'

import LoginView from "@/views/vitrine/LoginView";
import RegisterView from "@/views/vitrine/RegisterView";

import HomeView from '@/views/vitrine/HomeView.vue'
import VitrineMapView from "@/views/vitrine/VitrineMapView";
import VitrineCalendrierView from "@/views/vitrine/VitrineCalendrierView.vue";
import VitrinePrestataireView from "@/views/vitrine/VitrinePrestataireView";
import VitrinePrestataireProfilView from "@/views/vitrine/VitrinePrestataireProfilView.vue";

import PrestataireHomeView from '@/views/vitrine/HomeView.vue'
import PrestataireCalendrierView from "@/views/prestataire/PrestataireCalendrierView.vue";
import PrestataireProfilView from "@/views/prestataire/PrestataireProfilView";
import PrestataireEditProfilView from "@/views/prestataire/PrestataireEditProfilView.vue";
import PrestataireStatistiqueView from "@/views/prestataire/PrestataireStatistiqueView";

import AdminHomeView from "@/views/admin/AdminHomeView.vue";
import AdminMapView from "@/views/admin/AdminMapView";
import AdminCalendrierView from "@/views/admin/AdminCalendrierView.vue";

import AdminGuestbookView from "@/components/admin/AdminGuestbookView.vue";

import AdminPrestataireView from "@/views/admin/AdminPrestataireView";
import AdminPrestataireProfilView from "@/views/admin/AdminPrestataireProfilView.vue";
import AdminPrestataireEditProfilView from "@/views/admin/AdminPrestataireEditProfilView.vue";

Vue.use(VueRouter)

const routes = [
  // Authentication
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
  // Authentication
  // ------------------------------------
  // Vitrine
  {
    path: "/",
    name: "vitrine_home",
    component: HomeView
  },
  {
    path: "/map",
    name: "vitrine_map",
    component: VitrineMapView,
    children: [{
      path: ":idStand",
      component: () => import('@/components/vitrine/VitrineCardPrestataireView.vue'),
      props: route => ({
        idStand: parseInt(route.params.idStand)
      })
    }]
  },
  {
    path: "/calendrier",
    name: "vitrine_calendrier",
    component: VitrineCalendrierView
  },
  {
    path: "/liste_prestataire",
    name: "vitrine_liste_prestataire",
    component: VitrinePrestataireView
  },
  {
    path: "/liste_prestataire/:idPrestataire",
    name: "vitrine_profil",
    component: VitrinePrestataireProfilView,
    props: (route) => ({
      idPrestataire: parseInt(route.params.idPrestataire)
    })
  },
  // Vitrine
  // ------------------------------------
  // Prestataire
  {
    path: "/prestataire",
    name: "prestataire_home",
    component: PrestataireHomeView

  },
  {
    path: "/prestataire/calendrier/:idPrestataire",
    name: "prestataire_calendrier",
    component: PrestataireCalendrierView,
    props: (route) => ({
      idPrestataire: parseInt(route.params.idPrestataire)
    })
  },
  {
    path: "/prestataire/profil/:idPrestataire",
    name: "prestataire_profil",
    component: PrestataireProfilView,
    props: (route) => ({
      idPrestataire: parseInt(route.params.idPrestataire)
    })
  },
  {
    path: "/prestataire/edit/:idPrestataire",
    name: "prestataire_edit_profil",
    component: PrestataireEditProfilView,
    props: (route) => ({
      idPrestataire: parseInt(route.params.idPrestataire)
    })
  },
  {
    path: "/prestataire/statistique",
    name: "prestataire_statistique",
    component: PrestataireStatistiqueView
  },
  // Prestataire
  // ------------------------------------
  // Admin
    // Admin classic
  {
    path: "/admin",
    name: "admin_home",
    component: AdminHomeView
  },
  {
    path: "/admin/map",
    name: "admin_map",
    component: AdminMapView,
    children: [{
      path: ":idStand",
      component: () => import('@/components/admin/AdminCardPrestataireView.vue'),
      props: (route) => ({
        idStand: parseInt(route.params.idStand)
      })
    }]
  },
  {
    path: "/admin/calendrier",
    name: "admin_calendrier",
    component: AdminCalendrierView
  },
    // Admin classic
    // ------------------------------------
    // Admin Guestbook
  {
    path: "/admin/guestbook",
    name: "admin_guestbook",
    component: AdminGuestbookView,
    props: () => ({
      idPrestataire: 0
    })
  },
    // Admin Guestbook
    // ------------------------------------
    // Admin prestataire
  {
    path: "/admin/prestataire",
    name: "admin_prestataire",
    component: AdminPrestataireView
  },
  {
    path: "/admin/prestataire/:idPrestataire",
    name: "admin_prestataire_profil",
    component: AdminPrestataireProfilView,
    props: (route) => ({
      idPrestataire: parseInt(route.params.idPrestataire)
    })
  },

  {
    path: "/admin/prestataire/edit/:idPrestataire",
    name: "admin_prestataire_edit_profil",
    component: AdminPrestataireEditProfilView,
    props: (route) => ({
      idPrestataire: parseInt(route.params.idPrestataire)
    })
  }
    // Admin prestataire
  // Admin
]

const router = new VueRouter({
  mode: "history",
  scrollBehavior: function () {
    return {x: 0, y: 0}
  },
  routes
})

export default router
