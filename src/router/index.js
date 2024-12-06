import { createRouter, createWebHistory } from "vue-router";
import HomeCDC from "../views/HomeCDC.vue";
import DonationCDC from "../views/DonationCDC.vue";
import ParticipateCDC from "../views/ParticipateCDC.vue";
import StoriesCDC from "../views/StoriesCDC.vue";
import AboutCDC from "../views/AboutCDC.vue";

const routes = [
  { path: "/", name: "Home", component: HomeCDC },
  { path: "/donation", name: "Donation", component: DonationCDC },
  { path: "/participate", name: "Participate", component: ParticipateCDC },
  { path: "/stories", name: "Stories", component: StoriesCDC },
  { path: "/about", name: "About", component: AboutCDC },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
