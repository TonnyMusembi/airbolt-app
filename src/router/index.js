import { createRouter, createWebHistory } from "vue-router";
import Nav from "@/views/Nav.vue";
import Card from "@/views/Card.vue";

const routes = [
  {
    path: "/",
    component: Nav,
    children: [
      {
        path: "/",
        name: "card",
        component: Card,
        meta: { title: "Card", requiresAuth: false },
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
