import { createRouter, createWebHistory } from "vue-router";
import Nav from "@/views/Nav.vue";

const routes = [
  {
    path: "/",
    component: Nav,
    children: [
      {
        path: "/",
        name: "card",
        component: () => import("@/views/Card.vue"),
        meta: { title: "Card", requiresAuth: false },
      },
    ],
  },
  {
    path: "/:pathMatch(.*)*",
    name: "NotFound",
    component: () => import("@/views/NotFound.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
