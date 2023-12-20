import { RouteRecordRaw } from "vue-router";

const groupRoutes: RouteRecordRaw[] = [
  {
    path: "/testing/searchinrealtime",
    name: "Testing search in real time",
    component: () => import("../views/testing/searchInRealTime.vue"),
  }
]

export default groupRoutes