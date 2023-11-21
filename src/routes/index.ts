import { RouteRecordRaw, createRouter, createWebHistory } from "vue-router"
import studentRoutes from "./students";
import groupRoutes from "./groups";

const routes: RouteRecordRaw[] = [
  ...studentRoutes,
  ...groupRoutes,
  {
    alias: "/searchmonograph",
    path: "/",
    name: "SearchMonograph",
    component: () => import("../views/SearchMonograph.vue")
  },
  {
    path: "/listelements",
    name: "ElementsList",
    component: () => import("../views/ElementsView.vue")
  }
  // {
  //   path: "/addmonograph",
  //   name: "AddMonograph",
  //   component: () => import("../views/AddMonograph.vue"),
  // },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
