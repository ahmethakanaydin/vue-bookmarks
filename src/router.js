import { createRouter, createWebHistory } from "vue-router";

import HomePage from "@/views/HomePage";
import NewBookmark from "@/views/NewBookmark";

const routes = [
  {
    name: "HomePage",
    path: "/",
    component: HomePage,
  },
  {
    name: "NewBookmark",
    path: "/new",
    component: NewBookmark,
  },
];

const router = createRouter({
  routes,
  history: createWebHistory(),
});

export default router;
