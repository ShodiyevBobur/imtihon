import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      component: () => import("../layouts/default.vue"),
      children: [
        {
          path: "",
          name: "home",
          component: () => import("../pages/home.vue"),
        },
        {
          path: "about",
          name: "about",
          component: () => import("../pages/about.vue"),
        },
        {
          path: "pricing",
          name: "pricing",
          component: () => import("../pages/pricing.vue"),
        },
        {
          path: "work",
          name: "work",
          redirect: "work/all",
          component: () => import("../pages/work.vue"),
          children: [
            {
              path: "all",
              name: "all",
              component: () => import("../pages/all.vue"),
            },
            {
              path: "ui",
              name: "ui",
              component: () => import("../pages/ui.vue"),
            },
            {
              path: "webflow",
              name: "webflow",
              component: () => import("../pages/webflow.vue"),
            },
            {
              path: "figma",
              name: "figma",
              component: () => import("../pages/figma.vue"),
            },
          ],
        },
        {
          path: "blog",
          name: "blog",
          component: () => import("../pages/blog.vue"),
        },
        {
          path: "contact",
          name: "contact",
          component: () => import("../pages/contact.vue"),
        },
      ],
    },
    {
      path: "/:pathMatch(.*)*",
      name: "NotFound",
      component: () => import("../pages/NotFoundPage.vue"),
    },
  ],
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    } else {
      if (
        to.matched.length > 1 &&
        from.matched.length > 1 &&
        to.matched[0].path === from.matched[0].path
      ) {
        return {};
      }
      return { top: 0 };
    }
  },
});

export default router;
