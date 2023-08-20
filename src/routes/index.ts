import { RouteRecordRaw, createRouter, createWebHistory } from "vue-router";

const routes: RouteRecordRaw[] = [
  {
    alias: "/search",
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
