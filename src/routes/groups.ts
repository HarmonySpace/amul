import { RouteRecordRaw } from "vue-router";

const groupRoutes: RouteRecordRaw[] = [
  {
    path: "/group/view",
    name: "GroupView",
    component: () => import("../views/groups/GroupView.vue"),
  },
  {
    path: "/group/add",
    name: "GroupAdd",
    component: () => import("../views/groups/AddGroup.vue"),
  },
  {
    path: "/group/edit/:id",
    name: "GroupEditId",
    component: () => import("../views/groups/EditGroup.vue"),
  }
]

export default groupRoutes