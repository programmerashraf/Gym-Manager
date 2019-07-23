import Vue from 'vue';
import VueRouter from 'vue-router';

import axios from 'axios';
import { store } from './components/store/store';

import App from './components/App.vue';
import Home from "./components/pages/Home.vue";
import Profile from "./components/pages/Profile.vue";
import News from "./components/pages/News.vue";

import dashboard from "./components/dash/dashboard.vue"


// import A from "./component/dash/blocks"

Vue.use(axios);
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
        {
            path: "/news",
            name: "news",
            component: News
        }
    ]
})

const app = new Vue({
    el: '#app',
    router,
    store,
    components: {App}
});

const dash = new Vue({
    el: '#dash',
    store,
    components: {dashboard}
});

