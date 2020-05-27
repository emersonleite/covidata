import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

/* Criando as rotas. Pode ser em separado, como embaixo */
/* Deve ser criado antes de router */
const routes = [
  {
    path: "/",
    name: "home",
    component: Home,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  /* adicionando as rotas */
  routes,
  /* truques legais - comportamento do scroll voltando para topo 
após carregar página */
  scrollBehavior() {
    return window.scrollTo({ top: 0, behavior: "smooth" });
  },
});

/* Exportando */
export default router;
