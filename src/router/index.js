import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Login from "../views/Login.vue";
import SignUp from "../views/SignUp.vue";
import Order from "../views/Order.vue";



Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/login",
    name: "login",
    component: Login
  },
  {
    path: "/signUp",
    name: "signUp",
    component: SignUp
  },
  {
    path: "/order",
    name: "order",
    component: Order
  }
];

const router = new VueRouter({
  routes
});

export default router;
