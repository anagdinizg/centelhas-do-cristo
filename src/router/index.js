import { createRouter, createWebHistory } from "vue-router";
import HomeCDC from "../views/HomeCDC.vue";
import DonationCDC from "../views/DonationCDC.vue";
import ParticipateCDC from "../views/ParticipateCDC.vue";
import AboutCDC from "../views/AboutCDC.vue";
import OurJobCDC from "../views/OurJobCDC.vue";

const routes = [
  { path: "/", name: "Home", component: HomeCDC },
  { path: "/donation", name: "Donation", component: DonationCDC },
  { path: "/participate", name: "Participate", component: ParticipateCDC },
  { path: "/about", name: "About", component: AboutCDC },
  { path: "/ourJob", name: "OurJob", component: OurJobCDC },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
