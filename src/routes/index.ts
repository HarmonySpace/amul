import { RouteRecordRaw, createRouter, createWebHistory } from "vue-router"
import studentRoutes from "./students";

const routes: RouteRecordRaw[] = [
  ...studentRoutes,
  {
    alias: "/searchmonograph",
    path: "/",
    name: "SearchMonograph",
    component: () => import("../views/SearchMonograph.vue"),
  },
  {
    path: "/addmonograph",
    name: "AddMonograph",
    component: () => import("../views/AddMonograph.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
