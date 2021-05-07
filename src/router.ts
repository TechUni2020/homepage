import Vue from "vue";
import Router, { Route } from "vue-router";
import Home from "@/views/Home.vue";
import Blog from "@/views/Blog.vue";

Vue.use(Router);

const router = new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      component: Home,
      meta: {
        title: "Tech.Uni",
      },
    },
    {
      path: "/hackathon",
      name: "hackathon",
      component: () => import("@/views/Hackathon.vue"),
      meta: {
        title: "ハッカソン",
      },
    },
    {
      path: "/blog",
      name: "blog",
      component: Blog,
      meta: {
        title: "ブログ",
      },
      // props: (route) => (
      //     {
      //         queriedCategory: route.query.categories,
      //         queriedPageNumber: route.query.page
      //     }
      // ),
    },
    {
      path: "/blog/:id",
      component: () => import("@/views/ArticlePage.vue"),
      meta: {
        title: "ブログ",
      },
      props: true,
    },
    {
      path: "/about",
      name: "about",
      component: () => import("@/views/About.vue"),
      meta: {
        title: "私たちについて",
      },
    },
    {
      path: "/contact",
      name: "contact",
      component: () => import("@/views/Contact.vue"),
      meta: {
        title: "お問い合わせ",
      },
    },
    {
      path: "*",
      name: "404",
      component: () => import("@/views/error.vue"),
      meta: {
        title: "Error 404 not found",
      },
    },
  ],
});

router.afterEach((to: Route, from: Route) => {
  if (to.meta.noScroll && from.meta.noScroll) {
    // 遷移先・遷移元の両方がスクロール不要な時のみスクロールしない
    return;
  }
  scrollTo(0, 0);
});
export default router;
