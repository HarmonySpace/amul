import { RouteRecordRaw } from "vue-router";

const studentRoutes: RouteRecordRaw[] = [
  {
    path: "/student/view",
    name: "StudentView",
    component: () => import("../views/students/StudentView.vue"),
  },
  {
    path: "/student/add",
    name: "StudentAdd",
    component: () => import("../views/students/AddStudent.vue"),
  },
  {
    path: "/student/edit/:id",
    name: "StudentEditId",
    component: () => import("../views/students/EditStudent.vue"),
  }
]

export default studentRoutes

