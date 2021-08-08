import { createRouter, createWebHashHistory } from "vue-router";
import Home from "../views/Home.vue";
import Team from "../views/Team.vue";
import Api from "../views/Dashboard.vue";
import List from "../views/List.vue";
import Add from "../views/Account.vue";
import Terms from "../views/Terms.vue";
import Privacy from "../views/Privacy.vue";
import PresetEdit from "../views/PresetEdit.vue";
import PresetView from "../views/PresetView.vue";
import Callback from '../views/Callback'
import ErrorPage from '../views/Error'



const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/team",
    name: "Team",
    component: Team,
  },
  {
    path: "/dashboard",
    name: "Dashboard",
    component: Api,
  },
  {
    path: "/list",
    name: "List",
    component: List,
  },
  {
    path: "/account",
    name: "Account",
    component: Add,
  },
  {
    path: "/terms",
    name: "Terms",
    component: Terms,
  },
  {
    path: "/privacy",
    name: "Privacy",
    component: Privacy,
  },
  {
    path: "/presetview/:id",
    name: "PresetView",
    component: PresetView,
    props: true,
  },
  {
    path: "/presetedit/:id",
    name: "PresetEdit",
    component: PresetEdit,
    props: true,
  },
  {
    path: '/callback',
    name: 'Callback',
    component: Callback,
  },
  {
    path: '/error',
    name: 'Error',
    component: ErrorPage,
  }
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
