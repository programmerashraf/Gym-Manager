import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './components/App.vue';
import Home from "./components/pages/Home.vue";
import Profile from "./components/pages/Profile.vue";

Vue.use(VueRouter);

const router = new VueRouter({
    mode: "history",
    routes: [
        {
            path: "/",
            name: "Home",
            component: Home
        },
        {
            path: "/profile",
            name: "profile",
            component: Profile
        },
    ]
})

const app = new Vue({
    el: '#app',
    router,
    components: {App}
});
