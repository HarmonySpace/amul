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
    path: "/student/add",
    name: "AddStudent",
    component: () => import("../views/students/AddStudent.vue"),
  },
  {
    path: "/student/list",
    name: "ListStudents",
    component: () => import("../views/students/ListStudents.vue")
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
