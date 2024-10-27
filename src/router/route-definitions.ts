import HomeView from "@/views/HomeView.vue";
import CartView from "@/views/CartView.vue";

export const ROUTES = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/cart",
    name: "cart",
    component: CartView,
  },
];
