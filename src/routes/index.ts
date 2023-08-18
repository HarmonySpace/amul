import { RouteRecordRaw, createRouter, createWebHistory } from "vue-router";

const routes: RouteRecordRaw[] = [
  {
    alias: "/search",
    path: "/",
    name: "Search",
    component: () => import("../views/Search.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
