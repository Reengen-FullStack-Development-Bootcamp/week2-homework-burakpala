import Vue from "vue";
import VueRouter from "vue-router";

import Home from "./components/Home";
import HotelDetail from "./components/HotelDetail";
import Reservation from "./components/Reservation";

Vue.use(VueRouter);

const routes = [
	{ path: "/", component: Home},
	{ path: "/hotel/:id", component: HotelDetail, props: true },
	{ path: "/reservation", component: Reservation }
];

export const router = new VueRouter({
	mode: "history",
	routes
});