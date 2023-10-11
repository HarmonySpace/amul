import { RouteRecordRaw, createRouter, createWebHistory } from "vue-router";

const routes: RouteRecordRaw[] = [
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
  {
    path: "/addstudent",
    name: "AddStudent",
    component: () => import("../views/AddStudent.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
