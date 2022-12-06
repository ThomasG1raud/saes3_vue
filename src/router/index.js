import Vue from 'vue'
import VueRouter from 'vue-router'
import LoginView from "@/views/LoginView";
import RegisterView from "@/views/RegisterView";

import HomeView from '@/views/HomeView.vue'
import VitrineActiviteView from "@/views/VitrineActiviteView";
import MapView from "@/components/MapView";

import PrestataireView from "@/views/VitrinePrestataireView";
import PrestataireProfileView from "@/views/PrestataireProfileView";
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
    component: MapView
  },

  {
    path: "/prestataire",
    name: "prestataire",
    component: PrestataireView
  },
  {
    path: "/prestataire/profile",
    name: "profile",
    component: PrestataireProfileView
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
  },

  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-component: () => import(loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
